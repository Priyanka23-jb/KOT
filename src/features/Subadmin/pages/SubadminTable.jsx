import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function SubadminList() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data based on your form fields
  const subadmins = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      contactNo: '+1 234-567-8900',
      username: 'johndoe',
      country: 'USA',
      state: 'California',
      city: 'Los Angeles',
      department: 'IT Department',
      designation: 'Manager',
      assignedWorkfield: 'System Administration',
      status: 'Active',
      createdAt: 'Feb 3, 2024'
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      contactNo: '+1 987-654-3210',
      username: 'janesmith',
      country: 'UK',
      state: 'England',
      city: 'London',
      department: 'Human Resources',
      designation: 'Supervisor',
      assignedWorkfield: 'Recruitment',
      status: 'Active',
      createdAt: 'Feb 2, 2024'
    },
    {
      id: 3,
      fullName: 'Robert Johnson',
      email: 'robert.j@example.com',
      contactNo: '+1 555-123-4567',
      username: 'robertj',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      department: 'Finance',
      designation: 'Team Lead',
      assignedWorkfield: 'Accounts Management',
      status: 'Inactive',
      createdAt: 'Jan 30, 2024'
    },
    {
      id: 4,
      fullName: 'Sarah Williams',
      email: 'sarah.w@example.com',
      contactNo: '+1 444-555-6666',
      username: 'sarahw',
      country: 'Australia',
      state: 'New South Wales',
      city: 'Sydney',
      department: 'Operations',
      designation: 'Executive',
      assignedWorkfield: 'Process Management',
      status: 'Active',
      createdAt: 'Jan 28, 2024'
    },
    {
      id: 5,
      fullName: 'Michael Brown',
      email: 'michael.b@example.com',
      contactNo: '+1 777-888-9999',
      username: 'michaelb',
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai',
      department: 'Sales',
      designation: 'Assistant Manager',
      assignedWorkfield: 'Sales Operations',
      status: 'Pending',
      createdAt: 'Jan 27, 2024'
    },
    {
      id: 6,
      fullName: 'Emily Davis',
      email: 'emily.d@example.com',
      contactNo: '+1 333-222-1111',
      username: 'emilyd',
      country: 'USA',
      state: 'New York',
      city: 'New York',
      department: 'Marketing',
      designation: 'Senior Executive',
      assignedWorkfield: 'Digital Marketing',
      status: 'Active',
      createdAt: 'Jan 26, 2024'
    },
    {
      id: 7,
      fullName: 'David Wilson',
      email: 'david.w@example.com',
      contactNo: '+1 666-777-8888',
      username: 'davidw',
      country: 'UK',
      state: 'Scotland',
      city: 'Edinburgh',
      department: 'Customer Support',
      designation: 'Team Lead',
      assignedWorkfield: 'Customer Service',
      status: 'Active',
      createdAt: 'Jan 25, 2024'
    },
    {
      id: 8,
      fullName: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      contactNo: '+1 999-888-7777',
      username: 'lisaa',
      country: 'Canada',
      state: 'Quebec',
      city: 'Montreal',
      department: 'Administration',
      designation: 'Manager',
      assignedWorkfield: 'Office Administration',
      status: 'Inactive',
      createdAt: 'Jan 24, 2024'
    },
    {
      id: 9,
      fullName: 'Thomas Miller',
      email: 'thomas.m@example.com',
      contactNo: '+1 222-333-4444',
      username: 'thomasm',
      country: 'Australia',
      state: 'Victoria',
      city: 'Melbourne',
      department: 'IT Department',
      designation: 'Supervisor',
      assignedWorkfield: 'Network Administration',
      status: 'Active',
      createdAt: 'Jan 23, 2024'
    },
    {
      id: 10,
      fullName: 'Jessica Taylor',
      email: 'jessica.t@example.com',
      contactNo: '+1 111-222-3333',
      username: 'jessicat',
      country: 'India',
      state: 'Delhi',
      city: 'New Delhi',
      department: 'Finance',
      designation: 'Executive',
      assignedWorkfield: 'Financial Analysis',
      status: 'Active',
      createdAt: 'Jan 22, 2024'
    },
  ];

  const totalItems = 21; // Total records
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, totalItems);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Subadmin List
            </h1> */}
            {/* <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and view all subadmin accounts in the system
            </p> */}
          </div>
          <Link
            to="/subadmin/create"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            Add New Subadmin
          </Link>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow p-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or username..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter
            </button>
            <button className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1} to {endIndex} of {totalItems} results
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Contact
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Location
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Department
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Designation
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Workfield
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Created
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {subadmins.slice(startIndex, endIndex).map((subadmin) => (
                <tr key={subadmin.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300 font-medium">
                    #{subadmin.id.toString().padStart(3, '0')}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        {subadmin.fullName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{subadmin.fullName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">@{subadmin.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="max-w-[200px] truncate" title={subadmin.email}>
                      {subadmin.email}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {subadmin.contactNo}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{subadmin.city}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{subadmin.state}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {subadmin.department}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {subadmin.designation}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="max-w-[150px] truncate" title={subadmin.assignedWorkfield}>
                      {subadmin.assignedWorkfield}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subadmin.status)}`}>
                      {subadmin.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {subadmin.createdAt}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center gap-1">

                      <Link
                        to={`/subadmin/edit/${subadmin.id}`}
                        className="p-1.5 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button 
                        className="p-1.5 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Rows per page:</span>
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white text-sm"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-1">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                          currentPage === pageNum
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  {totalPages > 5 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}