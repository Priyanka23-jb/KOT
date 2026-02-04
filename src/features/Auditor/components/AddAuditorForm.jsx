export default function AddAuditorForm() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold text-purple-600 mb-6">
        Add Auditor
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600">Auditor Name</label>
          <input
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Full name"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Email address"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Contact No</label>
          <input
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Phone number"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Audit Type</label>
          <select className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none">
            <option>Select Audit Type</option>
            <option>Financial Audit</option>
            <option>Compliance Audit</option>
            <option>Internal Audit</option>
            <option>Operational Audit</option>
          </select>
        </div>
      </div>

      <div className="mt-6 text-right">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow">
          Submit
        </button>
      </div>
    </div>
  );
}
