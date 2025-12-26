const FAQFooter = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 mt-16 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400" style={{ fontFamily: "'Poiret One', cursive" }}>Vestika</h3>
          <p className="text-gray-400 mb-6">
            מערכת ניהול נכסים פיננסיים בקוד פתוח
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a
            href="https://app.vestika.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            כניסה למערכת
          </a>
          <a
            href="https://github.com/Vestika/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@vestika.io"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            יצירת קשר
          </a>
        </div>
        <div className="text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Vestika. קוד פתוח ללא עלות.</p>
        </div>
      </div>
    </footer>
  );
};

export default FAQFooter;

