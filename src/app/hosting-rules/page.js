const hostingRules = [
  "It is strictly prohibited to host any content or services that violate local, state, or international law.",
  "Phishing websites, malware distribution, botnets, or any form of hacking infrastructure are banned.",
  "Resource abuse (CPU, disk, network) will lead to automated suspension or throttling.",
  "All hosted content must comply with our Acceptable Use Policy (AUP).",
  "Botnix Cloud may suspend or terminate accounts for violations without prior notice.",
  "Abuse complaints must be responded to within 24 hours or services may be disabled.",
  "You must not run cryptocurrency miners unless explicitly allowed.",
  "Chargeback after product delivery results in termination.",
  "No DDoSing, illegal activities.",
  "No PteroVM, proot, or similar software (also known as a 'free' VPS)."
];

export default function HostingRulesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 pt-28">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-400 border-b border-white/10 pb-2 text-center">
        Hosting Rules
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {hostingRules.map((rule, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-lg shadow-md border border-white/10 hover:shadow-red-500/10 transition-all"
          >
            <h2 className="text-lg font-semibold text-white mb-1">Rule {index + 1}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}