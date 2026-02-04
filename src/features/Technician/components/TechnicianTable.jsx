export default function TechnicianTable() {
  const technicians = [
    {
      id: 1,
      name: "Rohit Kumar",
      phone: "9876543210",
      skill: "Kitchen Equipment",
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Singh",
      phone: "9123456789",
     
      skill: "Electrical",
      status: "Inactive",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-purple-600 mb-4">
        Technician List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-dashed text-sm">
          <thead className="bg-purple-50">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Skill</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {technicians.map((t) => (
              <tr key={t.id} className="text-center">
                <td className="p-3 border">{t.id}</td>
                <td className="p-3 border font-medium">{t.name}</td>
                <td className="p-3 border">{t.phone}</td>
                <td className="p-3 border">{t.skill}</td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      t.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {t.status}
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
