export default function AddUserForm() {
  return (
    <form className="space-y-6">

      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        Add User
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="text-sm text-gray-600">Contact No</label>
          <input
            type="text"
            placeholder="Contact number"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* User Type */}
        <div>
          <label className="text-sm text-gray-600">User Type</label>
          <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
            <option>Select User Type</option>
            <option>Admin</option>
            <option>Cashier</option>
            <option>Waiter</option>
          </select>
        </div>

        {/* Upload Image */}
        {/* <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Upload Image</label>
          <input
            type="file"
            className="w-full border rounded-lg px-4 py-2 bg-white"
          />
        </div> */}

        {/* Username */}
        <div>
          <label className="text-sm text-gray-600">Username</label>
          <input
            type="text"
            value="admin"
            disabled
            className="w-full border rounded-lg px-4 py-2 bg-orange-50 text-orange-700 font-medium"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            value="••••••••"
            disabled
            className="w-full border rounded-lg px-4 py-2 bg-orange-50"
          />
        </div>

      </div>

      {/* Submit */}
      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow-md transition"
        >
          Submit
        </button>
      </div>

    </form>
  );
}
