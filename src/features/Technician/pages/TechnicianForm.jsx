import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Phone, Mail, Calendar, Shield, Briefcase, Award, 
  AlertCircle, FileText, Upload, CheckCircle, XCircle,
  ChevronRight, Plus, Trash2, Save, ArrowLeft, Home, Check,
  Building, MapPin, Globe, CreditCard, FileCheck, Target
} from 'lucide-react';

export default function CreateTechnician() {
  const navigate = useNavigate();
  
  // Form state management
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    vendorType: '',
    vendorLegalName: '',
    tradeName: '',
    yearOfEstablishment: '',
    tradingBrandName: '',
    gstRegistered: '',
    userName: '',
    password: '',
    
    // Step 2: Compliance Details
    complianceCertificates: [],
    auditFrequency: '',
    lastAuditDate: '',
    complianceScore: '',
    
    // Step 3: Contact Information
    primaryContact: '',
    secondaryContact: '',
    email: '',
    website: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Step 4: Services Offered
    services: [],
    serviceRegions: [],
    serviceCapacity: '',
    responseTime: '',
    
    // Step 5: Technical Capability
    technicalStaff: '',
    certifications: [],
    equipmentOwned: [],
    technologyPartners: [],
    
    // Step 6: Coverage Areas
    coverageStates: [],
    coverageCities: [],
    maxDistance: '',
    travelPolicy: '',
    
    // Step 7: Banking Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    panNumber: '',
    
    // Step 8: Experience & References
    yearsExperience: '',
    majorClients: [],
    projectReferences: [],
    clientTestimonials: [],
    
    // Step 9: Documents
    registrationCertificate: null,
    gstCertificate: null,
    msmeCertificate: null,
    bankProof: null,
    insuranceDocuments: [],
    
    // Step 10: Declarations
    gstDeclaration: false,
    msmeDeclaration: false,
    qualityDeclaration: false,
    confidentialityDeclaration: false,
    
    // Step 11: Review & Submit
    termsAccepted: false,
  });

  const steps = [
    { number: 1, title: 'Basic Info', icon: User },
    { number: 2, title: 'Compliance', icon: Shield },
    { number: 3, title: 'Contact', icon: Phone },
    { number: 4, title: 'Services', icon: Briefcase },
    { number: 5, title: 'Technical', icon: Target },
    { number: 6, title: 'Coverage', icon: MapPin },
    { number: 7, title: 'Banking', icon: CreditCard },
    { number: 8, title: 'Experience', icon: Award },
    { number: 9, title: 'Documents', icon: FileText },
    { number: 10, title: 'Declarations', icon: FileCheck },
    { number: 11, title: 'Review', icon: Check },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      if (name.includes('[]')) {
        const baseName = name.replace('[]', '');
        const newArray = formData[baseName].includes(value)
          ? formData[baseName].filter(item => item !== value)
          : [...formData[baseName], value];
        setFormData({ ...formData, [baseName]: newArray });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else if (type === 'file') {
      if (files && files.length > 0) {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      if (step < 11) setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateStep = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return formData.vendorType && formData.vendorLegalName && formData.yearOfEstablishment;
      case 2:
        return formData.complianceCertificates.length > 0;
      case 3:
        return formData.primaryContact && formData.email && formData.address;
      case 4:
        return formData.services.length > 0 && formData.serviceCapacity;
      case 5:
        return formData.technicalStaff && formData.certifications.length > 0;
      case 6:
        return formData.coverageStates.length > 0;
      case 7:
        return formData.bankName && formData.accountNumber && formData.ifscCode;
      case 8:
        return formData.yearsExperience && formData.majorClients.length > 0;
      case 9:
        return formData.registrationCertificate && formData.gstCertificate && formData.bankProof;
      case 10:
        return formData.gstDeclaration && formData.qualityDeclaration && formData.confidentialityDeclaration;
      case 11:
        return formData.termsAccepted;
      default:
        return true;
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    navigate('/vendor/list');
  };

  const addItem = (field, value) => {
    if (value.trim()) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value]
      });
    }
  };

  const removeItem = (field, index) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Technician Registration
          </h2>
          <p className="text-gray-600 mt-1">
            BOOKAMC AMC & Audit Management System - Complete Vendor Onboarding
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((s, index) => (
              <React.Fragment key={s.number}>
                <button
                  onClick={() => setStep(s.number)}
                  className={`flex flex-col items-center ${step === s.number ? 'text-purple-600' : step > s.number ? 'text-green-600' : 'text-gray-400'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step === s.number ? 'bg-purple-100 border-2 border-purple-600' :
                    step > s.number ? 'bg-green-100 border-2 border-green-600' :
                    'bg-gray-100 border-2 border-gray-300'
                  }`}>
                    {step > s.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <s.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xs font-medium">{s.title}</span>
                </button>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-200 mx-2">
                    <div 
                      className={`h-full ${step > s.number ? 'bg-purple-600' : 'bg-gray-200'}`}
                      style={{ width: step > s.number ? '100%' : '0%' }}
                    ></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Step Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Step {step}: {steps[step - 1]?.title}
                </h3>
              </div>
              <div className="text-sm text-gray-500">
                {step} of {steps.length}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vendor Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="vendorType"
                    value={formData.vendorType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Vendor Type</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="service-provider">Service Provider</option>
                    <option value="distributor">Distributor</option>
                    <option value="integrator">System Integrator</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vendor Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="vendorLegalName"
                      value={formData.vendorLegalName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="As per registration certificate"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trade Name (if different)
                    </label>
                    <input
                      type="text"
                      name="tradeName"
                      value={formData.tradeName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Trade name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Establishment <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="yearOfEstablishment"
                      value={formData.yearOfEstablishment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="YYYY"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trading/Brand name
                    </label>
                    <input
                      type="text"
                      name="tradingBrandName"
                      value={formData.tradingBrandName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Brand name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GST Registered
                    </label>
                    <select
                      name="gstRegistered"
                      value={formData.gstRegistered}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Login Credentials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        User Name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="enter user name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="enter password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Compliance */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Compliance Certificates <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'Fire Safety License', 'Pollution Control', 'MSME'].map((cert) => (
                      <label key={cert} className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="complianceCertificates[]"
                          value={cert}
                          checked={formData.complianceCertificates.includes(cert)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-gray-800">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Audit Frequency
                    </label>
                    <select
                      name="auditFrequency"
                      value={formData.auditFrequency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Frequency</option>
                      <option value="annual">Annual</option>
                      <option value="bi-annual">Bi-Annual</option>
                      <option value="quarterly">Quarterly</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Audit Date
                    </label>
                    <input
                      type="date"
                      name="lastAuditDate"
                      value={formData.lastAuditDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Compliance Score
                  </label>
                  <input
                    type="text"
                    name="complianceScore"
                    value={formData.complianceScore}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 85%"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="primaryContact"
                      value={formData.primaryContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Primary contact number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Contact
                    </label>
                    <input
                      type="tel"
                      name="secondaryContact"
                      value={formData.secondaryContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Secondary contact number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Official email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Company website"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Complete postal address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Services */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services Offered <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['AMC Services', 'Installation', 'Maintenance', 'Repair', 'Audit', 'Consulting', 'Training', 'Spare Parts'].map((service) => (
                      <label key={service} className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services[]"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-gray-800">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Service Regions
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.serviceRegions.map((region, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {region}
                        <button
                          type="button"
                          onClick={() => removeItem('serviceRegions', index)}
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add service region"
                      className="flex-1 px-4 py-2 rounded border border-gray-300"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem('serviceRegions', e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        const input = e.target.previousSibling;
                        addItem('serviceRegions', input.value);
                        input.value = '';
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Capacity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="serviceCapacity"
                      value={formData.serviceCapacity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., 100 sites/month"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Response Time
                    </label>
                    <input
                      type="text"
                      name="responseTime"
                      value={formData.responseTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., 4 hours"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Technical */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technical Staff Count <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="technicalStaff"
                    value={formData.technicalStaff}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Number of technical staff"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Technical Certifications <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Fire Safety', 'Electrical', 'HVAC', 'Plumbing', 'CCTV', 'Access Control', 'BMS', 'Solar'].map((cert) => (
                      <label key={cert} className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="certifications[]"
                          value={cert}
                          checked={formData.certifications.includes(cert)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-gray-800">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Owned
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.equipmentOwned.map((equipment, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {equipment}
                        <button
                          type="button"
                          onClick={() => removeItem('equipmentOwned', index)}
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add equipment"
                      className="flex-1 px-4 py-2 rounded border border-gray-300"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem('equipmentOwned', e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        const input = e.target.previousSibling;
                        addItem('equipmentOwned', input.value);
                        input.value = '';
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Coverage */}
            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Coverage States <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Uttar Pradesh', 'West Bengal', 'Telangana'].map((state) => (
                      <label key={state} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="coverageStates[]"
                          value={state}
                          checked={formData.coverageStates.includes(state)}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-gray-700 text-sm">{state}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Service Distance
                    </label>
                    <input
                      type="text"
                      name="maxDistance"
                      value={formData.maxDistance}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., 100 km"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Policy
                    </label>
                    <select
                      name="travelPolicy"
                      value={formData.travelPolicy}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Policy</option>
                      <option value="local">Local Only</option>
                      <option value="regional">Regional</option>
                      <option value="national">National</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Banking */}
            {step === 7 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Bank name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Account number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      IFSC Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="IFSC code"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="As per bank records"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="PAN card number"
                  />
                </div>
              </div>
            )}

            {/* Step 8: Experience */}
            {step === 8 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="yearsExperience"
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Years in business"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Major Clients <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.majorClients.map((client, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {client}
                        <button
                          type="button"
                          onClick={() => removeItem('majorClients', index)}
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add client name"
                      className="flex-1 px-4 py-2 rounded border border-gray-300"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addItem('majorClients', e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        const input = e.target.previousSibling;
                        addItem('majorClients', input.value);
                        input.value = '';
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 9: Documents */}
            {step === 9 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Certificate <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded p-4 hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        name="registrationCertificate"
                        onChange={handleInputChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        id="reg-cert-upload"
                      />
                      <label htmlFor="reg-cert-upload" className="cursor-pointer flex items-center gap-3">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <div>
                          <p className="text-gray-600">Click to upload registration certificate</p>
                          <p className="text-xs text-gray-500">PDF, PNG, JPG up to 5MB</p>
                        </div>
                      </label>
                      {formData.registrationCertificate && (
                        <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>{formData.registrationCertificate.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GST Certificate <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded p-4 hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        name="gstCertificate"
                        onChange={handleInputChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        id="gst-cert-upload"
                      />
                      <label htmlFor="gst-cert-upload" className="cursor-pointer flex items-center gap-3">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <div>
                          <p className="text-gray-600">Click to upload GST certificate</p>
                          <p className="text-xs text-gray-500">PDF, PNG, JPG up to 5MB</p>
                        </div>
                      </label>
                      {formData.gstCertificate && (
                        <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>{formData.gstCertificate.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Proof (Cancelled Cheque/Passbook) <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded p-4 hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        name="bankProof"
                        onChange={handleInputChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        id="bank-proof-upload"
                      />
                      <label htmlFor="bank-proof-upload" className="cursor-pointer flex items-center gap-3">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <div>
                          <p className="text-gray-600">Click to upload bank proof</p>
                          <p className="text-xs text-gray-500">PDF, PNG, JPG up to 5MB</p>
                        </div>
                      </label>
                      {formData.bankProof && (
                        <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>{formData.bankProof.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 10: Declarations */}
            {step === 10 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="gstDeclaration"
                      checked={formData.gstDeclaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 rounded mt-0.5"
                    />
                    <div>
                      <span className="font-medium text-gray-800">GST Declaration</span>
                      <p className="text-sm text-gray-600 mt-1">
                        I declare that all GST information provided is accurate and up-to-date
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="qualityDeclaration"
                      checked={formData.qualityDeclaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 rounded mt-0.5"
                    />
                    <div>
                      <span className="font-medium text-gray-800">Quality Assurance Declaration</span>
                      <p className="text-sm text-gray-600 mt-1">
                        I confirm that our services meet all quality standards and specifications
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="confidentialityDeclaration"
                      checked={formData.confidentialityDeclaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 rounded mt-0.5"
                    />
                    <div>
                      <span className="font-medium text-gray-800">Confidentiality Declaration</span>
                      <p className="text-sm text-gray-600 mt-1">
                        I agree to maintain confidentiality of all client information and data
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-1">Legal Notice</h4>
                      <p className="text-sm text-purple-700">
                        False declarations may result in suspension, termination of contract, and legal action.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 11: Review */}
            {step === 11 && (
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Review Your Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Basic Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-600">Vendor Type:</span> {formData.vendorType}</div>
                        <div><span className="text-gray-600">Legal Name:</span> {formData.vendorLegalName}</div>
                        <div><span className="text-gray-600">Year Established:</span> {formData.yearOfEstablishment}</div>
                        <div><span className="text-gray-600">GST Registered:</span> {formData.gstRegistered}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-600">Primary Contact:</span> {formData.primaryContact}</div>
                        <div><span className="text-gray-600">Email:</span> {formData.email}</div>
                        <div><span className="text-gray-600">Address:</span> {formData.address}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Services Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.services.map((service, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Banking Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><span className="text-gray-600">Bank:</span> {formData.bankName}</div>
                        <div><span className="text-gray-600">Account Number:</span> {formData.accountNumber}</div>
                        <div><span className="text-gray-600">IFSC Code:</span> {formData.ifscCode}</div>
                        <div><span className="text-gray-600">PAN:</span> {formData.panNumber}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Documents Uploaded</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          {formData.registrationCertificate && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                          <span className="text-gray-600">Registration Certificate: {formData.registrationCertificate ? 'Uploaded' : 'Missing'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {formData.gstCertificate && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                          <span className="text-gray-600">GST Certificate: {formData.gstCertificate ? 'Uploaded' : 'Missing'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {formData.bankProof && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                          <span className="text-gray-600">Bank Proof: {formData.bankProof ? 'Uploaded' : 'Missing'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Final Review</h4>
                      <p className="text-sm text-yellow-700">
                        Please review all information before submission. Once submitted, you'll need to contact support for any changes.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 rounded mt-0.5"
                    />
                    <div>
                      <span className="font-medium text-gray-800">I confirm that all information provided is accurate and complete</span>
                      <p className="text-sm text-gray-600 mt-1">
                        By submitting, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePreviousStep}
                disabled={step === 1}
                className="px-6 py-2.5 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>
              
              {step < 11 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!validateStep(step)}
                  className="px-6 py-2.5 rounded bg-purple-600 text-white hover:bg-purple-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!validateStep(step)}
                  className="px-6 py-2.5 rounded bg-green-600 text-white hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}