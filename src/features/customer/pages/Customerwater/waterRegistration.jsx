import React, { useState } from "react";
import {
    Building,
    Shield,
    MapPin,
    FileText,
    Upload,
    CheckCircle,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    Save,
    Check,
    Droplets,
    Factory,
    Filter,
    TestTube
} from "lucide-react";

export default function CreateWaterTreatmentCustomer() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        /* STEP 1 */
        customerType: "water-treatment",
        vendorType: "",
        organisationName: "",
        tradeName: "",
        yearOfEstablishment: "",
        tradingBrandName: "",
        gstRegistered: "",
        userName: "",
        password: "",

        /* STEP 2 */
        organisationType: "",
        cinNumber: "",
        gstNumber: "",
        tanNumber: "",
        panNumber: "",
        msmeNumber: "",
        industrySector: "",
        natureOfBusiness: "",
        authorisedSignatoryName: "",
        designation: "",
        mobileNumber: "",
        email: "",
        alternateContactNumber: "",
        numberOfEmployees: "",

        /* STEP 3 */
        siteAddress1: "",
        siteAddress2: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
        siteContactName: "",
        siteContactNumber: "",
        siteEmail: "",
        siteDesignation: "",

        /* STEP 4 - Compliance Mapping */
        industryCategory: "",
        plantType: "",
        installedCapacity: "",
        capacityUnit: "KLD",
        technologyUsed: "",
        commissioningDate: "",
        plantOEM: "",
        operationResponsibility: "",
        
        /* STEP 5 - Compliance Classification */
        pcbCTO: "",
        pcbCTE: "",
        fireNOC: "",
        localLicense: "",
        
        /* STEP 6 - AMC Details */
        amcType: "",
        amcStartDate: "",
        amcEndDate: "",
        slaCategory: "",
        billingCycle: "",
        escalationMatrix: "",
        
        /* STEP 7 - Documents */
        incorporationDoc: null,
        gstDoc: null,
        panDoc: null,
        boardResolutionDoc: null,
        complianceAuditDoc: null,
        declaration: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const steps = [
        "Customer Type",
        "Basic Details",
        "Site Registration",
        "Compliance Mapping",
        "Compliance Classification",
        "AMC Details",
        "Documents",
    ];

    return (
        <div className="p-6">
            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                    <Droplets className="text-purple-600" />
                    Water Treatment Customer Onboarding
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    BOOKAMC – Water Treatment Compliance & Management
                </p>

                {/* STEPPER */}
                <div className="mt-6">
                    <div className="flex justify-between mb-2">
                        {steps.map((label, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold
                  ${step >= index + 1
                                            ? "bg-purple-600 text-white"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span className="text-xs mt-1 text-gray-500 hidden md:block">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded">
                        <div
                            className="h-full bg-purple-600 rounded transition-all"
                            style={{ width: `${((step - 1) / 6) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* FORM CARD */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm">
                <div className="p-6 space-y-6">

                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="space-y-6">
                            {/* Customer Type Section - Pre-filled for Water Treatment */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Customer Type</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Industry Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="customerType"
                                        value={formData.customerType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="water-treatment">Water Treatment</option>
                                        <option value="fire">Fire Systems</option>
                                        <option value="cctv">CCTV & Security Systems</option>
                                        <option value="solar">Solar Systems</option>
                                    </select>
                                </div>
                                
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Vendor Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="vendorType"
                                        value={formData.vendorType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Vendor Type</option>
                                        <option value="ro-purifier">RO Water Purifiers</option>
                                        <option value="water-softener">Water Softeners</option>
                                        <option value="waste-treatment">Waste Water Treatment</option>
                                        <option value="stp-plant">STP Plant</option>
                                        <option value="etp-plant">ETP Plant</option>
                                        <option value="wtp-plant">WTP Plant</option>
                                    </select>
                                </div>
                            </div>

                            {/* Legal Entity Information Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Legal Entity Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Organisation / Company Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="organisationName"
                                            value={formData.organisationName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter official organisation name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Trade Name / Brand Name (if different)
                                        </label>
                                        <input
                                            type="text"
                                            name="tradeName"
                                            value={formData.tradeName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Trade name (optional)"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Year of Establishment <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="yearOfEstablishment"
                                            value={formData.yearOfEstablishment}
                                            onChange={handleChange}
                                            min="1900"
                                            max={new Date().getFullYear()}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="YYYY"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Trading/Brand name
                                        </label>
                                        <input
                                            type="text"
                                            name="tradingBrandName"
                                            value={formData.tradingBrandName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Brand name (optional)"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        GST Registered
                                    </label>
                                    <select
                                        name="gstRegistered"
                                        value={formData.gstRegistered}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                            {/* Login Credentials Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Login Credentials</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter user name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2 - Basic Details */}
                    {step === 2 && (
                        <div className="space-y-8">
                            {/* BASIC DETAILS Section */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Basic Details</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Trade Name / Brand Name (If different)
                                        </label>
                                        <input
                                            type="text"
                                            name="tradeName"
                                            value={formData.tradeName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter trade name if different"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Organisation Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="organisationType"
                                            value={formData.organisationType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select Organisation Type</option>
                                            <option value="proprietorship">Proprietorship</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="llp">Limited Liability Partnership (LLP)</option>
                                            <option value="private-limited">Private Limited Company</option>
                                            <option value="public-limited">Public Limited Company</option>
                                            <option value="government">Government / PSU</option>
                                            <option value="society">Society / Trust</option>
                                            <option value="other">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Registration & Statutory Numbers Section */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Registration & Statutory Numbers</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            CIN / Registration Number (Mandatory for Companies)
                                        </label>
                                        <input
                                            type="text"
                                            name="cinNumber"
                                            value={formData.cinNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter CIN/Registration number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            GST Number {formData.gstRegistered === 'yes' && <span className="text-red-500">*</span>}
                                        </label>
                                        <input
                                            type="text"
                                            name="gstNumber"
                                            value={formData.gstNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter GST number"
                                            disabled={formData.gstRegistered !== 'yes'}
                                        />
                                        {formData.gstRegistered === 'yes' && (
                                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                                Format: 22AAAAA0000A1Z5 (15 characters)
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            PAN Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="panNumber"
                                            value={formData.panNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter PAN number"
                                            required
                                        />
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            Format: AAAAA0000A (10 characters)
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            TAN Number (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="tanNumber"
                                            value={formData.tanNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter TAN number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            MSME / Udyam Registration (Optional but valuable)
                                        </label>
                                        <input
                                            type="text"
                                            name="msmeNumber"
                                            value={formData.msmeNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter MSME/Udyam number"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Industry & Business Classification Section */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Industry & Business Classification</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Industry Sector <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="industrySector"
                                            value={formData.industrySector}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Select Industry Sector</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="residential">Residential</option>
                                            <option value="hospitality">Hospitality</option>
                                            <option value="education">Education</option>
                                            <option value="infrastructure">Infrastructure</option>
                                            <option value="it">Information Technology</option>
                                            <option value="industrial">Industrial</option>
                                            <option value="government">Government</option>
                                            <option value="pharmaceutical">Pharmaceutical</option>
                                            <option value="textile">Textile</option>
                                            <option value="chemical">Chemical</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Nature of Business
                                        </label>
                                        <select
                                            name="natureOfBusiness"
                                            value={formData.natureOfBusiness}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select Nature of Business</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="trading">Trading</option>
                                            <option value="service">Service</option>
                                            <option value="hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Organisation Head / Authorised Representative Section */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Organisation Head / Authorised Representative</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Name of Authorised Signatory <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="authorisedSignatoryName"
                                            value={formData.authorisedSignatoryName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Designation <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter designation"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="mobileNumber"
                                                value={formData.mobileNumber}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-r border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="10-digit mobile number"
                                                maxLength="10"
                                                required
                                            />
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            OTP verification will be required
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email ID <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter email address"
                                            required
                                        />
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            OTP verification will be required
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Alternate Contact Number
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="alternateContactNumber"
                                                value={formData.alternateContactNumber}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-r border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="10-digit alternate number"
                                                maxLength="10"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Number of Employees (Range)
                                        </label>
                                        <select
                                            name="numberOfEmployees"
                                            value={formData.numberOfEmployees}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select Range</option>
                                            <option value="1-10">1-10</option>
                                            <option value="11-50">11-50</option>
                                            <option value="51-200">51-200</option>
                                            <option value="201-500">201-500</option>
                                            <option value="501-1000">501-1000</option>
                                            <option value="1000+">1000+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 - Site Registration */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6">Step 3 – Site Registration</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Address Line 1 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="siteAddress1"
                                        value={formData.siteAddress1}
                                        onChange={handleChange}
                                        placeholder="Enter address line 1"
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Address Line 2
                                    </label>
                                    <input
                                        name="siteAddress2"
                                        value={formData.siteAddress2}
                                        onChange={handleChange}
                                        placeholder="Enter address line 2"
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter city"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            District
                                        </label>
                                        <input
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            placeholder="Enter district"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            State <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select State</option>
                                            <option value="maharashtra">Maharashtra</option>
                                            <option value="gujarat">Gujarat</option>
                                            <option value="tamil-nadu">Tamil Nadu</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="uttar-pradesh">Uttar Pradesh</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            PIN Code <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            placeholder="Enter PIN code"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Contact Person
                                        </label>
                                        <input
                                            name="siteContactName"
                                            value={formData.siteContactName}
                                            onChange={handleChange}
                                            placeholder="Enter contact person name"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Contact Number
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="siteContactNumber"
                                                value={formData.siteContactNumber}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-r border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="10-digit contact number"
                                                maxLength="10"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Mail ID
                                        </label>
                                        <input
                                            type="email"
                                            name="siteEmail"
                                            value={formData.siteEmail}
                                            onChange={handleChange}
                                            placeholder="Enter site email"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Designation <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="siteDesignation"
                                            value={formData.siteDesignation}
                                            onChange={handleChange}
                                            placeholder="Enter designation"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4 - Compliance Mapping */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6">Step 4 – Compliance Mapping</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Category of Industry <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="industryCategory"
                                        value={formData.industryCategory}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="red">Red Category (PI score ≥ 60) - Heavily polluting industries</option>
                                        <option value="orange">Orange Category (PI score 41–59) - Moderately polluting industries</option>
                                        <option value="green">Green Category (PI score 21–40) - Significantly less polluting industries</option>
                                        <option value="white">White Category (PI score up to 20) - Practically non-polluting industries</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Plant Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="plantType"
                                        value={formData.plantType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Plant Type</option>
                                        <option value="stp">STP (Sewage Treatment Plant)</option>
                                        <option value="etp">ETP (Effluent Treatment Plant)</option>
                                        <option value="wtp">WTP (Water Treatment Plant)</option>
                                        <option value="ro">RO Plant</option>
                                        <option value="dm">DM Plant</option>
                                        <option value="softener">Softener Plant</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Installed Capacity
                                        </label>
                                        <div className="flex">
                                            <input
                                                type="number"
                                                name="installedCapacity"
                                                value={formData.installedCapacity}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-l border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="Capacity"
                                            />
                                            <select
                                                name="capacityUnit"
                                                value={formData.capacityUnit}
                                                onChange={handleChange}
                                                className="px-4 py-2.5 rounded-r border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            >
                                                <option value="KLD">KLD</option>
                                                <option value="MLD">MLD</option>
                                                <option value="m3/hr">m³/hr</option>
                                                <option value="LPH">LPH</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Technology Used
                                        </label>
                                        <select
                                            name="technologyUsed"
                                            value={formData.technologyUsed}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select Technology</option>
                                            <option value="mbbr">MBBR (Moving Bed Biofilm Reactor)</option>
                                            <option value="sbr">SBR (Sequential Batch Reactor)</option>
                                            <option value="mbr">MBR (Membrane Bio Reactor)</option>
                                            <option value="asp">ASP (Activated Sludge Process)</option>
                                            <option value="ro-uf">RO / UF (Reverse Osmosis / Ultra Filtration)</option>
                                            <option value="ion-exchange">Ion Exchange</option>
                                            <option value="media-filtration">Media Filtration</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Commissioning Date
                                        </label>
                                        <input
                                            type="date"
                                            name="commissioningDate"
                                            value={formData.commissioningDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Plant OEM / Installer
                                        </label>
                                        <input
                                            type="text"
                                            name="plantOEM"
                                            value={formData.plantOEM}
                                            onChange={handleChange}
                                            placeholder="Enter OEM/Installer name"
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Operation Responsibility
                                    </label>
                                    <select
                                        name="operationResponsibility"
                                        value={formData.operationResponsibility}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Responsibility</option>
                                        <option value="customer">Customer Operated</option>
                                        <option value="third-party">Third-Party Operator</option>
                                        <option value="vendor">Vendor Operated</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 5 - Compliance Classification */}
                    {step === 5 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6">Step 5 – Compliance Classification</h3>
                            
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Pollution Control Board - CTO <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="pcbCTO"
                                            value={formData.pcbCTO}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            <option value="applied">Applied</option>
                                            <option value="not-applicable">Not Applicable</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Pollution Control Board - CTE <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="pcbCTE"
                                            value={formData.pcbCTE}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                            <option value="applied">Applied</option>
                                            <option value="not-applicable">Not Applicable</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Fire NOC Required <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="fireNOC"
                                        value={formData.fireNOC}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="applied">Applied</option>
                                        <option value="not-applicable">Not Applicable</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Local Authority License related to AMC <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="localLicense"
                                        value={formData.localLicense}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select</option>
                                        <option value="required">Required</option>
                                        <option value="not-required">Not Required</option>
                                        <option value="obtained">Obtained</option>
                                        <option value="applied">Applied</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 6 - AMC Details */}
                    {step === 6 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6">Step 6 – AMC Details</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        AMC Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="amcType"
                                        value={formData.amcType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select AMC Type</option>
                                        <option value="compliance-only">Compliance-Only AMC (Asset + BM + Compliance)</option>
                                        <option value="preventive">Preventive AMC (Asset + PM + BM + Compliance)</option>
                                        <option value="comprehensive">Comprehensive AMC (Asset + Spare Rate Contract + PM + BM + Compliance)</option>
                                        <option value="om">O & M AMC (Asset + Operation + Spare Rate Contract + PM + BM + Compliance)</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            AMC Start Date
                                        </label>
                                        <input
                                            type="date"
                                            name="amcStartDate"
                                            value={formData.amcStartDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            AMC End Date
                                        </label>
                                        <input
                                            type="date"
                                            name="amcEndDate"
                                            value={formData.amcEndDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            SLA Category
                                        </label>
                                        <select
                                            name="slaCategory"
                                            value={formData.slaCategory}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select SLA Category</option>
                                            <option value="sla-1">SLA-1</option>
                                            <option value="sla-2">SLA-2</option>
                                            <option value="sla-3">SLA-3</option>
                                            <option value="sla-4">SLA-4</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Billing Cycle
                                        </label>
                                        <select
                                            name="billingCycle"
                                            value={formData.billingCycle}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select Billing Cycle</option>
                                            <option value="visit-wise">Visit Wise (Prepaid)</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="quarterly">Quarterly</option>
                                            <option value="half-yearly">Half-yearly</option>
                                            <option value="yearly">Yearly</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Escalation Matrix
                                    </label>
                                    <select
                                        name="escalationMatrix"
                                        value={formData.escalationMatrix}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Escalation Level</option>
                                        <option value="critical">Critical</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 7 - Documents & Declaration */}
                    {step === 7 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6">Step 7 – Documents & Declaration</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Incorporation Certificate / Registration Proof
                                    </label>
                                    <input
                                        type="file"
                                        name="incorporationDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        GST Certificate
                                    </label>
                                    <input
                                        type="file"
                                        name="gstDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        PAN Copy
                                    </label>
                                    <input
                                        type="file"
                                        name="panDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Board Resolution / Authorisation Letter (Optional)
                                    </label>
                                    <input
                                        type="file"
                                        name="boardResolutionDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Previous Compliance Audit Reports (Optional)
                                    </label>
                                    <input
                                        type="file"
                                        name="complianceAuditDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Declaration & Consent</h4>
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="declaration"
                                        checked={formData.declaration}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        Organisation confirms that all submitted information is accurate and legally valid.
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* FOOTER */}
                <div className="flex justify-between p-6 border-t dark:border-gray-700">
                    {step > 1 && (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                            <ChevronLeft size={18} /> Previous
                        </button>
                    )}
                    {step < 7 ? (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                        >
                            Next <ChevronRight size={18} />
                        </button>
                    ) : (
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            <Save size={18} /> Submit Water Treatment Customer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}