export default function UsersTable() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">User List</h2>

      <table className="w-full text-sm border border-dashed">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Client</th>
            <th className="p-3 border">Phone no.</th>
            <th className="p-3 border">User Type</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
            <th className="p-3 border">Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border font-medium">Samir Sahoo</td>
            <td className="p-3 border">7873880040</td>
            <td className="p-3 border">
              <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-xs">
                Admin
              </span>
            </td>
            <td className="p-3 border">
              <span className="bg-green-500 text-white px-3 py-1 rounded text-xs">
                Active
              </span>
            </td>
            <td className="p-3 border text-center space-x-2">
              <button className="text-blue-600">✎</button>
              <button className="text-red-600">✕</button>
            </td>
            <td className="p-3 border text-center">
              <button className="bg-blue-600 text-white px-4 py-1 rounded">
                Role
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
