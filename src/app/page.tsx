import React from 'react';

export default function Home() {
  const jobs = [
    { id: 1, title: "General Worker", company: "Shoprite", location: "Gauteng", type: "Full-time", color: "border-red-500" },
    { id: 2, title: "Driver (Code 14)", company: "Imperial Logistics", location: "Durban", type: "Contract", color: "border-blue-500" },
    { id: 3, title: "Petrol Attendant", company: "Sasol", location: "Cape Town", type: "Permanent", color: "border-green-500" },
    { id: 4, title: "Security Officer", company: "Fidelity ADT", location: "Johannesburg", type: "Shift Work", color: "border-yellow-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <span className="text-2xl font-black text-red-600 tracking-tighter">JOBHELPER.CO.ZA</span>
        <div className="space-x-6 text-sm font-bold text-gray-600 uppercase">
          <a href="/" className="hover:text-red-600">Home</a>
          <a href="/about" className="hover:text-red-600">About Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-red-600 py-12 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Your Next Job is Waiting.</h1>
        <p className="text-lg text-red-100 mb-8 max-w-xl mx-auto">Access the latest vacancies across South Africa. No registration required.</p>
        
        {/* Search Bar Simulation */}
        <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex shadow-2xl">
          <input type="text" placeholder="Search jobs (e.g. Driver, Retail)" className="flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none" />
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition">Search</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 underline decoration-red-500 decoration-4 underline-offset-8">Featured Opportunities</h2>
          <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 italic">Updated: Today</span>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className={`bg-white p-6 rounded-2xl shadow-sm border-l-8 ${job.color} hover:shadow-md transition cursor-pointer group`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition">{job.title}</h3>
                  <p className="text-gray-500 font-medium">{job.company}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest bg-gray-100 px-2 py-1 rounded">{job.type}</span>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <span className="mr-4">📍 {job.location}</span>
                <span>📅 Posted 2h ago</span>
              </div>
              <button className="mt-6 w-full bg-gray-50 text-gray-900 py-3 rounded-xl font-bold border border-gray-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition uppercase text-sm tracking-wider">View Full Details</button>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-200 mt-12">
        <p className="font-bold">JOBHELPER SOUTH AFRICA</p>
        <p className="mt-2 tracking-widest uppercase">Empowering our community through employment</p>
      </footer>
    </div>
  );
}