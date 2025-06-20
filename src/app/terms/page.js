export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 pt-28">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-400 border-b border-white/10 pb-2">Terms of Service</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        By accessing and using Botnix Cloud services, you agree to the following legally binding terms:
      </p>
      <ul className="list-decimal list-inside mt-4 space-y-3 text-gray-400 text-md">
        <li>You must be at least 13 years old or meet the age of digital consent in your jurisdiction.</li>
        <li>You agree to provide accurate billing and contact information at all times.</li>
        <li>You must not use our services to engage in illegal activities, including but not limited to DDoS, phishing, or hosting pirated content.</li>    
        <li>Failure to pay invoices on time may result in suspension or termination without refund.</li>
        <li>Botnix Cloud reserves the right to modify or terminate services with or without notice.</li>
        <li>We are not liable for any data loss, service outages, or consequential damages.</li>
      </ul>
    </div>
  );
}