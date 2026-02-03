export default function TablesList() {
  const tables = [
    {
      id: 1,
      tableNo: "T-01",
      status: "Occupied",
      items: 4,
      total: 820,
    },
    {
      id: 2,
      tableNo: "T-02",
      status: "Available",
      items: 0,
      total: 0,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow border overflow-x-auto">

      <table className="w-full text-sm">
        <thead className="bg-orange-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Table No</th>
            <th>Status</th>
            <th>Items</th>
            <th>Total (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tables.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-3 font-medium">{t.tableNo}</td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    t.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : t.status === "Occupied"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {t.status}
                </span>
              </td>

              <td>{t.items}</td>
              <td>{t.total}</td>

              <td className="space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Clear</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
