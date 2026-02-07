import React from "react";

/* === SAME STYLES USED IN CreateVendor === */
const cardClass =
  "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 " +
  "bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white " +
  "focus:ring-2 focus:ring-purple-500 focus:border-transparent";

const labelClass =
  "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

const Page = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ================= LEFT: ADD AMC PAGE ================= */}
        <div className={cardClass}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-t-xl font-semibold -m-8 mb-6">
            Add AMC Page
          </div>

          <div className="space-y-6">
            <div>
              <label className={labelClass}>Page Name *</label>
              <input
                type="text"
                placeholder="enter page name"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Page Title *</label>
              <input
                type="text"
                placeholder="enter page title"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Page Keyword</label>
              <input
                type="text"
                placeholder="enter keywords"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Page Description</label>
              <textarea
                rows="3"
                placeholder="enter page description"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Content</label>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
                <div className="px-4 py-2 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20">
                  Editor Toolbar
                </div>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 bg-transparent text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="write content here..."
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Image</label>
              <input type="file" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Status</label>
              <select className={inputClass}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-700 hover:to-purple-800 transition">
                Save
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: AMC PAGES LIST ================= */}
        <div className={cardClass}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-t-xl font-semibold -m-8 mb-6">
            AMC Pages
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-purple-50 dark:bg-purple-900/20">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">#</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Page Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  "SHIPPING",
                  "CANCELLATION & REFUND POLICY",
                  "Consulting",
                  "Privacy Policy",
                  "TERM AND CONDITION",
                  "FAQ",
                  "About Us",
                  "About Hostels",
                ].map((name, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium">{name}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                        Active
                      </span>
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <button className="px-3 py-1 text-xs rounded-md bg-yellow-400 hover:bg-yellow-500 text-white">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-xs rounded-md bg-red-500 hover:bg-red-600 text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
