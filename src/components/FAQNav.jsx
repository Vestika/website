const FAQNav = ({ sections }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const navHeight = 80; // Height of sticky navigation bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash with section anchor
      window.history.pushState(null, '', `#section-${sectionId}`);
    }
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide md:flex-wrap md:justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
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

