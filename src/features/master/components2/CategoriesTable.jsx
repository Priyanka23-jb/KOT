export default function CategoriesTable() {
  const categories = [
    {
      id: 1,
      name: "Starter",
      foodType: "Veg",
      status: "Active",
      created: "2026-02-01",
      updated: "2026-02-03",
    },
    {
      id: 2,
      name: "Starter",
      foodType: "Non-Veg",
      status: "Active",
      created: "2026-02-01",
      updated: "2026-02-03",
    },
    {
      id: 3,
      name: "Main Course",
      foodType: "Veg",
      status: "Active",
      created: "2026-02-01",
      updated: "2026-02-03",
    },
    {
      id: 4,
      name: "Beverage",
      foodType: "Veg",
      status: "Active",
      created: "2026-02-01",
      updated: "2026-02-03",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow border overflow-x-auto">

      <table className="w-full text-sm">
        <thead className="bg-orange-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th>Category</th>
            <th>Food Type</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-t">
              <td className="p-3">{cat.id}</td>

              <td className="font-medium">{cat.name}</td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    cat.foodType === "Veg"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {cat.foodType}
                </span>
              </td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    cat.status === "Active"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {cat.status}
                </span>
              </td>

              <td>{cat.created}</td>
              <td>{cat.updated}</td>

              <td className="space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
