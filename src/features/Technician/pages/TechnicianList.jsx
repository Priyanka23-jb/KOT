import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function TechnicianList() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data based on technician form fields
  const technicians = [
    {
      id: 1,
      fullName: 'Rajesh Kumar',
      mobileNumber: '+91 98765 43210',
      email: 'rajesh.kumar@example.com',
      dateOfBirth: '1990-05-15',
      gender: 'Male',
      idType: 'Aadhaar',
      idNumber: '1234 5678 9012',
      vendorName: 'ABC Manufacturing Pvt. Ltd.',
      employmentType: 'Full-time',
      technicianRole: 'Senior Technician',
      domains: ['Fire', 'CCTV'],
      totalExperience: '8',
      handsOnExperience: '6',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Mumbai', 'Pune'],
      shiftPreference: 'Day',
      emergencyAvailability: true,
      complianceScore: 85,
      status: 'Active',
      createdAt: 'Feb 3, 2024'
    },
    {
      id: 2,
      fullName: 'Priya Sharma',
      mobileNumber: '+91 87654 32109',
      email: 'priya.sharma@example.com',
      dateOfBirth: '1992-08-22',
      gender: 'Female',
      idType: 'PAN',
      idNumber: 'ABCDE1234F',
      vendorName: 'XYZ Services Limited',
      employmentType: 'Contract',
      technicianRole: 'Technician',
      domains: ['Solar'],
      totalExperience: '5',
      handsOnExperience: '4',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Delhi'],
      shiftPreference: 'Day',
      emergencyAvailability: false,
      complianceScore: 72,
      status: 'Active',
      createdAt: 'Feb 2, 2024'
    },
    {
      id: 3,
      fullName: 'Amit Patel',
      mobileNumber: '+91 76543 21098',
      email: 'amit.patel@example.com',
      dateOfBirth: '1988-11-30',
      gender: 'Male',
      idType: 'Driving License',
      idNumber: 'DL0420150001234',
      vendorName: 'Global Distributors Inc.',
      employmentType: 'On-call',
      technicianRole: 'Supervisor',
      domains: ['Fire', 'STP'],
      totalExperience: '12',
      handsOnExperience: '10',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Bengaluru', 'Chennai'],
      shiftPreference: 'Any',
      emergencyAvailability: true,
      complianceScore: 92,
      status: 'Active',
      createdAt: 'Jan 30, 2024'
    },
    {
      id: 4,
      fullName: 'Sneha Reddy',
      mobileNumber: '+91 65432 10987',
      email: 'sneha.reddy@example.com',
      dateOfBirth: '1995-03-18',
      gender: 'Female',
      idType: 'Aadhaar',
      idNumber: '9876 5432 1010',
      vendorName: 'Mega Retail Stores Pvt. Ltd.',
      employmentType: 'Full-time',
      technicianRole: 'Technician',
      domains: ['CCTV'],
      totalExperience: '4',
      handsOnExperience: '3',
      canPerformIndependently: 'No',
      safetyTraining: 'Yes',
      serviceCities: ['Hyderabad'],
      shiftPreference: 'Day',
      emergencyAvailability: false,
      complianceScore: 65,
      status: 'Pending',
      createdAt: 'Jan 28, 2024'
    },
    {
      id: 5,
      fullName: 'Vikram Singh',
      mobileNumber: '+91 54321 09876',
      email: 'vikram.singh@example.com',
      dateOfBirth: '1985-12-05',
      gender: 'Male',
      idType: 'Voter ID',
      idNumber: 'VID12345678',
      vendorName: 'Prime Wholesale Traders',
      employmentType: 'Contract',
      technicianRole: 'Senior Technician',
      domains: ['Fire', 'STP', 'CCTV'],
      totalExperience: '15',
      handsOnExperience: '12',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Ahmedabad', 'Surat'],
      shiftPreference: 'Emergency',
      emergencyAvailability: true,
      complianceScore: 95,
      status: 'Active',
      createdAt: 'Jan 27, 2024'
    },
    {
      id: 6,
      fullName: 'Anjali Mehta',
      mobileNumber: '+91 43210 98765',
      email: 'anjali.mehta@example.com',
      dateOfBirth: '1993-07-12',
      gender: 'Female',
      idType: 'Aadhaar',
      idNumber: '4567 8901 2345',
      vendorName: 'Tech Innovations Ltd.',
      employmentType: 'Full-time',
      technicianRole: 'Auditor',
      domains: ['Fire', 'Solar'],
      totalExperience: '7',
      handsOnExperience: '6',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Mumbai', 'Pune'],
      shiftPreference: 'Day',
      emergencyAvailability: true,
      complianceScore: 88,
      status: 'Active',
      createdAt: 'Jan 26, 2024'
    },
    {
      id: 7,
      fullName: 'Rohan Verma',
      mobileNumber: '+91 32109 87654',
      email: 'rohan.verma@example.com',
      dateOfBirth: '1991-09-25',
      gender: 'Male',
      idType: 'PAN',
      idNumber: 'BCDEF2345G',
      vendorName: 'Logistics Express Pvt. Ltd.',
      employmentType: 'On-call',
      technicianRole: 'Technician',
      domains: ['CCTV'],
      totalExperience: '6',
      handsOnExperience: '5',
      canPerformIndependently: 'Yes',
      safetyTraining: 'No',
      serviceCities: ['Delhi', 'Noida'],
      shiftPreference: 'Night',
      emergencyAvailability: false,
      complianceScore: 58,
      status: 'Inactive',
      createdAt: 'Jan 25, 2024'
    },
    {
      id: 8,
      fullName: 'Neha Gupta',
      mobileNumber: '+91 21098 76543',
      email: 'neha.gupta@example.com',
      dateOfBirth: '1994-02-14',
      gender: 'Female',
      idType: 'Aadhaar',
      idNumber: '6789 0123 4567',
      vendorName: 'National Distributors Corporation',
      employmentType: 'Full-time',
      technicianRole: 'Supervisor',
      domains: ['STP', 'CCTV'],
      totalExperience: '9',
      handsOnExperience: '8',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Kolkata'],
      shiftPreference: 'Day',
      emergencyAvailability: true,
      complianceScore: 82,
      status: 'Active',
      createdAt: 'Jan 24, 2024'
    },
    {
      id: 9,
      fullName: 'Suresh Nair',
      mobileNumber: '+91 10987 65432',
      email: 'suresh.nair@example.com',
      dateOfBirth: '1987-06-30',
      gender: 'Male',
      idType: 'Driving License',
      idNumber: 'DL0820100009876',
      vendorName: 'Urban Retail Chains',
      employmentType: 'Contract',
      technicianRole: 'Technician',
      domains: ['Solar'],
      totalExperience: '8',
      handsOnExperience: '7',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Bengaluru'],
      shiftPreference: 'Any',
      emergencyAvailability: true,
      complianceScore: 76,
      status: 'Pending',
      createdAt: 'Jan 23, 2024'
    },
    {
      id: 10,
      fullName: 'Meera Joshi',
      mobileNumber: '+91 09876 54321',
      email: 'meera.joshi@example.com',
      dateOfBirth: '1996-04-08',
      gender: 'Female',
      idType: 'Voter ID',
      idNumber: 'VID87654321',
      vendorName: 'Bulk Suppliers India',
      employmentType: 'Full-time',
      technicianRole: 'Senior Technician',
      domains: ['Fire'],
      totalExperience: '5',
      handsOnExperience: '4',
      canPerformIndependently: 'Yes',
      safetyTraining: 'Yes',
      serviceCities: ['Lucknow'],
      shiftPreference: 'Day',
      emergencyAvailability: false,
      complianceScore: 70,
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

  const getEmploymentTypeColor = (type) => {
    const colors = {
      'Full-time': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Contract': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      'On-call': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getRoleColor = (role) => {
    const colors = {
      'Technician': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Senior Technician': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
      'Supervisor': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Auditor': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
    };
    return colors[role] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getComplianceScoreColor = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  };

  const getComplianceStatus = (score) => {
    if (score >= 80) return 'Fully Deployable';
    if (score >= 60) return 'Restricted';
    return 'Blocked';
  };

  const getDomainBadgeColor = (domain) => {
    const colors = {
      'Fire': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'STP': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'CCTV': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Solar': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    };
    return colors[domain] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Technician List
            </h1> */}
            {/* <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and view all technician profiles in the system
            </p> */}
          </div>
          <Link
            to="/technician/create"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            Add New Technician
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
                placeholder="Search by name, mobile, email, or vendor..."
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
                  Technician Details
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Vendor & Role
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Domains
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Experience
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Service Cities
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Compliance
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Employment
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
              {technicians.slice(startIndex, endIndex).map((tech) => (
                <tr key={tech.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300 font-medium">
                    #{tech.id.toString().padStart(3, '0')}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        {tech.fullName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{tech.fullName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {tech.mobileNumber}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                          {tech.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <p className="font-medium text-xs mb-1 truncate max-w-[120px]">
                        {tech.vendorName}
                      </p>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getRoleColor(tech.technicianRole)}`}>
                        {tech.technicianRole}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex flex-wrap gap-1 max-w-[120px]">
                      {tech.domains.map((domain, index) => (
                        <span 
                          key={index} 
                          className={`px-1.5 py-0.5 rounded text-xs font-medium ${getDomainBadgeColor(domain)}`}
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{tech.totalExperience} yrs</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {tech.handsOnExperience} yrs hands-on
                      </p>
                      <p className={`text-xs mt-1 ${tech.canPerformIndependently === 'Yes' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {tech.canPerformIndependently === 'Yes' ? '✓ Independent' : 'Needs supervision'}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex flex-wrap gap-1 max-w-[120px]">
                      {tech.serviceCities.slice(0, 2).map((city, index) => (
                        <span 
                          key={index} 
                          className="px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs"
                        >
                          {city}
                        </span>
                      ))}
                      {tech.serviceCities.length > 2 && (
                        <span className="text-xs text-gray-500">+{tech.serviceCities.length - 2} more</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${tech.complianceScore >= 80 ? 'bg-green-500' : tech.complianceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${tech.complianceScore}%` }}
                          ></div>
                        </div>
                        <span className="font-medium">{tech.complianceScore}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getComplianceScoreColor(tech.complianceScore)}`}>
                        {getComplianceStatus(tech.complianceScore)}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium mb-1 inline-block ${getEmploymentTypeColor(tech.employmentType)}`}>
                        {tech.employmentType}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {tech.shiftPreference} Shift
                      </p>
                      {tech.emergencyAvailability && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          ✓ Emergency
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tech.status)}`}>
                      {tech.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {tech.createdAt}
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
                        to={`/technician/edit/${tech.id}`}
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