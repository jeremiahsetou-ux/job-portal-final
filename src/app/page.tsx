export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <header className="bg-red-600 p-8 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">JobHelper.co.za 🇿🇦</h1>
          <p className="mt-2 text-red-100 opacity-90">Connecting South Africans to Opportunity</p>
        </header>

        {/* Job Listings Area */}
        <main className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Latest Vacancies</h2>
          
          {/* Job Card 1 */}
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900">Shoprite: General Worker</h3>
            <p className="text-sm text-gray-600 font-medium">Location: Nationwide | Requirements: Grade 12</p>
            <button className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition">Apply Now</button>
          </div>

          {/* Job Card 2 */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
            <h3 className="text-lg font-bold text-gray-900">Sasol: Petrol Attendant</h3>
            <p className="text-sm text-gray-600 font-medium text-blue-700 italic">Coming Soon - Johannesburg & Durban</p>
          </div>
        </main>

        <footer className="bg-gray-100 p-4 text-center text-xs text-gray-400 uppercase tracking-widest">
          &copy; 2026 JobHelper.co.za
        </footer>
      </div>
    </div>
  );
}