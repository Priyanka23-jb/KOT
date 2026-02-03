export default function ProfitLossTable() {
  const rows = [
    {
      date: "03-02-2026",
      sales: 5000,
      expense: 2400,
      profit: 2600,
    },
    {
      date: "02-02-2026",
      sales: 4200,
      expense: 1800,
      profit: 2400,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow border">

      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-semibold text-gray-800">
          Profit & Loss Statement
        </h2>

        {/* Date Filter (UI only) */}
        <div className="flex gap-2">
          <input type="date" className="border rounded px-3 py-1 text-sm" />
          <input type="date" className="border rounded px-3 py-1 text-sm" />
          <button className="bg-orange-500 text-white px-4 py-1 rounded">
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-orange-50 text-gray-600">
            <tr>
              <th className="p-3 text-left">Date</th>
              <th className="text-left">Sales (₹)</th>
              <th className="text-left">Expense (₹)</th>
              <th className="text-left">Profit (₹)</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{r.date}</td>
                <td>{r.sales}</td>
                <td>{r.expense}</td>
                <td className="font-semibold text-green-600">
                  {r.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
