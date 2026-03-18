export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold text-red-600 mb-4">About JobHelper 🇿🇦</h1>
        <p className="text-gray-700 leading-relaxed">
          We are dedicated to simplifying the job search for South Africans. 
          Our mission is to provide easy access to entry-level vacancies and 
          government opportunities in one clean, fast platform.
        </p>
        <a href="/" className="mt-6 inline-block text-red-600 font-bold hover:underline">
          ← Back to Vacancies
        </a>
      </div>
    </div>
  );
}