const FAQNav = ({ sections }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-2 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FAQNav;

