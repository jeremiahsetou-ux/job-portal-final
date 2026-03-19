// src/app/z83-form/page.tsx
export default function Z83Form() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Z83 Form Guide</h1>
      <p className="text-center text-slate-600 mb-8">
        The Z83 form is used when applying for government positions in South Africa.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Personal Information</h2>
        <p className="text-slate-700">Fill in your full name, ID number, and contact details.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Education</h2>
        <p className="text-slate-700">List all your educational qualifications.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Work Experience</h2>
        <p className="text-slate-700">Include all relevant work experience.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Declaration</h2>
        <p className="text-slate-700">Sign and date the form. Ensure information is accurate.</p>
      </section>

      <div className="text-center mt-12">
        <a
          href="/z83-form/download"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Download Z83 Form PDF
        </a>
      </div>
    </div>
  );
}