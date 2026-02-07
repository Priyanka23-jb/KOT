import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Download, Eye, Edit, Trash2, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function AuditorList() {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for auditors
  const auditors = [
    {
      id: 1,
      fullName: 'Dr. Arvind Sharma',
      mobileNumber: '+91 98765 43210',
      email: 'arvind.sharma@example.com',
      panNumber: 'ABCDE1234F',
      governmentIdType: 'Aadhaar',
      governmentIdNumber: '1234 5678 9012',
      dateOfBirth: '1980-05-15',
      gender: 'Male',
      vendorName: 'National Certification Bureau',
      employmentType: 'Full-time',
      auditorRole: 'Lead Auditor',
      domains: ['Fire Safety', 'Building Compliance', 'Electrical Safety'],
      totalExperience: '15',
      specializedExperience: '12',
      certifications: ['NABCB Certified', 'ISO 9001 Lead Auditor'],
      licenseNumber: 'AUD/2023/001',
      licenseExpiry: '2026-12-31',
      serviceCities: ['Mumbai', 'Delhi', 'Bangalore'],
      languages: ['English', 'Hindi', 'Marathi'],
      complianceScore: 95,
      status: 'Active',
      createdAt: 'Feb 3, 2024'
    },
    {
      id: 2,
      fullName: 'Ms. Priyanka Reddy',
      mobileNumber: '+91 87654 32109',
      email: 'priyanka.reddy@example.com',
      panNumber: 'BCDEF2345G',
      governmentIdType: 'PAN',
      governmentIdNumber: 'BCDEF2345G',
      dateOfBirth: '1985-08-22',
      gender: 'Female',
      vendorName: 'Global Compliance Solutions',
      employmentType: 'Contract',
      auditorRole: 'Senior Auditor',
      domains: ['Environmental Compliance', 'STP/WTP'],
      totalExperience: '10',
      specializedExperience: '8',
      certifications: ['ISO 14001', 'EMAS Lead Auditor'],
      licenseNumber: 'AUD/2023/002',
      licenseExpiry: '2025-06-30',
      serviceCities: ['Chennai', 'Hyderabad'],
      languages: ['English', 'Hindi', 'Tamil', 'Telugu'],
      complianceScore: 88,
      status: 'Active',
      createdAt: 'Feb 2, 2024'
    },
    {
      id: 3,
      fullName: 'Mr. Rajesh Patel',
      mobileNumber: '+91 76543 21098',
      email: 'rajesh.patel@example.com',
      panNumber: 'CDEFG3456H',
      governmentIdType: 'Driving License',
      governmentIdNumber: 'DL0520100001234',
      dateOfBirth: '1978-11-30',
      gender: 'Male',
      vendorName: 'Safety First Auditors Pvt. Ltd.',
      employmentType: 'Consultant',
      auditorRole: 'Fire Safety Auditor',
      domains: ['Fire Safety Systems', 'Emergency Response'],
      totalExperience: '18',
      specializedExperience: '15',
      certifications: ['NFPA Certified', 'Fire Safety Professional'],
      licenseNumber: 'AUD/2023/003',
      licenseExpiry: '2024-12-31',
      serviceCities: ['Ahmedabad', 'Surat', 'Vadodara'],
      languages: ['English', 'Hindi', 'Gujarati'],
      complianceScore: 92,
      status: 'Active',
      createdAt: 'Jan 30, 2024'
    },
    {
      id: 4,
      fullName: 'Dr. Meera Krishnan',
      mobileNumber: '+91 65432 10987',
      email: 'meera.krishnan@example.com',
      panNumber: 'DEFGH4567I',
      governmentIdType: 'Aadhaar',
      governmentIdNumber: '9876 5432 1010',
      dateOfBirth: '1982-03-18',
      gender: 'Female',
      vendorName: 'Environmental Audit Services',
      employmentType: 'Full-time',
      auditorRole: 'Environmental Auditor',
      domains: ['STP/WTP', 'Hazardous Waste', 'Pollution Control'],
      totalExperience: '12',
      specializedExperience: '10',
      certifications: ['MoEF&CC Approved', 'ISO 45001'],
      licenseNumber: 'AUD/2023/004',
      licenseExpiry: '2025-09-30',
      serviceCities: ['Kolkata', 'Bhubaneswar'],
      languages: ['English', 'Hindi', 'Bengali'],
      complianceScore: 90,
      status: 'Pending',
      createdAt: 'Jan 28, 2024'
    },
    {
      id: 5,
      fullName: 'Mr. Sanjay Verma',
      mobileNumber: '+91 54321 09876',
      email: 'sanjay.verma@example.com',
      panNumber: 'EFGHI5678J',
      governmentIdType: 'Voter ID',
      governmentIdNumber: 'VID12345678',
      dateOfBirth: '1975-12-05',
      gender: 'Male',
      vendorName: 'Electrical Safety Bureau',
      employmentType: 'Contract',
      auditorRole: 'Electrical Safety Auditor',
      domains: ['Electrical Safety', 'Power Systems', 'Renewable Energy'],
      totalExperience: '20',
      specializedExperience: '18',
      certifications: ['IEI Certified', 'Electrical Safety Expert'],
      licenseNumber: 'AUD/2023/005',
      licenseExpiry: '2026-03-31',
      serviceCities: ['Pune', 'Nagpur', 'Nashik'],
      languages: ['English', 'Hindi', 'Marathi'],
      complianceScore: 96,
      status: 'Active',
      createdAt: 'Jan 27, 2024'
    },
    {
      id: 6,
      fullName: 'Ms. Anjali Deshpande',
      mobileNumber: '+91 43210 98765',
      email: 'anjali.deshpande@example.com',
      panNumber: 'FGHIJ6789K',
      governmentIdType: 'Aadhaar',
      governmentIdNumber: '4567 8901 2345',
      dateOfBirth: '1988-07-12',
      gender: 'Female',
      vendorName: 'Quality Assurance Partners',
      employmentType: 'Full-time',
      auditorRole: 'Quality Auditor',
      domains: ['ISO Standards', 'Process Compliance', 'Documentation'],
      totalExperience: '9',
      specializedExperience: '7',
      certifications: ['ISO 9001 Lead Auditor', 'Six Sigma Black Belt'],
      licenseNumber: 'AUD/2023/006',
      licenseExpiry: '2024-11-30',
      serviceCities: ['Bangalore', 'Mysore'],
      languages: ['English', 'Hindi', 'Kannada'],
      complianceScore: 85,
      status: 'Active',
      createdAt: 'Jan 26, 2024'
    },
    {
      id: 7,
      fullName: 'Mr. Vikram Singh',
      mobileNumber: '+91 32109 87654',
      email: 'vikram.singh@example.com',
      panNumber: 'GHIJK7890L',
      governmentIdType: 'PAN',
      governmentIdNumber: 'GHIJK7890L',
      dateOfBirth: '1983-09-25',
      gender: 'Male',
      vendorName: 'Industrial Safety Consultants',
      employmentType: 'On-call',
      auditorRole: 'Industrial Safety Auditor',
      domains: ['Factory Safety', 'Machinery Safety', 'Occupational Health'],
      totalExperience: '14',
      specializedExperience: '11',
      certifications: ['OSHA Certified', 'Industrial Safety Professional'],
      licenseNumber: 'AUD/2023/007',
      licenseExpiry: '2025-08-31',
      serviceCities: ['Delhi NCR', 'Chandigarh'],
      languages: ['English', 'Hindi', 'Punjabi'],
      complianceScore: 82,
      status: 'Inactive',
      createdAt: 'Jan 25, 2024'
    },
    {
      id: 8,
      fullName: 'Dr. Neha Gupta',
      mobileNumber: '+91 21098 76543',
      email: 'neha.gupta@example.com',
      panNumber: 'HIJKL8901M',
      governmentIdType: 'Aadhaar',
      governmentIdNumber: '6789 0123 4567',
      dateOfBirth: '1979-02-14',
      gender: 'Female',
      vendorName: 'Healthcare Compliance Specialists',
      employmentType: 'Full-time',
      auditorRole: 'Healthcare Auditor',
      domains: ['Hospital Safety', 'Medical Waste', 'Bio-safety'],
      totalExperience: '16',
      specializedExperience: '13',
      certifications: ['NABH Assessor', 'Hospital Safety Expert'],
      licenseNumber: 'AUD/2023/008',
      licenseExpiry: '2026-05-31',
      serviceCities: ['Lucknow', 'Kanpur'],
      languages: ['English', 'Hindi', 'Urdu'],
      complianceScore: 91,
      status: 'Active',
      createdAt: 'Jan 24, 2024'
    },
    {
      id: 9,
      fullName: 'Mr. Suresh Nair',
      mobileNumber: '+91 10987 65432',
      email: 'suresh.nair@example.com',
      panNumber: 'IJKLM9012N',
      governmentIdType: 'Driving License',
      governmentIdNumber: 'DL0820100009876',
      dateOfBirth: '1981-06-30',
      gender: 'Male',
      vendorName: 'Construction Safety Auditors',
      employmentType: 'Contract',
      auditorRole: 'Construction Safety Auditor',
      domains: ['Building Safety', 'Structural Safety', 'Site Safety'],
      totalExperience: '13',
      specializedExperience: '10',
      certifications: ['CIDC Certified', 'Construction Safety Professional'],
      licenseNumber: 'AUD/2023/009',
      licenseExpiry: '2024-10-31',
      serviceCities: ['Kochi', 'Trivandrum'],
      languages: ['English', 'Hindi', 'Malayalam'],
      complianceScore: 84,
      status: 'Pending',
      createdAt: 'Jan 23, 2024'
    },
    {
      id: 10,
      fullName: 'Ms. Radhika Iyer',
      mobileNumber: '+91 09876 54321',
      email: 'radhika.iyer@example.com',
      panNumber: 'JKLMN0123O',
      governmentIdType: 'Voter ID',
      governmentIdNumber: 'VID87654321',
      dateOfBirth: '1987-04-08',
      gender: 'Female',
      vendorName: 'Food Safety Compliance Bureau',
      employmentType: 'Full-time',
      auditorRole: 'Food Safety Auditor',
      domains: ['FSSAI Compliance', 'Food Processing', 'Hygiene Standards'],
      totalExperience: '8',
      specializedExperience: '6',
      certifications: ['FSSAI Approved', 'HACCP Lead Auditor'],
      licenseNumber: 'AUD/2023/010',
      licenseExpiry: '2025-12-31',
      serviceCities: ['Coimbatore', 'Madurai'],
      languages: ['English', 'Hindi', 'Tamil'],
      complianceScore: 87,
      status: 'Active',
      createdAt: 'Jan 22, 2024'
    },
  ];

  const totalItems = 24; // Total records
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
      'Full-time': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Contract': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      'Consultant': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'On-call': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getAuditorRoleColor = (role) => {
    const colors = {
      'Lead Auditor': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Senior Auditor': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
      'Fire Safety Auditor': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Environmental Auditor': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Electrical Safety Auditor': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Quality Auditor': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Industrial Safety Auditor': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Healthcare Auditor': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Construction Safety Auditor': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      'Food Safety Auditor': 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
    };
    return colors[role] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getComplianceScoreColor = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (score >= 80) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  };

  const getComplianceStatus = (score) => {
    if (score >= 90) return 'Fully Certified';
    if (score >= 80) return 'Conditionally Certified';
    return 'Certification Pending';
  };

  const getDomainBadgeColor = (domain) => {
    const colors = {
      'Fire Safety': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      'Building Compliance': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Electrical Safety': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Environmental Compliance': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'STP/WTP': 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      'ISO Standards': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Factory Safety': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      'Hospital Safety': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Construction Safety': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      'FSSAI Compliance': 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
    };
    return colors[domain] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  const getLicenseStatus = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const monthsUntilExpiry = (expiry - today) / (1000 * 60 * 60 * 24 * 30);
    
    if (monthsUntilExpiry < 0) return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    if (monthsUntilExpiry < 3) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Auditor List
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and view all certified auditors in the system
            </p>
          </div>
          <Link
            to="/auditor/create"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            Add New Auditor
          </Link>
        </div>
      </div>

      {/* Toolbar */}
      

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
                  Auditor Details
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  License Information
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Domains & Specializations
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Experience
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Service Cities
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Compliance Score
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
              {auditors.slice(startIndex, endIndex).map((auditor) => (
                <tr key={auditor.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300 font-medium">
                    #{auditor.id.toString().padStart(3, '0')}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                        {auditor.fullName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{auditor.fullName}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PAN: {auditor.panNumber}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {auditor.mobileNumber}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                          {auditor.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <p className="font-medium text-xs mb-1">
                        License: {auditor.licenseNumber}
                      </p>
                      <div className={`px-2 py-1 rounded-md text-xs font-medium ${getLicenseStatus(auditor.licenseExpiry)}`}>
                        Expires: {new Date(auditor.licenseExpiry).toLocaleDateString('en-IN')}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {auditor.governmentIdType}: {auditor.governmentIdNumber}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium mb-2 inline-block ${getAuditorRoleColor(auditor.auditorRole)}`}>
                        {auditor.auditorRole}
                      </span>
                      <div className="flex flex-wrap gap-1 max-w-[150px]">
                        {auditor.domains.map((domain, index) => (
                          <span 
                            key={index} 
                            className={`px-1.5 py-0.5 rounded text-xs font-medium ${getDomainBadgeColor(domain)}`}
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{auditor.totalExperience} yrs total</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {auditor.specializedExperience} yrs specialized
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {auditor.certifications.slice(0, 2).map((cert, index) => (
                          <span 
                            key={index} 
                            className="px-1.5 py-0.5 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded text-xs"
                          >
                            {cert}
                          </span>
                        ))}
                        {auditor.certifications.length > 2 && (
                          <span className="text-xs text-gray-500">+{auditor.certifications.length - 2} more</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex flex-wrap gap-1 max-w-[120px]">
                      {auditor.serviceCities.slice(0, 2).map((city, index) => (
                        <span 
                          key={index} 
                          className="px-1.5 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs"
                        >
                          {city}
                        </span>
                      ))}
                      {auditor.serviceCities.length > 2 && (
                        <span className="text-xs text-gray-500">+{auditor.serviceCities.length - 2} more</span>
                      )}
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Languages: {auditor.languages.slice(0, 2).join(', ')}
                        {auditor.languages.length > 2 && '...'}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${auditor.complianceScore >= 90 ? 'bg-green-500' : auditor.complianceScore >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${auditor.complianceScore}%` }}
                          ></div>
                        </div>
                        <span className="font-medium">{auditor.complianceScore}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getComplianceScoreColor(auditor.complianceScore)}`}>
                        {getComplianceStatus(auditor.complianceScore)}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    <div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium mb-1 inline-block ${getEmploymentTypeColor(auditor.employmentType)}`}>
                        {auditor.employmentType}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[100px]">
                        {auditor.vendorName}
                      </p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(auditor.status)}`}>
                      {auditor.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-300">
                    {auditor.createdAt}
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center gap-1">
                      
                      <Link
                        to={`/auditor/edit/${auditor.id}`}
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