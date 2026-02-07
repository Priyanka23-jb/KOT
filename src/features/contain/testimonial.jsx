import React from "react";

/* === SAME DESIGN SYSTEM AS PAGE & CREATE VENDOR === */
const cardClass =
  "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 " +
  "bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white " +
  "focus:ring-2 focus:ring-purple-500 focus:border-transparent";

const labelClass =
  "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

const Testimonial = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ================= LEFT: ADD TESTIMONIAL ================= */}
        <div className={cardClass}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-t-xl font-semibold -m-8 mb-6">
            Add Testimonial
          </div>

          <div className="space-y-6">
            {/* Testimonial Name */}
            <div>
              <label className={labelClass}>Enter Testimonial Name *</label>
              <input
                type="text"
                placeholder="enter testimonial name"
                className={inputClass}
                required
              />
            </div>

            {/* Testimonial Message */}
            <div>
              <label className={labelClass}>Enter Testimonial Message *</label>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
                {/* Fake editor toolbar (UI only, like image) */}
                <div className="px-4 py-2 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20">
                  Editor Toolbar
                </div>
                <textarea
                  rows="8"
                  className="w-full px-4 py-3 bg-transparent text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="write testimonial message here..."
                  required
                />
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <label className={labelClass}>Upload Testimonial Image *</label>
              <input type="file" className={inputClass} required />
            </div>

            {/* Submit */}
            <div>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-700 hover:to-purple-800 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: TESTIMONIAL LIST ================= */}
        <div className={cardClass}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-t-xl font-semibold -m-8 mb-6">
            Testimonial List
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-purple-50 dark:bg-purple-900/20">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Sl.#
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Testimonial Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { name: "Sweta Barik", img: "https://i.pravatar.cc/80?img=47" },
                  { name: "Samir Sahoo", img: "https://i.pravatar.cc/80?img=12" },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-4 py-3">{index + 1}</td>

                    <td className="px-4 py-3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded object-cover border"
                      />
                    </td>

                    <td className="px-4 py-3 font-medium">
                      {item.name}
                    </td>

                    <td className="px-4 py-3 space-x-2">
                      <button className="px-3 py-1 text-xs rounded-md bg-teal-500 hover:bg-teal-600 text-white">
                        EDIT
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

export default Testimonial;
