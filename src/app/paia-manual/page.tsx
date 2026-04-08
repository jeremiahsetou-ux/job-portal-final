import { Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAIA Section 51 Manual – JobHelper',
  description: 'JobHelper PAIA Section 51 Manual - Information about our records and how to request access.',
};

export default function PaiaManualPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              PAIA Section 51 Manual
            </h1>
            <p className="text-xl text-gray-200">
              Promotion of Access to Information Act
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 p-4 bg-muted/50 rounded-lg border">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Effective Date:</span> 7 April 2026
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="font-medium">Information Officer:</span> Jeremiah Setou
          </p>
        </div>

        {/* 1. Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            This manual is published as required by Section 51 of the Promotion of Access to Information Act, 2000 (PAIA). The manual provides information about the records held by JobHelper and the procedures for requesting access to such records. PAIA gives any person the right to request access to records held by a private body, subject to certain limitations.
          </p>
        </section>

        {/* 2. Contact Details of the Private Body */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Contact Details of the Private Body</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Physical Address</p>
                  <p className="text-sm text-muted-foreground">
                    8128 Mahlangu Street<br />
                    Mohlakeng<br />
                    Randfontein, 1759<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@jobhelper.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">069 708 6808</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Contact Details of the Information Regulator */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. Contact Details of the Information Regulator</h2>
          <div className="bg-muted/30 p-6 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-foreground mb-2">Physical Address</p>
                <p className="text-muted-foreground">
                  JD House<br />
                  27 Stiemens Street<br />
                  Braamfontein<br />
                  Johannesburg, 2001
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Contact</p>
                <p className="text-muted-foreground">
                  Email: inforeg@justice.gov.za<br />
                  Phone: +27 10 023 5200<br />
                  Website: <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    justice.gov.za/inforeg/ <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Description of Records Held */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Description of Records Held</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border font-medium">Category</th>
                  <th className="text-left p-3 border font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Administrative Records</td>
                  <td className="p-3 border text-muted-foreground">Business registration documents, policies, procedures, employee records</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Financial Records</td>
                  <td className="p-3 border text-muted-foreground">Accounting records, tax compliance documents, bank statements, invoices</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">User Data</td>
                  <td className="p-3 border text-muted-foreground">Contact form submissions, email subscriptions, job alert preferences</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Affiliate Records</td>
                  <td className="p-3 border text-muted-foreground">Affiliate agreements, commission records, partner communications</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Communication Records</td>
                  <td className="p-3 border text-muted-foreground">Correspondence with users, complaints, inquiries</td>
                </tr>
                <tr>
                  <td className="p-3 border text-foreground font-medium">Technical Records</td>
                  <td className="p-3 border text-muted-foreground">Server logs, analytics data, security records</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Records Available Automatically */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Records Available Automatically</h2>
          <p className="text-muted-foreground mb-4">The following records are automatically available to the public without requiring a formal PAIA request:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• All published news articles</li>
            <li>• Job listings and opportunities</li>
            <li>• Privacy Policy</li>
            <li>• Terms & Conditions</li>
            <li>• About Us page</li>
            <li>• This PAIA Manual</li>
          </ul>
        </section>

        {/* 6. Procedure for Requesting Access */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Procedure for Requesting Access</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Complete the prescribed Form C (Request for Access to Record)</li>
            <li>Submit the completed form to the Information Officer via email or physical address</li>
            <li>Pay the request fee (if applicable)</li>
            <li>Information Officer will respond within 30 days</li>
            <li>If access is granted, arrangements will be made for inspection or copies</li>
          </ol>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 text-blue-800">
              <Download className="w-5 h-5" />
              <span className="font-medium">Form C Download</span>
            </div>
            <p className="text-sm text-blue-700 mt-2">
              The prescribed Form C is available from the Information Regulator's website at{' '}
              <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="underline">
                justice.gov.za/inforeg/
              </a>
            </p>
          </div>
        </section>

        {/* 7. Fees */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Fees</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">Request fee:</span> R50.00 (may apply to all requests)</li>
            <li><span className="font-medium text-foreground">Photocopying:</span> R1.00 per page (A4)</li>
            <li><span className="font-medium text-foreground">Printed copies:</span> R2.00 per page (A4)</li>
            <li><span className="font-medium text-foreground">Electronic format:</span> R50.00 for CD/DVD</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Fees may be waived for requests in the public interest. Payment details will be provided upon request.
          </p>
        </section>

        {/* 8. Grounds for Refusal */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Grounds for Refusal</h2>
          <p className="text-muted-foreground mb-4">Access to certain records may be refused on the following grounds:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium text-foreground">Protection of personal information:</span> Records containing personal information about a third party</li>
            <li><span className="font-medium text-foreground">Commercial secrets:</span> Trade secrets or confidential commercial information</li>
            <li><span className="font-medium text-foreground">Legal privilege:</span> Privileged communications between lawyer and client</li>
            <li><span className="font-medium text-foreground">Safety:</span> Records that would endanger the life or physical safety of a person</li>
          </ul>
        </section>

        {/* 9. Availability of this Manual */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Availability of this Manual</h2>
          <p className="text-muted-foreground leading-relaxed">
            This manual is available free of charge on the JobHelper website. A printed copy may also be obtained from our physical address during business hours. This manual will be updated as required by Section 51(3) of PAIA.
          </p>
        </section>
      </div>
    </div>
  );
}