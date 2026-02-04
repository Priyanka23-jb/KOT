export default function AuditorTable() {
  const auditors = [
    {
      id: 1,
      name: "Neha Sharma",
      phone: "9876501234",
      auditType: "Compliance Audit",
      status: "Active",
    },
    {
      id: 2,
      name: "Rakesh Verma",
      phone: "9123409876",
      auditType: "Financial Audit",
      status: "Inactive",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-purple-600 mb-4">
        Auditor List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-dashed text-sm">
          <thead className="bg-purple-50">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Audit Type</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {auditors.map((a) => (
              <tr key={a.id} className="text-center">
                <td className="p-3 border">{a.id}</td>
                <td className="p-3 border font-medium">{a.name}</td>
                <td className="p-3 border">{a.phone}</td>
                <td className="p-3 border">{a.auditType}</td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      a.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="p-3 border space-x-2">
                  <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-red-600 border border-red-600 rounded hover:bg-red-50">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
