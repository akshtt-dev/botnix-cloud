export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 pt-28">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-400 border-b border-white/10 pb-2">Refund Policy</h1>
      <p className="text-gray-300 text-lg leading-relaxed">
        At Botnix Cloud, we strive for customer satisfaction. Please read our refund terms carefully:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-3 text-gray-400 text-md">
        <li>Refunds are only considered for technical issues reported within 24 hours of purchase.</li>
        <li>Refund requests must include detailed explanation and proof of the issue.</li>
        <li>We reserve the right to decline any refund request that does not meet our criteria.</li>
        <li>Chargebacks will result in immediate service termination and blacklist from future use.</li>
      </ul>
    </div>
  );
}