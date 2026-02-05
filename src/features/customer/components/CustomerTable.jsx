export default function CustomerTable({ data }) {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-4 text-left font-medium text-gray-700">ID</th>
            <th className="p-4 text-left font-medium text-gray-700">Client</th>
            <th className="p-4 text-left font-medium text-gray-700">Phone no.</th>
            <th className="p-4 text-left font-medium text-gray-700">Type</th>
            <th className="p-4 text-left font-medium text-gray-700">Status</th>
            <th className="p-4 text-left font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-6 text-center text-gray-500">
                No customers found
              </td>
            </tr>
          ) : (
            data.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50">
                <td className="p-4 text-gray-600">{c.id}</td>
                <td className="p-4 font-medium">{c.name}</td>
                <td className="p-4">{c.phone}</td>
                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded bg-gray-100 text-gray-800">
                    {c.type}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded bg-green-100 text-green-800 font-medium">
                    {c.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}