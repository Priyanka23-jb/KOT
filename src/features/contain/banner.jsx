import React from "react";

/* === SAME DESIGN SYSTEM USED EVERYWHERE === */
const cardClass = "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 " +
  "bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white " +
  "focus:ring-2 focus:ring-purple-500 focus:border-transparent";

const labelClass =
  "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

const Banner = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: ADD BANNER ================= */}
        <div className={cardClass}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-t-xl font-semibold -m-8 mb-6">
            Add Banner
          </div>

          <div className="space-y-6">
            {/* Banner Title */}
            <div>
              <label className={labelClass}>Banner Title *</label>
              <input
                type="text"
                placeholder="enter banner title"
                className={inputClass}
                required
              />
            </div>

            {/* Banner Sub Title */}
            <div>
              <label className={labelClass}>Banner Sub Title</label>
              <input
                type="text"
                placeholder="enter banner sub title"
                className={inputClass}
              />
            </div>

            {/* Order No */}
            <div>
              <label className={labelClass}>Order No *</label>
              <input
                type="number"
                placeholder="enter order number"
                className={inputClass}
                required
              />
            </div>

            {/* Link */}
            <div>
              <label className={labelClass}>Link</label>
              <input
                type="url"
                placeholder="enter redirect link"
                className={inputClass}
              />
            </div>

            {/* Description */}
            <div>
              <label className={labelClass}>Description</label>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
                <div className="px-4 py-2 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20">
                  Editor Toolbar
                </div>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 bg-transparent text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="write banner description here..."
                />
              </div>
            </div>

            {/* Type */}
            <div>
              <label className={labelClass}>Type *</label>
              <select className={inputClass} required>
                <option value="banner">Banner</option>
                <option value="slider">Slider</option>
              </select>
            </div>

            {/* Image */}
            <div>
              <label className={labelClass}>Image *</label>
              <input type="file" className={inputClass} required />
            </div>

            {/* Save */}
            <div className="flex justify-end">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-700 hover:to-purple-800 transition">
                Save
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT: BANNER LIST ================= */}
        <div className={cardClass}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-t-xl font-semibold -m-8 mb-6">
            Banner List
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
                    Title
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Order
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  {
                    title:
                      "Spend less time commuting and more hours unwinding.",
                    order: 1,
                    type: "banner",
                    img: "https://picsum.photos/80/60?1",
                  },
                  {
                    title: "Multiple options.",
                    order: 2,
                    type: "banner",
                    img: "https://picsum.photos/80/60?2",
                  },
                  {
                    title: "Multiple options. Zero judgments passed.",
                    order: 3,
                    type: "banner",
                    img: "https://picsum.photos/80/60?3",
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="px-4 py-3">{index + 1}</td>

                    <td className="px-4 py-3">
                      <img
                        src={item.img}
                        alt="banner"
                        className="w-16 h-12 object-cover rounded border"
                      />
                    </td>

                    <td className="px-4 py-3 font-medium">{item.title}</td>

                    <td className="px-4 py-3">{item.order}</td>

                    <td className="px-4 py-3 capitalize">{item.type}</td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-teal-500 text-white hover:bg-teal-600 transition">
                          Edit
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium rounded-md bg-red-500 text-white hover:bg-red-600 transition">
                          Delete
                        </button>
                      </div>
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

export default Banner;
