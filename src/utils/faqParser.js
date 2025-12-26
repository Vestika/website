import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/**
 * Parse markdown FAQ content and convert to structured format
 */
export function parseFAQMarkdown(markdownContent) {
  const lines = markdownContent.split('\n');
  const sections = [];
  let currentSection = null;
  let currentQuestion = null;
  let answerLines = [];

  // Helper to generate ID from text
  const generateId = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\u0590-\u05FFa-z0-9\s]/g, '') // Keep Hebrew, English, numbers, spaces
      .trim()
      .replace(/\s+/g, '-')
      .substring(0, 50);
  };

  // Helper to parse links in text
  const parseLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
      links.push({
        text: match[1],
        url: match[2]
      });
    }
    
    return links;
  };

  // Helper to remove markdown links from text
  const removeLinks = (text) => {
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '');
  };

  // Helper to convert markdown formatting to HTML using marked library
  const parseMarkdownFormatting = (text) => {
    // Use marked to parse markdown to HTML
    // marked.parse handles block elements (like lists), parseInline only handles inline
    const result = marked.parse(text, { 
      breaks: true,  // Convert \n to <br>
      gfm: true      // GitHub Flavored Markdown (strikethrough support)
    });
    
    // Remove wrapping <p> tags that marked adds
    return result.replace(/^<p>|<\/p>\n?$/g, '').trim();
  };

  // Process answer lines
  const processAnswer = () => {
    if (currentQuestion && answerLines.length > 0) {
      const fullAnswer = answerLines.join('\n').trim();
      const links = parseLinks(fullAnswer);
      let answerText = removeLinks(fullAnswer).trim();
      
      // Apply markdown formatting (bold, italic, strikethrough)
      answerText = parseMarkdownFormatting(answerText);
      
      currentQuestion.answer = answerText;
      if (links.length > 0) {
        currentQuestion.links = links;
      }
      
      answerLines = [];
    }
  };

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Section header (##)
    if (trimmedLine.startsWith('## ') && !trimmedLine.startsWith('###')) {
      // Save previous question if exists
      processAnswer();
      
      const sectionTitle = trimmedLine.substring(3).trim();
      currentSection = {
        id: generateId(sectionTitle),
        title: sectionTitle,
        questions: []
      };
      sections.push(currentSection);
      currentQuestion = null;
    }
    // Question header (###)
    else if (trimmedLine.startsWith('### ')) {
      // Save previous question if exists
      processAnswer();
      
      const questionText = trimmedLine.substring(4).trim();
      currentQuestion = {
        id: generateId(questionText),
        question: questionText,
        answer: ''
      };
      
      if (currentSection) {
        currentSection.questions.push(currentQuestion);
      }
    }
    // Content lines (answer text or links)
    else if (trimmedLine && !trimmedLine.startsWith('#') && currentQuestion) {
      answerLines.push(line); // Keep original indentation for markdown parsing
    }
    // Empty line - might be end of answer paragraph
    else if (!trimmedLine && answerLines.length > 0) {
      // Add empty line to preserve paragraph breaks
      answerLines.push('');
    }
  }

  // Process last question
  processAnswer();

  return sections;
}

/**
 * Load and parse FAQ from markdown file
 */
export function loadFAQContent(filePath) {
  try {
    const fullPath = path.resolve(filePath);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return parseFAQMarkdown(fileContent);
  } catch (error) {
    console.error('Error loading FAQ content:', error);
    throw error;
  }
}

