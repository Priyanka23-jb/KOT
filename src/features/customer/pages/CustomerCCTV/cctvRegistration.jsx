import React, { useState } from "react";
import {
    Shield,
    Camera,
    Video,
    Lock,
    Building,
    MapPin,
    FileText,
    Upload,
    ChevronLeft,
    ChevronRight,
    Save,
    User,
    Phone,
    Mail,
    Users,
    FileCheck
} from "lucide-react";

export default function CreateCCTVCustomer() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        /* STEP 1 */
        customerType: "cctv",
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

        /* STEP 4 - CCTV Specific Details */
        cctvSystemType: "",
        numberOfCameras: "",
        cameraTypes: [],
        recordingSystem: "",
        storageCapacity: "",
        monitoringType: "",
        integrationSystems: [],

        /* STEP 5 - AMC Details */
        amcType: "",
        amcStartDate: "",
        amcEndDate: "",
        slaCategory: "",
        billingCycle: "",
        escalationMatrix: "",
        
        /* STEP 6 - Documents */
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

    // Handle checkbox arrays for CCTV types and integrations
    const handleCheckboxArrayChange = (fieldName, value, checked) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: checked
                ? [...prev[fieldName], value]
                : prev[fieldName].filter((v) => v !== value),
        }));
    };

    const steps = [
        "Customer Type",
        "Basic Details",
        "Site Registration",
        "CCTV System",
        "AMC Details",
        "Documents",
    ];

    // CCTV System options
    const cameraTypeOptions = [
        "Analog HD-CVI",
        "Analog HD-TVI",
        "Analog AHD",
        "IP Dome",
        "IP Bullet",
        "PTZ Camera",
        "Thermal Camera",
        "Fisheye Camera",
        "Wireless Camera",
        "Hidden Camera"
    ];

    const integrationOptions = [
        "Access Control System",
        "Intrusion Alarm",
        "Fire Alarm",
        "Building Management",
        "Video Analytics",
        "Intercom System",
        "Perimeter Protection",
        "Central Monitoring"
    ];

    return (
        <div className="p-6">
            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                    <Video className="text-purple-800" />
                    CCTV & Security Systems Customer Onboarding
                </h1>
                <p className="text-gray-800 dark:text-gray-400">
                    BOOKAMC – CCTV & Security Systems Management
                </p>

                {/* STEPPER */}
                <div className="mt-6">
                    <div className="flex justify-between mb-2">
                        {steps.map((label, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold
                  ${step >= index + 1
                                            ? "bg-purple-800 text-white"
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
                            className="h-full bg-purple-800 rounded transition-all"
                            style={{ width: `${((step - 1) / 5) * 100}%` }}
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
                            {/* Customer Type Section - Pre-filled for CCTV */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                    <Video className="w-5 h-5" />
                                    Customer Type
                                </h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Industry Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="customerType"
                                        value={formData.customerType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="cctv">CCTV & Security Systems</option>
                                        <option value="fire">Fire Systems</option>
                                        <option value="water-treatment">Water Treatment</option>
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Vendor Type</option>
                                        <option value="cctv-installation">CCTV Installation</option>
                                        <option value="access-control">Access Control Systems</option>
                                        <option value="security-alarm">Security Alarms</option>
                                        <option value="video-analytics">Video Analytics</option>
                                        <option value="surveillance-monitoring">Surveillance Monitoring</option>
                                        <option value="perimeter-security">Perimeter Security</option>
                                    </select>
                                </div>
                            </div>

                            {/* Legal Entity Information Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                    <Building className="w-5 h-5" />
                                    Legal Entity Information
                                </h3>
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                            {/* Login Credentials Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                    <Lock className="w-5 h-5" />
                                    Login Credentials
                                </h3>
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            <option value="retail">Retail</option>
                                            <option value="banking">Banking & Finance</option>
                                            <option value="transport">Transportation</option>
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Organisation Head / Authorised Representative
                                </h3>

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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Enter designation"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="mobileNumber"
                                                value={formData.mobileNumber}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-r border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="alternateContactNumber"
                                                value={formData.alternateContactNumber}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-r border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                Site Registration
                            </h3>
                            
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select State</option>
                                            <option value="maharashtra">Maharashtra</option>
                                            <option value="gujarat">Gujarat</option>
                                            <option value="tamil-nadu">Tamil Nadu</option>
                                            <option value="karnataka">Karnataka</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="uttar-pradesh">Uttar Pradesh</option>
                                        </select>
                                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            Compliance requirements vary by state
                                        </p>
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Contact Number
                                        </label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                name="siteContactNumber"
                                                value={formData.siteContactNumber}
                                                onChange={handleChange}
                                                className="flex-1 px-4 py-2.5 rounded-r border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 4 - CCTV System Details */}
                    {step === 4 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                                <Camera className="w-5 h-5" />
                                CCTV System Configuration
                            </h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        CCTV System Type
                                    </label>
                                    <select
                                        name="cctvSystemType"
                                        value={formData.cctvSystemType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select System Type</option>
                                        <option value="analog">Analog CCTV System</option>
                                        <option value="ip">IP CCTV System</option>
                                        <option value="hybrid">Hybrid System</option>
                                        <option value="wireless">Wireless System</option>
                                        <option value="cloud">Cloud-based System</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Number of Cameras
                                    </label>
                                    <input
                                        type="number"
                                        name="numberOfCameras"
                                        value={formData.numberOfCameras}
                                        onChange={handleChange}
                                        min="1"
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter number of cameras"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Camera Types
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                        {cameraTypeOptions.map((type) => (
                                            <label key={type} className="flex items-center gap-2 p-2 border border-gray-300 dark:border-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.cameraTypes.includes(type)}
                                                    onChange={(e) => handleCheckboxArrayChange('cameraTypes', type, e.target.checked)}
                                                    className="w-4 h-4 text-purple-800 rounded focus:ring-purple-500"
                                                />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Recording System
                                        </label>
                                        <select
                                            name="recordingSystem"
                                            value={formData.recordingSystem}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="">Select Recording System</option>
                                            <option value="dvr">DVR (Digital Video Recorder)</option>
                                            <option value="nvr">NVR (Network Video Recorder)</option>
                                            <option value="hybrid-dvr">Hybrid DVR</option>
                                            <option value="cloud-storage">Cloud Storage</option>
                                            <option value="sd-card">SD Card Storage</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Storage Capacity
                                        </label>
                                        <input
                                            type="text"
                                            name="storageCapacity"
                                            value={formData.storageCapacity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="e.g., 2TB, 30 days retention"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Monitoring Type
                                    </label>
                                    <select
                                        name="monitoringType"
                                        value={formData.monitoringType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Monitoring Type</option>
                                        <option value="local">Local Monitoring</option>
                                        <option value="remote">Remote Monitoring</option>
                                        <option value="24x7">24x7 Professional Monitoring</option>
                                        <option value="event-based">Event-based Monitoring</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Integration with Other Systems
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                        {integrationOptions.map((system) => (
                                            <label key={system} className="flex items-center gap-2 p-2 border border-gray-300 dark:border-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.integrationSystems.includes(system)}
                                                    onChange={(e) => handleCheckboxArrayChange('integrationSystems', system, e.target.checked)}
                                                    className="w-4 h-4 text-purple-800 rounded focus:ring-purple-500"
                                                />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">{system}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 5 - AMC Details */}
                    {step === 5 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6">AMC Details</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        AMC Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="amcType"
                                        value={formData.amcType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

                    {/* STEP 6 - Documents & Declaration */}
                    {step === 6 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                Documents & Declaration
                            </h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Incorporation Certificate / Registration Proof
                                    </label>
                                    <input
                                        type="file"
                                        name="incorporationDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                    <FileCheck className="w-5 h-5" />
                                    Declaration & Consent
                                </h4>
                                <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                    <input
                                        type="checkbox"
                                        name="declaration"
                                        checked={formData.declaration}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 text-purple-800 rounded focus:ring-purple-500"
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
                            className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                            <ChevronLeft size={18} /> Previous
                        </button>
                    )}
                    {step < 6 ? (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700 transition"
                        >
                            Next <ChevronRight size={18} />
                        </button>
                    ) : (
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition"
                        >
                            <Save size={18} /> Submit CCTV Customer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}