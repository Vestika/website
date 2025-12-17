import { useState, useEffect } from 'react';

const FAQSection = ({ id, title, questions }) => {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  useEffect(() => {
    // Handle deep linking
    const hash = window.location.hash.slice(1);
    if (hash && questions.some(q => q.id === hash)) {
      setOpenQuestions(new Set([hash]));
      // Scroll to the question after a brief delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [questions]);

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

    // Update URL hash
    if (!openQuestions.has(questionId)) {
      window.history.pushState(null, '', `#${questionId}`);
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-right mb-8 text-gray-100 border-b border-gray-700 pb-4">
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
                  className={`w-5 h-5 text-blue-400 transition-transform duration-200 flex-shrink-0 ${
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
                <h3 className="text-lg font-medium text-gray-200 group-hover:text-blue-400 transition-colors flex-1 text-right">
                  {question.question}
                </h3>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pr-11 pb-6 text-right">
                  <div className="text-base max-w-none text-gray-400 leading-relaxed whitespace-pre-line">
                    {question.answer}
                  </div>
                  {question.links && question.links.length > 0 && (
                    <div className="mt-4 flex gap-4 justify-end flex-wrap">
                      {question.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
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

