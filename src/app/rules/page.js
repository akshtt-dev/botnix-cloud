const rules = [
  "All users must treat others with respect and dignity at all times.",
  "Hate speech, harassment, or discriminatory behavior is strictly prohibited.",
  "Spamming, flooding, or unsolicited advertising will result in penalties.",
  "All content shared must comply with legal and ethical standards.",
  "Obey the instructions of moderators and administrators without dispute.",
  "Violation of Discord Terms of Service will lead to immediate suspension.",
  "Do not impersonate staff or other members.",
  "Avoid sharing personal or confidential information.",
  "Use appropriate usernames and profile pictures.",
  "Botnix Cloud reserves the right to take action on any disruptive behavior."
];

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 pt-28">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-400 border-b border-white/10 pb-2 text-center">
        Community Rules
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-lg shadow-md border border-white/10 hover:shadow-blue-500/10 transition-all"
          >
            <h2 className="text-lg font-semibold text-white mb-1">Rule {index + 1}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}