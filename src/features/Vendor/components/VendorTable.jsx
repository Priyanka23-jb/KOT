export default function VendorTable() {
  const vendors = [
    {
      id: 1,
      name: "Fresh Foods Pvt Ltd",
      phone: "9876543210",
      type: "Food Supplier",
      status: "Active",
    },
    {
      id: 2,
      name: "Beverage Hub",
      phone: "9123456789",
      type: "Beverage Supplier",
      status: "Active",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-purple-600 mb-4">
        Vendor
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-dashed border-gray-300">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 border border-dashed">ID</th>
              <th className="border border-dashed">Vendor</th>
              <th className="border border-dashed">Phone no.</th>
              <th className="border border-dashed">Type</th>
              <th className="border border-dashed">Status</th>
              <th className="border border-dashed">Actions</th>
            </tr>
          </thead>

          <tbody>
            {vendors.map((v) => (
              <tr key={v.id} className="text-center">
                <td className="p-3 border border-dashed">{v.id}</td>
                <td className="border border-dashed font-medium">
                  {v.name}
                </td>
                <td className="border border-dashed">{v.phone}</td>
                <td className="border border-dashed">
                  <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">
                    {v.type}
                  </span>
                </td>
                <td className="border border-dashed">
                  <span className="px-3 py-1 rounded bg-green-500 text-white text-xs">
                    Active
                  </span>
                </td>
                <td className="border border-dashed space-x-2">
                  <button className="px-2 py-1 border rounded text-purple-600 border-purple-400">
                    ✎
                  </button>
                  <button className="px-2 py-1 border rounded text-red-500 border-red-400">
                    ✕
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
