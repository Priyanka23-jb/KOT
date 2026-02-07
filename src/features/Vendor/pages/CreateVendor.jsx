import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Building, Mail, Phone, MapPin, User, FileText, Shield,
    CheckCircle, AlertCircle, Upload, Briefcase, Globe,
    Award, Clock, Banknote, Users, Target, FileCheck,
    ChevronRight, ChevronLeft, Save, Wrench,
    TrendingUp, Download, Check
} from 'lucide-react';

export default function CreateVendor() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Basic Information
        vendorType: '',
        vendorLegalName: '',
        tradeName: '',
        yearOfEstablishment: '',
        gstRegistered: '',
        username: '',
        password: '',
        // Step 2: Registration & Compliance
        gstin: '',
        panNumber: '',
        cin: '',
        msmeNumber: '',
        pfRegistration: '',
        esiRegistration: '',
        labourLicense: '',
        fireLicense: '',
        isoCertified: '',
        isoCount: '',
        safetyDeclarationAccepted: false,

        // Step 3: Contact Details
        registeredAddress: '',
        branchAddress: '',
        city: '',
        state: '',
        pincode: '',
        contactPerson: '',
        designation: '',
        mobile: '',
        email: '',
        alternateContact: '',

        // Step 4: Service Capability
        serviceCategories: [],
        natureOfServices: [],
        oemAuthorized: '',
        oemBrands: '',

        // Step 5: Technical & Workforce
        technicianCount: '',
        certifiedTechnicians: '',
        certifications: [],
        toolsAvailable: [],

        // Step 6: Geography & Coverage
        coverageAreas: '',
        maxSitesPerMonth: '',
        emergencyResponseTime: '',

        // Step 7: Banking Details
        accountHolder: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        paymentCycle: '',

        // Step 8: Experience
        yearsExperience: '',
        keyClients: '',
        govtExperience: '',
        similarProjects: '',

        // Step 9: Documents
        documents: {
            gstCertificate: null,
            panCard: null,
            incorporationCertificate: null,
            addressProof: null,
            insurancePolicy: null,
            isoCertificate: null,
            authorizationLetter: null,
            vendorAgreement: null,
            cancelledCheque: null,
            workmenInsurance: null,
            liabilityInsurance: null,
        },

        // Step 10: Declarations
        statutoryCompliance: false,
        workforceResponsibility: false,
        noSubcontracting: false,
        dataConfidentiality: false,
        dataPrivacy: false,
        termsAccepted: false,
        signatoryName: '',
        signatoryDate: new Date().toISOString().split('T')[0],

        // Step 11: Review
        reviewConfirmed: false,
    });

    const vendorTypes = ['Individual', 'Proprietorship', 'Partnership', 'Pvt Ltd', 'LLP'];
    const serviceCategories = [
        'Fire Fighting Systems',
        'STP / ETP',
        'CCTV & Surveillance',
        'Solar PV Systems'
    ];
    const natureServices = ['Installation', 'AMC', 'Breakdown / On-call', 'Audit & Compliance'];
    const certificationTypes = [
        'Fire License',
        'Electrical Supervisor Certificate',
        'STP Operator Certificate',
        'Solar Installer Certificate',
        'CCTV Technician Certificate'
    ];
    const toolsList = [
        'Multimeter',
        'Thermal Camera',
        'Pressure Gauge',
        'Flow Meter',
        'Cable Tester',
        'Power Tools',
        'Safety Equipment',
        'Specialized Test Equipment'
    ];
    const paymentCycles = ['7 days', '15 days', '30 days'];
    const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Uttar Pradesh', 'Others'];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleArrayChange = (name, value, isChecked) => {
        setFormData(prev => ({
            ...prev,
            [name]: isChecked
                ? [...prev[name], value]
                : prev[name].filter(item => item !== value)
        }));
    };

    const handleFileChange = (docType, file) => {
        setFormData(prev => ({
            ...prev,
            documents: {
                ...prev.documents,
                [docType]: file
            }
        }));
    };

    const nextStep = () => {
        if (step < 11) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Vendor form submitted:', formData);
        // API call to submit form
        navigate('/vendor/list');
    };

    // Safety Declaration Text
    const safetyDeclaration = `
I hereby Declare that I have Occupational health and safety certificate and I shall obey the following Terms and Condition. Our commitment to occupational health and safety has the highest priority and is an integral part of all our business activities. This principle is applicable both for our employees and for our partners and subcontractors. Health and safety is as important as the other company's objectives such as quality, environmental protection, productivity, economical success and customer service.

Our safety awareness is based on the following principles:
• Each supervisor and employee and partner has to guarantee within his/her area of responsibility a safe work environment. He/she has to ensure that each work can be carried out safely.
• Each employee is responsible for his/her own safety and for not endangering his/her environment.
• Each employee has to observe the rules, regulations and instructions which are applicable for his/her work area.
• We are convinced that each accident can be avoided.
• Dangerous situations, accidents and injuries have to be declared immediately.
• Health and safety requires a high standard of behavior, property and order.

We are sure that all risks arising from work can be managed by a foresighted and careful behavior. That is why the management and the works council commit themselves to guarantee the implementation of the above mentioned principles inside the company.

If I don't obey the standard safety norms and any injury happens at site, then BOOKAMC SYSTEM Company or its legal Heir will not be responsible for any mishappening and I, on behalf of me and my employees or family, will not claim any settlement and claim. Also, I will not process any legal action against company.
`;

    // Vendor Terms & Conditions
    const vendorTerms = `
BOOKAMC SYSTEMS PRIVATE LIMITED
Vendor Terms & Conditions & Statutory Declarations
This is applicable to all vendors onboarded on BOOKAMC Platform.

1. Definitions
• "BOOKAMC" means BOOKAMC Systems Private Limited, including its platform, applications, and authorized representatives.
• "Vendor" means the individual or entity providing services through BOOKAMC.
• "Services" means installation, AMC, breakdown, audit, or compliance-related activities for Fire, STP, CCTV, Solar, or allied assets.
• "Client" means any customer receiving services through BOOKAMC.

2. Scope of Engagement
2.1 Vendor agrees to provide services strictly within the approved service categories and geography assigned by BOOKAMC.
2.2 Vendor shall not subcontract services without prior written approval from BOOKAMC.
2.3 Vendor acknowledges that BOOKAMC acts as a technology and compliance management platform, not as an employer.

3. Statutory & Regulatory Compliance (CORE CLAUSE)
3.1 Vendor confirms compliance with all applicable laws including but not limited to:
• GST Act
• Labour Laws
• EPF & ESI Acts
• Environmental Laws
• State Fire & Electrical Regulations
3.2 Vendor shall maintain valid licenses, permits, and certifications required for the assigned services at all times.
3.3 BOOKAMC reserves the right to suspend or terminate vendor access if any statutory document is found invalid, expired, or misrepresented.

4. Workforce & Safety Responsibility
4.1 All personnel deployed by Vendor shall be:
• Properly trained
• Certified where required
• Legally employable
4.2 Vendor is solely responsible for:
• Wages, statutory dues, insurance
• Workplace safety and PPE
• Acts or omissions of its employees
4.3 BOOKAMC shall not be liable for any injury, accident, or loss suffered by Vendor personnel.

5. Service Quality & SLA
5.1 Vendor shall adhere to the response time and service levels committed during onboarding.
5.2 Repeated SLA failures may result in:
• Rating downgrade
• Job de-allocation
• Suspension or termination
5.3 All service reports, checklists, and photos must be uploaded through the BOOKAMC platform.

6. Audit, Verification & Right to Inspect
6.1 BOOKAMC reserves the right to:
• Verify documents submitted by Vendor
• Conduct physical or digital audits
• Request clarifications or re-submission
6.2 Vendor shall cooperate fully during audits or inspections.

7. Commercials & Payments
7.1 Payment shall be released only for:
• Completed services
• Verified service reports
• Compliance-cleared jobs
7.2 BOOKAMC may withhold payments in case of:
• Non-compliance
• Disputed service
• Client complaints
7.3 All payments shall be subject to applicable taxes and statutory deductions.

8. Confidentiality & Data Protection
8.1 Vendor shall keep confidential all:
• Client information
• Site data
• Platform data
8.2 Vendor shall not misuse, share, or store client data outside service requirements.
8.3 Breach of confidentiality may lead to immediate termination and legal action.

9. Indemnity
9.1 Vendor agrees to indemnify and hold harmless BOOKAMC against:
• Legal claims
• Statutory penalties
• Third-party damages
arising from Vendor's acts, omissions, or non-compliance.

10. Suspension & Termination
10.1 BOOKAMC may suspend or terminate Vendor access without notice if:
• Documents are falsified
• Legal violations are discovered
• Repeated SLA breaches occur
10.2 Upon termination:
• Vendor shall complete ongoing critical jobs if instructed
• BOOKAMC may withhold pending payments until closure of liabilities

11. Relationship Clause
11.1 Nothing in this agreement creates:
• Employer-employee relationship
• Partnership or agency
11.2 Vendor operates as an independent service provider.

12. Limitation of Liability
12.1 BOOKAMC shall not be liable for:
• Indirect or consequential losses
• Vendor operational losses
• Workforce claims
12.2 BOOKAMC's total liability shall not exceed the service fee paid for the relevant job.

13. Governing Law & Jurisdiction
13.1 This agreement shall be governed by the laws of India.
13.2 Courts at [Your Registered Office City] shall have exclusive jurisdiction.
`;

    const steps = [
        { number: 1, title: 'Basic Info' },
        { number: 2, title: 'Compliance' },
        { number: 3, title: 'Contact' },
        { number: 4, title: 'Services' },
        { number: 5, title: 'Technical' },
        { number: 6, title: 'Coverage' },
        { number: 7, title: 'Banking' },
        { number: 8, title: 'Experience' },
        { number: 9, title: 'Documents' },
        { number: 10, title: 'Declarations' },
        { number: 11, title: 'Review' },
    ];

    // File Upload Component
    const FileUploadField = ({ label, docType, required = false }) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label} {required && '*'}
            </label>
            <div className="relative">
                <input
                    type="file"
                    onChange={(e) => handleFileChange(docType, e.target.files[0])}
                    className="hidden"
                    id={docType}
                    required={required && !formData.documents[docType]}
                />
                <label
                    htmlFor={docType}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center cursor-pointer hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
                >
                    <Upload className="w-5 h-5 mr-2" />
                    {formData.documents[docType] ? formData.documents[docType].name : 'Choose File'}
                </label>
            </div>
            {formData.documents[docType] && (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    File selected
                </div>
            )}
        </div>
    );

    return (
        <div className="p-6">
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <Building className="w-7 h-7 text-purple-600" />
                            Vendor Registration
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            BOOKAMC AMC & Audit Management System - Complete Vendor Onboarding
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
                            style={{ width: `${((step - 1) / 10) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {step === 1 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Building className="w-5 h-5 text-purple-500" />
                            Step 1: Basic Vendor Information
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Vendor Type *
                                </label>
                                <select
                                    name="vendorType"
                                    value={formData.vendorType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select Vendor Type</option>
                                    {vendorTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Vendor Legal Name *
                                </label>
                                <input
                                    type="text"
                                    name="vendorLegalName"
                                    value={formData.vendorLegalName}
                                    onChange={handleInputChange}
                                    placeholder="As per registration certificate"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Trade Name (if different)
                                </label>
                                <input
                                    type="text"
                                    name="tradeName"
                                    value={formData.tradeName}
                                    onChange={handleInputChange}
                                    placeholder="Trading/Brand name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Year of Establishment *
                                </label>
                                <input
                                    type="number"
                                    name="yearOfEstablishment"
                                    value={formData.yearOfEstablishment}
                                    onChange={handleInputChange}
                                    placeholder="YYYY"
                                    min="1900"
                                    max={new Date().getFullYear()}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    GST Registered *
                                </label>
                                <select
                                    name="gstRegistered"
                                    value={formData.gstRegistered}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    User Name *
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    placeholder="enter user name"
                                    min="1900"
                                    max={new Date().getFullYear()}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="enter password"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                        </div>
                    </div>
                )}

                {/* Step 2: Registration & Compliance */}
                {step === 2 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-purple-500" />
                            Step 2: Registration & Compliance Details
                        </h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        GSTIN *
                                    </label>
                                    <input
                                        type="text"
                                        name="gstin"
                                        value={formData.gstin}
                                        onChange={handleInputChange}
                                        placeholder="15-digit GSTIN"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        PAN Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="panNumber"
                                        value={formData.panNumber}
                                        onChange={handleInputChange}
                                        placeholder="10-character PAN"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        CIN / LLPIN
                                    </label>
                                    <input
                                        type="text"
                                        name="cin"
                                        value={formData.cin}
                                        onChange={handleInputChange}
                                        placeholder="Company/LLP Identification Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        MSME / Udyam Registration No.
                                    </label>
                                    <input
                                        type="text"
                                        name="msmeNumber"
                                        value={formData.msmeNumber}
                                        onChange={handleInputChange}
                                        placeholder="Udyam Registration Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        PF Registration No.
                                    </label>
                                    <input
                                        type="text"
                                        name="pfRegistration"
                                        value={formData.pfRegistration}
                                        onChange={handleInputChange}
                                        placeholder="Provident Fund Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        ESI Registration No.
                                    </label>
                                    <input
                                        type="text"
                                        name="esiRegistration"
                                        value={formData.esiRegistration}
                                        onChange={handleInputChange}
                                        placeholder="ESI Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Labour License No.
                                    </label>
                                    <input
                                        type="text"
                                        name="labourLicense"
                                        value={formData.labourLicense}
                                        onChange={handleInputChange}
                                        placeholder="Labour License Number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Fire / Electrical / Environmental License No.
                                    </label>
                                    <input
                                        type="text"
                                        name="fireLicense"
                                        value={formData.fireLicense}
                                        onChange={handleInputChange}
                                        placeholder="Domain-specific license number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        ISO Certification for Occupational Health & Safety
                                    </label>
                                    <select
                                        name="isoCertified"
                                        value={formData.isoCertified}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                {formData.isoCertified === 'Yes' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Number of Valid ISO Certifications
                                        </label>
                                        <input
                                            type="number"
                                            name="isoCount"
                                            value={formData.isoCount}
                                            onChange={handleInputChange}
                                            placeholder="Enter number"
                                            min="1"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <User className="w-5 h-5 text-purple-500" />
                            Step 3: Contact Details
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Registered Office Address *
                                </label>
                                <textarea
                                    name="registeredAddress"
                                    value={formData.registeredAddress}
                                    onChange={handleInputChange}
                                    placeholder="Complete registered office address"
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Branch / Service Office Address
                                </label>
                                <textarea
                                    name="branchAddress"
                                    value={formData.branchAddress}
                                    onChange={handleInputChange}
                                    placeholder="Service/branch office address (if different)"
                                    rows="2"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        City *
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="City"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        State *
                                    </label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select State</option>
                                        {states.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Pincode *
                                    </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleInputChange}
                                        placeholder="6-digit pincode"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Primary Contact Person Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleInputChange}
                                        placeholder="Full name of contact person"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Designation *
                                    </label>
                                    <input
                                        type="text"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleInputChange}
                                        placeholder="Designation of contact person"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        placeholder="10-digit mobile number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email ID *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Official email address"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Alternate Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="alternateContact"
                                        value={formData.alternateContact}
                                        onChange={handleInputChange}
                                        placeholder="Alternate contact number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Service Capability */}
                {step === 4 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-purple-500" />
                            Step 4: Service Capability Details
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Service Categories (Select all that apply) *
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {serviceCategories.map(category => (
                                        <label key={category} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.serviceCategories.includes(category)}
                                                onChange={(e) => handleArrayChange('serviceCategories', category, e.target.checked)}
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Nature of Service (Select all that apply) *
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {natureServices.map(service => (
                                        <label key={service} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.natureOfServices.includes(service)}
                                                onChange={(e) => handleArrayChange('natureOfServices', service, e.target.checked)}
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        OEM Authorization *
                                    </label>
                                    <select
                                        name="oemAuthorized"
                                        value={formData.oemAuthorized}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                {formData.oemAuthorized === 'Yes' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            OEM Brand Names
                                        </label>
                                        <input
                                            type="text"
                                            name="oemBrands"
                                            value={formData.oemBrands}
                                            onChange={handleInputChange}
                                            placeholder="List authorized OEM brands"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 5: Technical & Workforce Details */}
                {step === 5 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-500" />
                            Step 5: Technical & Workforce Details
                        </h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                                        Number of Technicians *
                                    </label>
                                    <input
                                        type="number"
                                        name="technicianCount"
                                        value={formData.technicianCount}
                                        onChange={handleInputChange}
                                        placeholder="Total number of technicians"
                                        min="1"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Certified Technicians Available *
                                    </label>
                                    <select
                                        name="certifiedTechnicians"
                                        value={formData.certifiedTechnicians}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                    Certification Details Available (Select all that apply)
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {certificationTypes.map(cert => (
                                        <label key={cert} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.certifications.includes(cert)}
                                                onChange={(e) => handleArrayChange('certifications', cert, e.target.checked)}
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                    Tools & Equipment Available (Checklist)
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {toolsList.map(tool => (
                                        <label key={tool} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.toolsAvailable.includes(tool)}
                                                onChange={(e) => handleArrayChange('toolsAvailable', tool, e.target.checked)}
                                                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <FileUploadField
                                label="Certification Documents (Upload multiple if available)"
                                docType="authorizationLetter"
                            />
                        </div>
                    </div>
                )}

                {/* Step 6: Geography & Coverage */}
                {step === 6 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-purple-500" />
                            Step 6: Geography & Coverage
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Service Coverage Area (Cities / States) *
                                </label>
                                <textarea
                                    name="coverageAreas"
                                    value={formData.coverageAreas}
                                    onChange={handleInputChange}
                                    placeholder="List cities and states where you provide services, e.g., Mumbai, Pune, Maharashtra; Delhi NCR"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Maximum Sites Supported per Month *
                                    </label>
                                    <input
                                        type="number"
                                        name="maxSitesPerMonth"
                                        value={formData.maxSitesPerMonth}
                                        onChange={handleInputChange}
                                        placeholder="Estimated maximum sites you can service monthly"
                                        min="1"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Emergency Response Time (in hours) *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            name="emergencyResponseTime"
                                            value={formData.emergencyResponseTime}
                                            onChange={handleInputChange}
                                            placeholder="Maximum hours for emergency response"
                                            min="1"
                                            max="72"
                                            step="0.5"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <span className="text-gray-500 dark:text-gray-400">hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 7: Banking & Payment Details */}
                {step === 7 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Banknote className="w-5 h-5 text-purple-500" />
                            Step 7: Banking & Payment Details
                        </h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Account Holder Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="accountHolder"
                                        value={formData.accountHolder}
                                        onChange={handleInputChange}
                                        placeholder="As per bank records"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Bank Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="bankName"
                                        value={formData.bankName}
                                        onChange={handleInputChange}
                                        placeholder="Bank name with branch"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Account Number *
                                    </label>
                                    <input
                                        type="text"
                                        name="accountNumber"
                                        value={formData.accountNumber}
                                        onChange={handleInputChange}
                                        placeholder="Bank account number"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        IFSC Code *
                                    </label>
                                    <input
                                        type="text"
                                        name="ifscCode"
                                        value={formData.ifscCode}
                                        onChange={handleInputChange}
                                        placeholder="11-character IFSC code"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FileUploadField
                                    label="Cancelled Cheque (Upload) *"
                                    docType="cancelledCheque"
                                    required={true}
                                />

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Preferred Payment Cycle *
                                    </label>
                                    <select
                                        name="paymentCycle"
                                        value={formData.paymentCycle}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select Payment Cycle</option>
                                        {paymentCycles.map(cycle => (
                                            <option key={cycle} value={cycle}>{cycle}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 8: Experience & References */}
                {step === 8 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-purple-500" />
                            Step 8: Experience & References
                        </h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Years of Experience in this Field *
                                    </label>
                                    <input
                                        type="number"
                                        name="yearsExperience"
                                        value={formData.yearsExperience}
                                        onChange={handleInputChange}
                                        placeholder="Number of years"
                                        min="0"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Govt / PSU Experience *
                                    </label>
                                    <select
                                        name="govtExperience"
                                        value={formData.govtExperience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Key Clients (Optional)
                                </label>
                                <textarea
                                    name="keyClients"
                                    value={formData.keyClients}
                                    onChange={handleInputChange}
                                    placeholder="List major clients you have served (optional)"
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    Optional: Mention notable clients for reference
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Similar Project Details
                                </label>
                                <textarea
                                    name="similarProjects"
                                    value={formData.similarProjects}
                                    onChange={handleInputChange}
                                    placeholder="Brief description of similar projects completed"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 9: Documents Upload Section */}
                {step === 9 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <FileCheck className="w-5 h-5 text-purple-500" />
                            Step 9: Documents Upload Section
                        </h2>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FileUploadField
                                    label="GST Certificate *"
                                    docType="gstCertificate"
                                    required={true}
                                />
                                <FileUploadField
                                    label="PAN Card *"
                                    docType="panCard"
                                    required={true}
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FileUploadField
                                    label="Company Incorporation Certificate"
                                    docType="incorporationCertificate"
                                />
                                <FileUploadField
                                    label="Address Proof *"
                                    docType="addressProof"
                                    required={true}
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FileUploadField
                                    label="Workmen Compensation Insurance"
                                    docType="workmenInsurance"
                                />
                                <FileUploadField
                                    label="Public Liability Insurance"
                                    docType="liabilityInsurance"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <FileUploadField
                                    label="ISO Certificate (if any)"
                                    docType="isoCertificate"
                                />
                                <FileUploadField
                                    label="Insurance Policy (General)"
                                    docType="insurancePolicy"
                                />
                            </div>

                            <div>
                                <FileUploadField
                                    label="Vendor Agreement Copy (Signed) *"
                                    docType="vendorAgreement"
                                    required={true}
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                    Download agreement template, sign, and upload
                                </p>
                                <button
                                    type="button"
                                    className="mt-2 px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Agreement Template
                                </button>
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                                            Document Upload Guidelines
                                        </h3>
                                        <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                                            <li>• All documents must be clear, legible, and in PDF/JPEG/PNG format</li>
                                            <li>• Maximum file size: 5MB per document</li>
                                            <li>• Ensure documents are valid and not expired</li>
                                            <li>• PAN + GST mismatch will result in auto-rejection</li>
                                            <li>• Inactive GST will block onboarding</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 10: Compliance Declarations */}
                {step === 10 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-purple-500" />
                            Step 10: Compliance Declarations
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 max-h-96 overflow-y-auto">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                                    BOOKAMC SYSTEMS PRIVATE LIMITED - Vendor Terms & Conditions
                                </h3>
                                <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
                                    {vendorTerms}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-gray-800 dark:text-white">
                                    Mandatory Declarations (All must be accepted)
                                </h3>

                                <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="statutoryCompliance"
                                        checked={formData.statutoryCompliance}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                        required
                                    />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            Statutory Compliance Declaration
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            I confirm that all information and documents submitted are true, valid, and legally compliant.
                                        </p>
                                    </div>
                                </label>

                                <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="workforceResponsibility"
                                        checked={formData.workforceResponsibility}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                        required
                                    />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            Workforce & Labour Law Declaration
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            I confirm compliance with all labour laws and take full responsibility for my workforce.
                                        </p>
                                    </div>
                                </label>

                                <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="noSubcontracting"
                                        checked={formData.noSubcontracting}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                        required
                                    />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            No Sub-Contracting Declaration
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            I shall not subcontract services without prior written approval from BOOKAMC.
                                        </p>
                                    </div>
                                </label>

                                <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="dataConfidentiality"
                                        checked={formData.dataConfidentiality}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                        required
                                    />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            Data Confidentiality Declaration
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            I shall protect client and platform data and not misuse or disclose it.
                                        </p>
                                    </div>
                                </label>

                                <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                        required
                                    />
                                    <div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            Platform Terms & Conditions Acceptance
                                        </span>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            I accept all terms and conditions mentioned in the BOOKAMC Vendor Agreement.
                                        </p>
                                    </div>
                                </label>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Digital Signature / Authorized Signatory Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="signatoryName"
                                        value={formData.signatoryName}
                                        onChange={handleInputChange}
                                        placeholder="Full name of authorized signatory"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="signatoryDate"
                                        value={formData.signatoryDate}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 11: Review & Submit */}
                {step === 11 && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-purple-500" />
                            Step 11: Review & Submit
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-green-800 dark:text-green-300">
                                            Ready to Submit!
                                        </h3>
                                        <p className="text-green-700 dark:text-green-400 mt-2">
                                            Please review all information carefully before submission. Once submitted, your application will be reviewed by BOOKAMC compliance team.
                                        </p>
                                        <p className="text-green-700 dark:text-green-400 mt-2 text-sm">
                                            Estimated review time: 2-3 business days
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-medium text-gray-800 dark:text-white">Summary of Information</h3>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Basic Information</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Vendor Type: <span className="font-medium">{formData.vendorType}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Legal Name: <span className="font-medium">{formData.vendorLegalName}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            GST Registered: <span className="font-medium">{formData.gstRegistered}</span>
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Details</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Contact Person: <span className="font-medium">{formData.contactPerson}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Email: <span className="font-medium">{formData.email}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Mobile: <span className="font-medium">{formData.mobile}</span>
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Services</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Categories: <span className="font-medium">{formData.serviceCategories.join(', ')}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Nature: <span className="font-medium">{formData.natureOfServices.join(', ')}</span>
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                                        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Compliance</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            GSTIN: <span className="font-medium">{formData.gstin}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            PAN: <span className="font-medium">{formData.panNumber}</span>
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Safety Declaration: <span className="font-medium">{formData.safetyDeclarationAccepted ? 'Accepted' : 'Not Accepted'}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="reviewConfirmed"
                                    checked={formData.reviewConfirmed}
                                    onChange={handleInputChange}
                                    className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                    required
                                />
                                <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">
                                        Final Confirmation
                                    </span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        I confirm that all information provided is accurate to the best of my knowledge. I understand that any false information may result in termination of my vendor account and legal action.
                                    </p>
                                </div>
                            </label>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">
                                            Important Note
                                        </h4>
                                        <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                                            <li>• PAN + GST mismatch will result in auto-rejection</li>
                                            <li>• Inactive GST status will block onboarding</li>
                                            <li>• You will receive application status updates via email</li>
                                            <li>• Please keep all original documents ready for verification</li>
                                            <li>• Our compliance team may contact you for clarifications</li>
                                        </ul>
                                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                                            <div className="flex items-start gap-3">
                                                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h3 className="font-medium text-yellow-800 dark:text-yellow-300 mb-2">
                                                        Safety Declaration
                                                    </h3>
                                                    <div className="text-sm text-yellow-700 dark:text-yellow-400 whitespace-pre-line max-h-60 overflow-y-auto mb-4">
                                                        {safetyDeclaration}
                                                    </div>
                                                    <label className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            name="safetyDeclarationAccepted"
                                                            checked={formData.safetyDeclarationAccepted}
                                                            onChange={handleInputChange}
                                                            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                                            required
                                                        />
                                                        <span className="text-sm text-yellow-800 dark:text-yellow-300">
                                                            I accept and agree to the above safety declaration *
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium flex items-center gap-2 transition-all duration-200"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Previous
                        </button>
                    )}

                    <div className="ml-auto flex gap-4">
                        {step < 11 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 font-medium flex items-center gap-2 transition-all duration-200"
                            >
                                Next Step
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={!formData.reviewConfirmed}
                                className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Save className="w-5 h-5" />
                                Submit Vendor Registration
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}