
import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const STATES = [
  "Odisha",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Delhi",
  "Telangana",
  "West Bengal",
];

export default function LocationManagement() {
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [locations, setLocations] = useState([
    { id: 1, city: "Bhubaneswar", state: "Odisha", status: "Active" },
    { id: 2, city: "Mumbai", state: "Maharashtra", status: "Active" },
    { id: 3, city: "Chennai", state: "Tamil Nadu", status: "Inactive" },
    { id: 4, city: "Delhi", state: "Delhi", status: "Pending" },
  ]);

  /* ---------------- Helpers ---------------- */

  const filteredData = locations.filter(
    (item) =>
      item.city.toLowerCase().includes(search.toLowerCase()) ||
      item.state.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityName || !stateName) return;

    setLocations([
      ...locations,
      {
        id: locations.length + 1,
        city: cityName,
        state: stateName,
        status: "Active",
      },
    ]);

    setCityName("");
    setStateName("");
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* ADD LOCATION */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Add Location
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                City Name
              </label>
              <input
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                State Name
              </label>
              <select
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                <option value="">Select State</option>
                {STATES.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="pt-3 text-right">
              <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm hover:from-purple-700 hover:to-purple-800 shadow">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* LOCATION LIST */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-col lg:flex-row justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search city or state..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Filter size={16} />
                Filter
              </button>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1} to {endIndex} of {totalItems} results
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-purple-50 dark:bg-purple-900/20">
                <tr>
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">City</th>
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {paginatedData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="p-3">
                      {startIndex + index + 1}
                    </td>
                    <td className="p-3 font-medium">
                      {item.city}
                    </td>
                    <td className="p-3">{item.state}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="p-1.5 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                          <Edit size={14} />
                        </button>
                        <button className="p-1.5 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {paginatedData.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      className="p-6 text-center text-gray-500 dark:text-gray-400"
                    >
                      No locations found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              Rows per page:
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 disabled:opacity-50"
              >
                <ChevronLeft size={16} />
              </button>

              <span className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 disabled:opacity-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
