import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, Phone, Mail, Shield, Briefcase, Award,
  AlertCircle, FileText, Upload, CheckCircle, XCircle,
  ChevronRight, ChevronLeft, Save, Home, Check,
  Building, MapPin, Target, Flame, Zap, Sun, Droplets,
  FileCheck, Calendar, Lock, Globe, BadgeCheck
} from 'lucide-react';

export default function CreateAuditor() {
  const navigate = useNavigate();

  // Form state management
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Auditor Type & State Selection
    auditorType: '',
    state: '',
    homeCity: '',
    multiDistrictAudits: false,

    // Step 2: Auditor Identity & Contact
    fullName: '',
    mobileNumber: '',
    email: '',
    panNumber: '',
    govtIDType: '',
    govtIDNumber: '',
    mobileVerified: false,

    // Step 3: Domain Selection
    domains: [],

    // Step 4: Domain Authorizations
    // Fire Safety
    fireLicenseNumber: '',
    fireIssuingAuthority: '',
    fireValidFrom: '',
    fireValidTo: '',
    firePastAudits: '',
    
    // Environmental
    environmentalLicenseNumber: '',
    environmentalValidFrom: '',
    environmentalValidTo: '',
    environmentalExperience: '',
    
    // Electrical/CCTV
    electricalLicenseNumber: '',
    electricalIssuingAuthority: '',
    electricalVoltageLevel: '',
    electricalValidity: '',
    
    // Solar
    solarLicenseNumber: '',
    solarExperience: '',
    solarEmpanelment: '',

    // Step 5: Qualification & Experience
    highestQualification: '',
    totalExperience: '',
    sectorExperience: [],
    isoLeadAuditor: false,
    isoCertificateNumber: '',
    psuExperience: false,
    psuDetails: '',

    // Step 6: Independence & Conflict Declarations
    noConflict: false,
    notAuditingOwn: false,
    independentJudgment: false,

    // Step 7: Document Upload
    stateLicense: null,
    panCard: null,
    govtIdProof: null,
    photograph: null,
    policeVerification: null,
    sampleReports: null,

    // Step 8: Geography & Capacity
    authorizedDistricts: [],
    maxAuditsPerMonth: '',
    auditOnSite: false,
    auditRemote: false,

    // Step 9: Review & Submit
    termsAccepted: false,
  });

  const steps = [
    { number: 1, title: 'Auditor Type', icon: User },
    { number: 2, title: 'Identity', icon: BadgeCheck },
    { number: 3, title: 'Domains', icon: Target },
    { number: 4, title: 'Authorizations', icon: Shield },
    { number: 5, title: 'Qualifications', icon: Award },
    { number: 6, title: 'Declarations', icon: FileCheck },
    { number: 7, title: 'Documents', icon: FileText },
    { number: 8, title: 'Geography', icon: MapPin },
    { number: 9, title: 'Review', icon: Check },
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

  const handleNext = () => {
    if (step < 9) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Auditor form submitted:', formData);
    // Calculate compliance score
    const complianceScore = calculateComplianceScore();
    console.log('Compliance Score:', complianceScore);
    
    // Handle form submission logic here
    navigate('/auditor/list');
  };

  const calculateComplianceScore = () => {
    let score = 0;
    // License validity check
    if (formData.fireValidTo && new Date(formData.fireValidTo) >= new Date()) score += 20;
    if (formData.environmentalValidTo && new Date(formData.environmentalValidTo) >= new Date()) score += 20;
    if (formData.electricalValidity) score += 15;
    
    // Experience points
    if (parseInt(formData.totalExperience) >= 5) score += 15;
    if (parseInt(formData.totalExperience) >= 10) score += 5;
    
    // Document completeness
    if (formData.stateLicense && formData.panCard && formData.govtIdProof) score += 20;
    
    // Declaration compliance
    if (formData.noConflict && formData.notAuditingOwn && formData.independentJudgment) score += 10;
    
    return Math.min(score, 100);
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

  const renderDomainSpecificFields = () => {
    const fields = [];
    
    if (formData.domains.includes('Fire Safety Audit')) {
      fields.push(
        <div key="fire" className="mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Fire Safety Auditor Authorization</h3>
          </div>
          
          {formData.state === 'Odisha' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  OFES Approval / Empanelment No. *
                </label>
                <input
                  type="text"
                  name="fireLicenseNumber"
                  value={formData.fireLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Enter OFES number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Fire Auditor Certificate No.
                </label>
                <input
                  type="text"
                  name="fireCertificateNumber"
                  value={formData.fireCertificateNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Certificate number"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Maharashtra Fire Prevention & Life Safety Measures Act License *
                </label>
                <input
                  type="text"
                  name="fireLicenseNumber"
                  value={formData.fireLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="License number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Third-Party Auditor License No.
                </label>
                <input
                  type="text"
                  name="fireCertificateNumber"
                  value={formData.fireCertificateNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="TPA license number"
                />
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Issuing Authority *
              </label>
              <input
                type="text"
                name="fireIssuingAuthority"
                value={formData.fireIssuingAuthority}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Name of issuing authority"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Past Fire Audits Conducted
              </label>
              <input
                type="number"
                name="firePastAudits"
                value={formData.firePastAudits}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Number of audits"
                min="0"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Valid From *
              </label>
              <input
                type="date"
                name="fireValidFrom"
                value={formData.fireValidFrom}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Valid To *
              </label>
              <input
                type="date"
                name="fireValidTo"
                value={formData.fireValidTo}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
            <p className="text-sm text-red-700 dark:text-red-400">
              <span className="font-medium">Validation:</span> Expiry date must be ≥ Today. Missing/expired license will block Fire audits.
            </p>
          </div>
        </div>
      );
    }
    
    if (formData.domains.includes('STP / Environmental Audit')) {
      fields.push(
        <div key="environmental" className="mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">STP / Environmental Auditor Authorization</h3>
          </div>
          
          {formData.state === 'Odisha' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  OSPCB Auditor Authorization No. *
                </label>
                <input
                  type="text"
                  name="environmentalLicenseNumber"
                  value={formData.environmentalLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="OSPCB authorization number"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  MPCB Auditor Registration No. *
                </label>
                <input
                  type="text"
                  name="environmentalLicenseNumber"
                  value={formData.environmentalLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="MPCB registration number"
                />
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Certificate Validity *
              </label>
              <input
                type="date"
                name="environmentalValidTo"
                value={formData.environmentalValidTo}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                STP / ETP Audit Experience (Years) *
              </label>
              <input
                type="number"
                name="environmentalExperience"
                value={formData.environmentalExperience}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Years of experience"
                min="0"
              />
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
            <p className="text-sm text-red-700 dark:text-red-400">
              <span className="font-medium">Validation:</span> Authorization mandatory for STP domain. Expired PCB license will block STP audits.
            </p>
          </div>
        </div>
      );
    }
    
    if (formData.domains.includes('Electrical / CCTV Safety Audit')) {
      fields.push(
        <div key="electrical" className="mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Electrical / CCTV Auditor Authorization</h3>
          </div>
          
          {formData.state === 'Odisha' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Electrical Supervisor / Inspector License No. *
                </label>
                <input
                  type="text"
                  name="electricalLicenseNumber"
                  value={formData.electricalLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="License number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Issued by Odisha Electrical Inspectorate
                </label>
                <input
                  type="text"
                  name="electricalIssuingAuthority"
                  value={formData.electricalIssuingAuthority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Issuing authority"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Electrical Auditor / Supervisor License No. *
                </label>
                <input
                  type="text"
                  name="electricalLicenseNumber"
                  value={formData.electricalLicenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="License number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Issued by Maharashtra Electrical Inspectorate
                </label>
                <input
                  type="text"
                  name="electricalIssuingAuthority"
                  value={formData.electricalIssuingAuthority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Issuing authority"
                />
              </div>
            </div>
          )}
          
          {formData.state === 'Odisha' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Voltage Level Authorized
              </label>
              <input
                type="text"
                name="electricalVoltageLevel"
                value={formData.electricalVoltageLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="e.g., Up to 11kV"
              />
            </div>
          )}
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Validity Period
            </label>
            <input
              type="text"
              name="electricalValidity"
              value={formData.electricalValidity}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="e.g., 5 years"
            />
          </div>
          
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
            <p className="text-sm text-red-700 dark:text-red-400">
              <span className="font-medium">Validation:</span> Without electrical license → CCTV audit disabled
            </p>
          </div>
        </div>
      );
    }
    
    if (formData.domains.includes('Solar Audit')) {
      fields.push(
        <div key="solar" className="mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Solar Auditor Authorization</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Electrical Supervisor License No. *
              </label>
              <input
                type="text"
                name="solarLicenseNumber"
                value={formData.solarLicenseNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Electrical license number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Solar PV Audit / Commissioning Experience (Years) *
              </label>
              <input
                type="number"
                name="solarExperience"
                value={formData.solarExperience}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Years of experience"
                min="0"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              DISCOM / MNRE Empanelment (Optional)
            </label>
            <input
              type="text"
              name="solarEmpanelment"
              value={formData.solarEmpanelment}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Empanelment details"
            />
          </div>
          
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
            <p className="text-sm text-red-700 dark:text-red-400">
              <span className="font-medium">Validation:</span> Electrical license mandatory for Solar audits
            </p>
          </div>
        </div>
      );
    }
    
    return fields;
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Shield className="w-7 h-7 text-purple-600" />
              BOOKAMC Auditor Registration
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Odisha & Maharashtra - Auditor Onboarding System
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((stepItem) => (
              <div key={stepItem.number} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${step >= stepItem.number ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                  {stepItem.number}
                </div>
                <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 hidden sm:block">
                  {stepItem.title}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-full bg-purple-600 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 8) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Form Content */}
        <div className="p-6">
          {/* Step 1: Auditor Type & State Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded">
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  <span className="font-medium">ENTRY GATE:</span> State selection is locked for entire onboarding
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Auditor Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {['Individual', 'Proprietorship', 'Partnership', 'LLP', 'Private Limited'].map((type) => (
                    <label key={type} className="flex items-center gap-2 p-3 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <input
                        type="radio"
                        name="auditorType"
                        value={type}
                        checked={formData.auditorType === type}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="text-gray-800 dark:text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    State of Audit Authorization <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Home City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="homeCity"
                    value={formData.homeCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter home city"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Multi‑District Audits Allowed?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="multiDistrictAudits"
                      checked={formData.multiDistrictAudits === true}
                      onChange={() => setFormData({...formData, multiDistrictAudits: true})}
                      className="h-4 w-4 text-purple-600"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="multiDistrictAudits"
                      checked={formData.multiDistrictAudits === false}
                      onChange={() => setFormData({...formData, multiDistrictAudits: false})}
                      className="h-4 w-4 text-purple-600"
                    />
                    <span className="text-gray-700 dark:text-gray-300">No</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Auditor Identity & Contact */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                  HARD GATE - Duplicate PAN will block registration
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Auditor Full Name (as per license) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    PAN Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white uppercase"
                    placeholder="ABCDE1234F"
                    maxLength="10"
                  />
                  <p className="mt-1 text-xs text-gray-500">Format: ABCDE1234F</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="10-digit mobile number"
                      maxLength="10"
                    />
                    <button
                      type="button"
                      className="px-4 py-2.5 bg-purple-600 text-white rounded hover:bg-purple-700"
                      onClick={() => {
                        if (formData.mobileNumber.length === 10) {
                          setFormData({...formData, mobileVerified: true});
                          alert('OTP sent to ' + formData.mobileNumber);
                        }
                      }}
                    >
                      {formData.mobileVerified ? 'Verified' : 'Send OTP'}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Government ID Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="govtIDType"
                    value={formData.govtIDType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="">Select ID Type</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="DL">Driving License</option>
                    <option value="Voter ID">Voter ID</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Government ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="govtIDNumber"
                    value={formData.govtIDNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="Enter ID number"
                  />
                  {formData.govtIDType && formData.govtIDNumber && (
                    <p className="mt-1 text-xs text-gray-500">
                      Stored as masked: {formData.govtIDType === 'Aadhaar' 
                        ? formData.govtIDNumber.replace(/(\d{4})\d{4}(\d{4})/, '$1****$2')
                        : '••••••••••'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Domain Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  <span className="font-medium">CORE COMPLIANCE:</span> Domain selection controls next screen dynamically
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Multi‑select Domains <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: 'Fire Safety Audit', icon: Flame, color: 'text-red-500' },
                    { value: 'STP / Environmental Audit', icon: Droplets, color: 'text-purple-500' },
                    { value: 'Electrical / CCTV Safety Audit', icon: Zap, color: 'text-yellow-500' },
                    { value: 'Solar Audit', icon: Sun, color: 'text-orange-500' }
                  ].map((domain) => {
                    const Icon = domain.icon;
                    return (
                      <label key={domain.value} className="flex items-center gap-3 p-4 border-2 border-gray-300 dark:border-gray-600 rounded hover:border-purple-500 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="domains[]"
                          value={domain.value}
                          checked={formData.domains.includes(domain.value)}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                        <Icon className={`w-5 h-5 ${domain.color}`} />
                        <span className="text-gray-800 dark:text-gray-300 font-medium">{domain.value}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {formData.domains.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Selected Domains:</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.domains.map((domain, index) => (
                      <span key={index} className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Domain Authorizations */}
          {step === 4 && (
            <div className="space-y-6">
              {formData.domains.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                  <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">No domains selected. Please go back to select domains.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      State-Specific Authorization Details
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">For: {formData.state} • Auditor: {formData.auditorType}</p>
                  </div>
                  {renderDomainSpecificFields()}
                </>
              )}
            </div>
          )}

          {/* Step 5: Qualification & Experience */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="">Select Qualification</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Total Audit Experience (Years) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="totalExperience"
                    value={formData.totalExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="Years of experience"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Sector Experience <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Residential', 'Commercial', 'Industrial', 'Government'].map((sector) => (
                    <label key={sector} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="sectorExperience[]"
                        value={sector}
                        checked={formData.sectorExperience.includes(sector)}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600 rounded"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{sector}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Additional Certifications</h4>
                
                <label className="flex items-start gap-3 mb-4">
                  <input
                    type="checkbox"
                    name="isoLeadAuditor"
                    checked={formData.isoLeadAuditor}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="font-medium text-gray-800 dark:text-gray-300">ISO Lead Auditor Certificates</span>
                    {formData.isoLeadAuditor && (
                      <div className="mt-2">
                        <input
                          type="text"
                          name="isoCertificateNumber"
                          value={formData.isoCertificateNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                          placeholder="Certificate number"
                        />
                      </div>
                    )}
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="psuExperience"
                    checked={formData.psuExperience}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="font-medium text-gray-800 dark:text-gray-300">PSU / Government Audit Experience</span>
                    {formData.psuExperience && (
                      <div className="mt-2">
                        <textarea
                          name="psuDetails"
                          value={formData.psuDetails}
                          onChange={handleInputChange}
                          rows="2"
                          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                          placeholder="Provide details of PSU/Govt audit experience"
                        />
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
          )}

          {/* Step 6: Independence & Conflict Declarations */}
          {step === 6 && (
            <div className="space-y-6">
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                  NON‑NEGOTIABLE - Any unchecked declaration will block registration
                </p>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="noConflict"
                    checked={formData.noConflict}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-300">No Conflict of Interest Declaration</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      I declare that I have no conflict of interest with any audit assignment
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="notAuditingOwn"
                    checked={formData.notAuditingOwn}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-300">Not Auditing Own Installations / AMC Sites</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      I will not audit any installations or AMC sites that I own or have financial interest in
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="independentJudgment"
                    checked={formData.independentJudgment}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-300">Independent Professional Judgment</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      I commit to exercising independent professional judgment in all audit activities
                    </p>
                  </div>
                </label>
              </div>

              <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">System Enforcement</h4>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      • Cross‑state audits → Blocked<br/>
                      • License expiry → Auto‑suspend<br/>
                      • Conflict declaration breach → Permanent ban
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Document Upload */}
          {step === 7 && (
            <div className="space-y-6">
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
                <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                  HARD GATE - Missing/expired documents will block registration
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'stateLicense', label: 'State-specific Auditor License *', required: true },
                  { name: 'panCard', label: 'PAN Card *', required: true },
                  { name: 'govtIdProof', label: 'Government ID Proof *', required: true },
                  { name: 'photograph', label: 'Photograph *', required: true },
                  { name: 'policeVerification', label: 'Police Verification', required: false },
                  { name: 'sampleReports', label: 'Sample Audit Reports (Redacted)', required: false }
                ].map((doc) => (
                  <div key={doc.name}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {doc.label}
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded p-4 hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        name={doc.name}
                        onChange={handleInputChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        id={`${doc.name}-upload`}
                      />
                      <label htmlFor={`${doc.name}-upload`} className="cursor-pointer flex flex-col items-center justify-center gap-2">
                        <Upload className="w-8 h-8 text-gray-400" />
                        <div className="text-center">
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Click to upload</p>
                          <p className="text-xs text-gray-500">PDF, PNG, JPG up to 5MB</p>
                        </div>
                      </label>
                      {formData[doc.name] && (
                        <div className="mt-2 flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>{formData[doc.name].name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">Document Status Legend</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-red-700 dark:text-red-400">Missing/expired → Blocked</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-yellow-700 dark:text-yellow-400">Expiring 60 days → Conditional</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-green-700 dark:text-green-400">Valid → Authorized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Geography & Capacity */}
          {step === 8 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Authorized Districts / Cities <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.authorizedDistricts.map((district, index) => (
                    <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      {district}
                      <button
                        type="button"
                        onClick={() => removeItem('authorizedDistricts', index)}
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add district/city"
                    className="flex-1 px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addItem('authorizedDistricts', e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      const input = e.target.previousSibling;
                      addItem('authorizedDistricts', input.value);
                      input.value = '';
                    }}
                    className="px-4 py-2.5 bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Max Audits per Month <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="maxAuditsPerMonth"
                    value={formData.maxAuditsPerMonth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="Maximum audits per month"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Audit Type <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="auditOnSite"
                      checked={formData.auditOnSite}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-gray-700 dark:text-gray-300">On‑site</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="auditRemote"
                      checked={formData.auditRemote}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Remote</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 9: Review & Submit */}
          {step === 9 && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded p-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Review Auditor Information</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Auditor Identity</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-600 dark:text-gray-400">Name:</span> {formData.fullName}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">PAN:</span> {formData.panNumber}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">Mobile:</span> {formData.mobileNumber}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">Email:</span> {formData.email}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Auditor Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-600 dark:text-gray-400">Type:</span> {formData.auditorType}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">State:</span> {formData.state}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">City:</span> {formData.homeCity}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">Multi-District:</span> {formData.multiDistrictAudits ? 'Yes' : 'No'}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Selected Domains</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.domains.map((domain, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Qualifications & Experience</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-gray-600 dark:text-gray-400">Qualification:</span> {formData.highestQualification}</div>
                      <div><span className="text-gray-600 dark:text-gray-400">Experience:</span> {formData.totalExperience} years</div>
                      <div><span className="text-gray-600 dark:text-gray-400">Sectors:</span> {formData.sectorExperience.join(', ')}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">System Generated Compliance Score</h4>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Auditor Compliance Score</span>
                        <span className={`text-lg font-bold ${
                          calculateComplianceScore() >= 85 ? 'text-green-600' :
                          calculateComplianceScore() >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {calculateComplianceScore()} / 100
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${calculateComplianceScore()}%`,
                            backgroundColor: calculateComplianceScore() >= 85 ? '#10B981' :
                                           calculateComplianceScore() >= 70 ? '#F59E0B' : '#EF4444'
                          }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-3 text-xs">
                        <div className="text-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
                          <span className="text-gray-600 dark:text-gray-400">85–100: Authorized</span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                          <span className="text-gray-600 dark:text-gray-400">70–84: Restricted</span>
                        </div>
                        <div className="text-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-1"></div>
                          <span className="text-gray-600 dark:text-gray-400">{"<70"}: Blocked</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Declarations Status</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        {formData.noConflict ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-gray-600 dark:text-gray-400">No Conflict of Interest: {formData.noConflict ? 'Accepted' : 'Pending'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.notAuditingOwn ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-gray-600 dark:text-gray-400">Not Auditing Own: {formData.notAuditingOwn ? 'Accepted' : 'Pending'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {formData.independentJudgment ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-gray-600 dark:text-gray-400">Independent Judgment: {formData.independentJudgment ? 'Accepted' : 'Pending'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 rounded p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">BOOKAMC Auto‑Enforcement Rules</h4>
                    <div className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                      <p>• Cross‑state audits → Blocked</p>
                      <p>• License expiry → Auto‑suspend</p>
                      <p>• Conflict declaration breach → Permanent ban</p>
                    </div>
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
                    className="w-5 h-5 text-purple-600 rounded mt-0.5"
                  />
                  <div>
                    <span className="font-medium text-gray-800 dark:text-gray-300">I confirm that all information provided is accurate and complete</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      By submitting, I agree to all BOOKAMC terms and understand the auto‑enforcement rules
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between p-6 border-t border-gray-200 dark:border-gray-700">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium flex items-center gap-2 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
          )}

          <div className="ml-auto flex gap-4">
            {step < 9 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium flex items-center gap-2 transition-all duration-200"
              >
                Next Step
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.termsAccepted}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-5 h-5" />
                Submit for Verification
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}