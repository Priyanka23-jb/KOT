import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Plus, Building, Calendar, User, Hash } from 'lucide-react';

export default function CustomerList() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data based on customer form fields
  const customers = [
    {
      id: 1,
      organizationName: 'Tech Solutions Pvt. Ltd.',
      tradeName: 'Tech Solutions',
      yearOfEstablishment: '2010',
      gstRegistered: true,
      userName: 'john.doe',
      gstNumber: '27ABCDE1234F1Z5',
      contactPerson: 'John Doe',
      email: 'john.doe@techsolutions.com',
      phone: '+91 98765 43210',
      industry: 'IT Services',
      customerType: 'Corporate',
      address: 'Mumbai, Maharashtra',
      totalProjects: 15,
      activeProjects: 8,
      customerSince: 'Jan 15, 2018',
      status: 'Active',
      complianceScore: 92,
      priority: 'High',
      lastInteraction: 'Feb 3, 2024'
    },
    {
      id: 2,
      organizationName: 'Green Energy Innovations',
      tradeName: 'Green Energy',
      yearOfEstablishment: '2015',
      gstRegistered: true,
      userName: 'priya.sharma',
      gstNumber: '06ABCDE1234F1Z6',
      contactPerson: 'Priya Sharma',
      email: 'priya@greenenergy.com',
      phone: '+91 87654 32109',
      industry: 'Renewable Energy',
      customerType: 'Enterprise',
      address: 'Bengaluru, Karnataka',
      totalProjects: 23,
      activeProjects: 12,
      customerSince: 'Mar 22, 2019',
      status: 'Active',
      complianceScore: 88,
      priority: 'High',
      lastInteraction: 'Feb 2, 2024'
    },
    {
      id: 3,
      organizationName: 'Metro Retail Chains',
      tradeName: 'Metro Mart',
      yearOfEstablishment: '2008',
      gstRegistered: true,
      userName: 'amit.patel',
      gstNumber: '24ABCDE1234F1Z7',
      contactPerson: 'Amit Patel',
      email: 'amit@metromart.com',
      phone: '+91 76543 21098',
      industry: 'Retail',
      customerType: 'Corporate',
      address: 'Delhi, NCR',
      totalProjects: 42,
      activeProjects: 18,
      customerSince: 'Nov 10, 2017',
      status: 'Active',
      complianceScore: 95,
      priority: 'Critical',
      lastInteraction: 'Jan 30, 2024'
    },
    {
      id: 4,
      organizationName: 'Ocean View Hotels & Resorts',
      tradeName: 'Ocean View',
      yearOfEstablishment: '2012',
      gstRegistered: false,
      userName: 'sneha.reddy',
      gstNumber: 'N/A',
      contactPerson: 'Sneha Reddy',
      email: 'sneha@oceanview.com',
      phone: '+91 65432 10987',
      industry: 'Hospitality',
      customerType: 'Premium',
      address: 'Goa',
      totalProjects: 8,
      activeProjects: 3,
      customerSince: 'Aug 5, 2020',
      status: 'Active',
      complianceScore: 78,
      priority: 'Medium',
      lastInteraction: 'Jan 28, 2024'
    },
    {
      id: 5,
      organizationName: 'Precision Manufacturing Corp',
      tradeName: 'Precision Mfg',
      yearOfEstablishment: '2005',
      gstRegistered: true,
      userName: 'vikram.singh',
      gstNumber: '09ABCDE1234F1Z8',
      contactPerson: 'Vikram Singh',
      email: 'vikram@precisionmfg.com',
      phone: '+91 54321 09876',
      industry: 'Manufacturing',
      customerType: 'Corporate',
      address: 'Pune, Maharashtra',
      totalProjects: 31,
      activeProjects: 14,
      customerSince: 'Jun 18, 2016',
      status: 'Active',
      complianceScore: 90,
      priority: 'High',
      lastInteraction: 'Jan 27, 2024'
    },
    {
      id: 6,
      organizationName: 'Sunrise Pharma Ltd.',
      tradeName: 'Sunrise Pharma',
      yearOfEstablishment: '2018',
      gstRegistered: true,
      userName: 'anjali.mehta',
      gstNumber: '27ABCDE1234F1Z9',
      contactPerson: 'Anjali Mehta',
      email: 'anjali@sunrisepharma.com',
      phone: '+91 43210 98765',
      industry: 'Pharmaceutical',
      customerType: 'Enterprise',
      address: 'Hyderabad, Telangana',
      totalProjects: 12,
      activeProjects: 7,
      customerSince: 'Feb 14, 2021',
      status: 'Pending',
      complianceScore: 65,
      priority: 'Medium',
      lastInteraction: 'Jan 26, 2024'
    },
    {
      id: 7,
      organizationName: 'City Logistics Services',
      tradeName: 'City Logistics',
      yearOfEstablishment: '2013',
      gstRegistered: true,
      userName: 'rohan.verma',
      gstNumber: '07ABCDE1234F2Z1',
      contactPerson: 'Rohan Verma',
      email: 'rohan@citylogistics.com',
      phone: '+91 32109 87654',
      industry: 'Logistics',
      customerType: 'Corporate',
      address: 'Chennai, Tamil Nadu',
      totalProjects: 19,
      activeProjects: 9,
      customerSince: 'Sep 30, 2019',
      status: 'Active',
      complianceScore: 85,
      priority: 'Medium',
      lastInteraction: 'Jan 25, 2024'
    },
    {
      id: 8,
      organizationName: 'Global EduTech Solutions',
      tradeName: 'Global EduTech',
      yearOfEstablishment: '2019',
      gstRegistered: false,
      userName: 'neha.gupta',
      gstNumber: 'N/A',
      contactPerson: 'Neha Gupta',
      email: 'neha@globaledutech.com',
      phone: '+91 21098 76543',
      industry: 'Education',
      customerType: 'Startup',
      address: 'Bengaluru, Karnataka',
      totalProjects: 5,
      activeProjects: 2,
      customerSince: 'Dec 3, 2022',
      status: 'Active',
      complianceScore: 72,
      priority: 'Low',
      lastInteraction: 'Jan 24, 2024'
    },
    {
      id: 9,
      organizationName: 'Heritage Textiles India',
      tradeName: 'Heritage Textiles',
      yearOfEstablishment: '1995',
      gstRegistered: true,
      userName: 'suresh.nair',
      gstNumber: '33ABCDE1234F2Z2',
      contactPerson: 'Suresh Nair',
      email: 'suresh@heritagetextiles.com',
      phone: '+91 10987 65432',
      industry: 'Textile',
      customerType: 'Legacy',
      address: 'Coimbatore, Tamil Nadu',
      totalProjects: 56,
      activeProjects: 22,
      customerSince: 'Apr 10, 2015',
      status: 'Active',
      complianceScore: 96,
      priority: 'Critical',
      lastInteraction: 'Jan 23, 2024'
    },
    {
      id: 10,
      organizationName: 'Smart Home Automation',
      tradeName: 'Smart Home',
      yearOfEstablishment: '2020',
      gstRegistered: true,
      userName: 'meera.joshi',
      gstNumber: '27ABCDE1234F2Z3',
      contactPerson: 'Meera Joshi',
      email: 'meera@smarthome.com',
      phone: '+91 09876 54321',
      industry: 'Automation',
      customerType: 'Startup',
      address: 'Mumbai, Maharashtra',
      totalProjects: 7,
      activeProjects: 4,
      customerSince: 'Jul 19, 2023',
      status: 'Inactive',
      complianceScore: 58,
      priority: 'Low',
      lastInteraction: 'Jan 22, 2024'
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

  const getPriorityColor = (priority) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'High': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Medium': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Low': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    };
    return colors[priority] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getCustomerTypeColor = (type) => {
    const colors = {
      'Corporate': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Enterprise': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Premium': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Startup': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      'Legacy': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getIndustryColor = (industry) => {
    const colors = {
      'IT Services': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Renewable Energy': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Retail': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Hospitality': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Manufacturing': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Pharmaceutical': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Logistics': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Education': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Textile': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      'Automation': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    };
    return colors[industry] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getComplianceScoreColor = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  };

  const getGSTStatusColor = (isGSTRegistered) => {
    return isGSTRegistered 
      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getProjectsBadgeColor = (active, total) => {
    const ratio = active / total;
    if (ratio >= 0.7) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (ratio >= 0.4) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Customer List
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and view all customer organizations in the system
            </p> */}
          </div>
          {/* <Link
            to="customer/solar-registration"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            Add New Customer
          </Link> */}
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
                placeholder="Search by organization, contact person, email, or GST..."
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
                  Organization Details
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Contact Information
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Industry & Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  GST Status
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Projects
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Compliance
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Priority
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Last Interaction
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {customers.slice(startIndex, endIndex).map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300 font-medium">
                    #{customer.id.toString().padStart(3, '0')}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium">{customer.organizationName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <span className="truncate max-w-[150px]">{customer.tradeName}</span>
                          {customer.tradeName !== customer.organizationName && (
                            <span className="text-gray-400">(Trade Name)</span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Est. {customer.yearOfEstablishment}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <User className="w-3 h-3 text-gray-400" />
                        <p className="font-medium">{customer.contactPerson}</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                        {customer.email}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {customer.phone}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                        {customer.address}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex flex-col gap-1 max-w-[120px]">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getIndustryColor(customer.industry)}`}>
                        {customer.industry}
                      </span>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCustomerTypeColor(customer.customerType)}`}>
                        {customer.customerType}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium mb-1 inline-block ${getGSTStatusColor(customer.gstRegistered)}`}>
                        {customer.gstRegistered ? 'GST Registered' : 'Non-GST'}
                      </span>
                      {customer.gstRegistered && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[120px]">
                          {customer.gstNumber}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {customer.userName}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getProjectsBadgeColor(customer.activeProjects, customer.totalProjects)}`}>
                          {customer.activeProjects} Active
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          of {customer.totalProjects}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Customer since: {customer.customerSince}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${customer.complianceScore >= 80 ? 'bg-green-500' : customer.complianceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${customer.complianceScore}%` }}
                          ></div>
                        </div>
                        <span className="font-medium">{customer.complianceScore}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getComplianceScoreColor(customer.complianceScore)}`}>
                        {customer.complianceScore >= 80 ? 'Compliant' : customer.complianceScore >= 60 ? 'Partial' : 'Non-Compliant'}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getPriorityColor(customer.priority)}`}>
                      {customer.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex flex-col">
                      <span>{customer.lastInteraction}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {customer.status === 'Active' ? 'Recently Active' : 'Inactive'}
                      </span>
                    </div>
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
                        to={`/customer/edit/${customer.id}`}
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