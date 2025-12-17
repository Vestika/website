const FAQHeader = () => {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-blue-400">Vestika</h1>
          <p className="text-2xl mb-8 text-gray-300">מערכת ניהול נכסים פיננסיים</p>
          <a
            href="https://app.vestika.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            כניסה למערכת
          </a>
        </div>
      </div>
    </header>
  );
};

export default FAQHeader;

