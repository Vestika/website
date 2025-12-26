const FAQHeader = () => {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 text-white pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 text-cyan-400" style={{ fontFamily: "'Poiret One', cursive" }}>Vestika</h1>
          <p className="text-2xl mb-8 text-gray-300">מערכת ניהול נכסים פיננסיים</p>
          <a
            href="https://app.vestika.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            כניסה למערכת
          </a>
        </div>
      </div>
    </header>
  );
};

export default FAQHeader;

