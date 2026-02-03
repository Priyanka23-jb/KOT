export default function ProfitLossCards() {
  const cards = [
    { label: "Total Sales", value: "₹ 25,000" },
    { label: "Total Expense", value: "₹ 12,000" },
    { label: "Net Profit", value: "₹ 13,000" },
    { label: "Orders", value: "48" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-white border border-orange-100 rounded-xl shadow-sm p-5"
        >
          <p className="text-sm text-gray-500">{c.label}</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">
            {c.value}
          </p>
        </div>
      ))}
    </div>
  );
}
