function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-purple-900 text-white p-12 relative">
      {/* Main content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4">
          Hi! I'm Alan HUNG
        </h1>
        <h2 className="text-4xl">
          Welcome to my home page!
        </h2>
      </div>

      {/* Circle decoration */}
      <div className="absolute top-12 right-12 w-40 h-40 bg-gray-200 rounded-full">
      </div>
    </div>
  );
}

export default App;