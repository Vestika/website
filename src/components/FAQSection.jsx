import { useState, useEffect, useRef } from 'react';

const FAQSection = ({ id, title, questions }) => {
  const [openQuestions, setOpenQuestions] = useState(new Set());
  const hasInitializedRef = useRef(false);

  // Handle initial hash on mount AND whenever component hydrates
  useEffect(() => {
    const rawHash = window.location.hash.slice(1);
    const hash = decodeURIComponent(rawHash); // Decode URL-encoded Hebrew characters
    
    if (hash && !hasInitializedRef.current) {
      // Check if it's a question hash
      const matchingQuestion = questions.find(q => q.id === hash);
      
      if (matchingQuestion) {
        setOpenQuestions(new Set([hash]));
        hasInitializedRef.current = true;
        
        // Scroll after a delay to ensure the content is expanded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 500);
      } else if (hash === `section-${id}`) {
        // Handle section hash
        hasInitializedRef.current = true;
        
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    }
  }, [id, questions]);

  // Handle hash changes after initial mount
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.slice(1);
      const hash = decodeURIComponent(rawHash); // Decode URL-encoded Hebrew characters
      
      if (hash) {
        const matchingQuestion = questions.find(q => q.id === hash);
        
        if (matchingQuestion) {
          setOpenQuestions(prev => {
            const newSet = new Set(prev);
            newSet.add(hash);
            return newSet;
          });
          
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              const navHeight = 80;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - navHeight;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
        } else if (hash === `section-${id}`) {
          // Handle section hash change
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              const navHeight = 80;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - navHeight;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [id, questions]);

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });

    // Update URL hash (browser will automatically encode Hebrew)
    if (!openQuestions.has(questionId)) {
      window.history.pushState(null, '', `#${questionId}`);
    }
  };

  const handleSectionClick = () => {
    // Update URL hash with section ID (with section- prefix to match the div ID)
    window.history.pushState(null, '', `#section-${id}`);
  };

  return (
    <div className="mb-16">
      <h2 
        className="text-3xl font-bold text-right mb-8 text-gray-100 border-b border-gray-700 pb-4 cursor-pointer hover:text-cyan-400 transition-colors"
        onClick={handleSectionClick}
      >
        {title}
      </h2>
      <div className="space-y-1">
        {questions.map((question) => {
          const isOpen = openQuestions.has(question.id);
          return (
            <div
              key={question.id}
              id={question.id}
              className="border-b border-gray-800 last:border-b-0 py-2"
            >
              <button
                onClick={() => toggleQuestion(question.id)}
                className="w-full py-4 text-right flex items-center gap-4 group hover:bg-gray-900/30 transition-colors px-2 rounded"
              >
                <svg
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <h3 className="text-xl md:text-lg font-medium text-gray-200 group-hover:text-cyan-400 transition-colors flex-1 text-right">
                  {question.question}
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pr-11 pb-6 text-right">
                  <div 
                    className="text-lg md:text-base max-w-none text-gray-400 leading-relaxed prose-invert"
                    dangerouslySetInnerHTML={{ __html: question.answer }}
                  />
                  {question.links && question.links.length > 0 && (
                    <div className="mt-4 flex gap-4 justify-end flex-wrap">
                      {question.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;

