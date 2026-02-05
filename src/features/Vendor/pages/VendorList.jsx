import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function VendorList() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data based on vendor form fields
  const vendors = [
    {
      id: 1,
      vendorType: 'Manufacturer',
      vendorLegalName: 'ABC Manufacturing Pvt. Ltd.',
      tradeName: 'ABC Products',
      yearOfEstablishment: '2010',
      gstRegistered: 'Yes',
      gstNumber: '27ABCDE1234F1Z5',
      username: 'abc_manufacturing',
      email: 'contact@abcproducts.com',
      contactPerson: 'John Doe',
      contactNo: '+91 98765 43210',
      status: 'Active',
      createdAt: 'Feb 3, 2024',
      country: 'India',
      state: 'Maharashtra',
      city: 'Mumbai'
    },
    {
      id: 2,
      vendorType: 'Service Provider',
      vendorLegalName: 'XYZ Services Limited',
      tradeName: 'XYZ Solutions',
      yearOfEstablishment: '2015',
      gstRegistered: 'Yes',
      gstNumber: '29XYZAB5678G2H9',
      username: 'xyz_services',
      email: 'info@xyzsolutions.com',
      contactPerson: 'Jane Smith',
      contactNo: '+91 87654 32109',
      status: 'Active',
      createdAt: 'Feb 2, 2024',
      country: 'India',
      state: 'Karnataka',
      city: 'Bengaluru'
    },
    {
      id: 3,
      vendorType: 'Distributor',
      vendorLegalName: 'Global Distributors Inc.',
      tradeName: 'Global Distributors',
      yearOfEstablishment: '2008',
      gstRegistered: 'No',
      gstNumber: 'N/A',
      username: 'global_dist',
      email: 'sales@globaldist.com',
      contactPerson: 'Robert Johnson',
      contactNo: '+91 76543 21098',
      status: 'Pending',
      createdAt: 'Jan 30, 2024',
      country: 'India',
      state: 'Delhi',
      city: 'New Delhi'
    },
    {
      id: 4,
      vendorType: 'Retailer',
      vendorLegalName: 'Mega Retail Stores Pvt. Ltd.',
      tradeName: 'Mega Mart',
      yearOfEstablishment: '2012',
      gstRegistered: 'Yes',
      gstNumber: '07MEGA1234R5S6T',
      username: 'megamart',
      email: 'support@megamart.com',
      contactPerson: 'Sarah Williams',
      contactNo: '+91 65432 10987',
      status: 'Active',
      createdAt: 'Jan 28, 2024',
      country: 'India',
      state: 'Tamil Nadu',
      city: 'Chennai'
    },
    {
      id: 5,
      vendorType: 'Wholesaler',
      vendorLegalName: 'Prime Wholesale Traders',
      tradeName: 'Prime Wholesale',
      yearOfEstablishment: '2018',
      gstRegistered: 'Yes',
      gstNumber: '24PRIME5678W9X0',
      username: 'prime_wholesale',
      email: 'orders@primewholesale.com',
      contactPerson: 'Michael Brown',
      contactNo: '+91 54321 09876',
      status: 'Inactive',
      createdAt: 'Jan 27, 2024',
      country: 'India',
      state: 'Gujarat',
      city: 'Ahmedabad'
    },
    {
      id: 6,
      vendorType: 'Manufacturer',
      vendorLegalName: 'Tech Innovations Ltd.',
      tradeName: 'TechPro',
      yearOfEstablishment: '2014',
      gstRegistered: 'Yes',
      gstNumber: '33TECH1234I5N6O',
      username: 'techpro',
      email: 'innovation@techpro.com',
      contactPerson: 'Emily Davis',
      contactNo: '+91 43210 98765',
      status: 'Active',
      createdAt: 'Jan 26, 2024',
      country: 'India',
      state: 'Telangana',
      city: 'Hyderabad'
    },
    {
      id: 7,
      vendorType: 'Service Provider',
      vendorLegalName: 'Logistics Express Pvt. Ltd.',
      tradeName: 'QuickLog',
      yearOfEstablishment: '2016',
      gstRegistered: 'Yes',
      gstNumber: '09QUICK5678L9G0',
      username: 'quicklog',
      email: 'shipping@quicklog.com',
      contactPerson: 'David Wilson',
      contactNo: '+91 32109 87654',
      status: 'Active',
      createdAt: 'Jan 25, 2024',
      country: 'India',
      state: 'Maharashtra',
      city: 'Pune'
    },
    {
      id: 8,
      vendorType: 'Distributor',
      vendorLegalName: 'National Distributors Corporation',
      tradeName: 'NatDist',
      yearOfEstablishment: '2005',
      gstRegistered: 'No',
      gstNumber: 'N/A',
      username: 'natdist',
      email: 'distribution@natdist.com',
      contactPerson: 'Lisa Anderson',
      contactNo: '+91 21098 76543',
      status: 'Active',
      createdAt: 'Jan 24, 2024',
      country: 'India',
      state: 'West Bengal',
      city: 'Kolkata'
    },
    {
      id: 9,
      vendorType: 'Retailer',
      vendorLegalName: 'Urban Retail Chains',
      tradeName: 'UrbanMart',
      yearOfEstablishment: '2019',
      gstRegistered: 'Yes',
      gstNumber: '19URBAN1234M5A6R',
      username: 'urbanmart',
      email: 'customers@urbanmart.com',
      contactPerson: 'Thomas Miller',
      contactNo: '+91 10987 65432',
      status: 'Pending',
      createdAt: 'Jan 23, 2024',
      country: 'India',
      state: 'Rajasthan',
      city: 'Jaipur'
    },
    {
      id: 10,
      vendorType: 'Wholesaler',
      vendorLegalName: 'Bulk Suppliers India',
      tradeName: 'BulkSupplies',
      yearOfEstablishment: '2011',
      gstRegistered: 'Yes',
      gstNumber: '08BULK5678S9P0L',
      username: 'bulksupplies',
      email: 'supply@bulksupplies.com',
      contactPerson: 'Jessica Taylor',
      contactNo: '+91 09876 54321',
      status: 'Active',
      createdAt: 'Jan 22, 2024',
      country: 'India',
      state: 'Uttar Pradesh',
      city: 'Lucknow'
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

  const getGSTBadgeColor = (gstRegistered) => {
    return gstRegistered === 'Yes' 
      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getVendorTypeColor = (type) => {
    const colors = {
      'Manufacturer': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Service Provider': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
      'Distributor': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Retailer': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
      'Wholesaler': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Vendor List
            </h1> */}
            {/* <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and view all vendor accounts in the system
            </p> */}
          </div>
          <Link
            to="/vendor/create"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            Add New Vendor
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
                placeholder="Search by vendor name, trade name, or email..."
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
                  Vendor Details
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Vendor Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  GST Details
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Contact
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Location
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Year Est.
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
              {vendors.slice(startIndex, endIndex).map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300 font-medium">
                    #{vendor.id.toString().padStart(3, '0')}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        {vendor.vendorLegalName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{vendor.vendorLegalName}</p>
                        {vendor.tradeName && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Trade: {vendor.tradeName}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          @{vendor.username}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getVendorTypeColor(vendor.vendorType)}`}>
                      {vendor.vendorType}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium mb-1 inline-block ${getGSTBadgeColor(vendor.gstRegistered)}`}>
                        GST: {vendor.gstRegistered}
                      </span>
                      {vendor.gstRegistered === 'Yes' && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {vendor.gstNumber}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="max-w-[180px]">
                      <p className="font-medium truncate">{vendor.contactPerson}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs truncate">{vendor.email}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">{vendor.contactNo}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{vendor.city}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{vendor.state}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {vendor.yearOfEstablishment}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vendor.status)}`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {vendor.createdAt}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center gap-1">
                      <button 
                        className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <Link
                        to={`/vendor/edit/${vendor.id}`}
                        className="p-1.5 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 text-purple-600 dark:text-purple-400 transition-colors"
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