export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 pt-28">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-400 border-b border-white/10 pb-2">Privacy Policy</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        Botnix Cloud values your privacy. This policy explains how we collect, use, and protect your data:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-3 text-gray-400 text-md">
        <li>We collect only the data necessary to deliver our services (e.g., email, IP address, usage logs).</li>
        <li>Your data is stored securely and access is restricted to authorized personnel only.</li>
        <li>We do not sell, rent, or share your personal data with third parties except as required by law.</li>
        <li>You have the right to request access, correction, or deletion of your personal data at any time.</li>
        <li>Cookies are used for functional and analytics purposes only.</li>
      </ul>
    </div>
  );
}