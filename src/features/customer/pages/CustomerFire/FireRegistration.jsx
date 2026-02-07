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
    Flame
} from "lucide-react";

export default function CreateFireCustomer() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        /* STEP 1 */
        customerType: "",
        vendorType: "",
        organisationName: "",
        tradeName: "",
        yearOfEstablishment: "",
        tradingBrandName: "",
        gstRegistered: "",
        userName: "",
        password: "",

        /* STEP 2 - UPDATED FIELD NAMES TO MATCH JSX */
        organisationType: "",
        cinNumber: "", // Changed from 'cin'
        gstNumber: "", // Changed from 'gst'
        tanNumber: "", // Changed from 'tan'
        panNumber: "", // Changed from 'pan'
        msmeNumber: "", // Changed from 'msme'
        industrySector: "",
        natureOfBusiness: "",
        authorisedSignatoryName: "", // Changed from 'authorisedName'
        designation: "", // Changed from 'authorisedDesignation'
        mobileNumber: "", // Changed from 'authorisedMobile'
        email: "", // Changed from 'authorisedEmail'
        alternateContactNumber: "", // Added this field
        numberOfEmployees: "", // Changed from 'employeeCount'
        complianceCertificates: [], // Added this field for checkboxes

        /* STEP 3 */
        siteAddress1: "",
        siteAddress2: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
        siteContactName: "",
        siteContactNumber: "",
        siteDesignation: "",

        /* STEP 4 */
        occupancyType: "",
        riskCategory: "",

        /* STEP 5 */
        fireNoc: "",
        pcb: "",
        localLicense: "",

        /* STEP 6 */
        amcType: "",
        amcStart: "",
        amcEnd: "",
        sla: "",
        billingCycle: "",
        escalation: "",

        /* STEP 7 */
        incorporationDoc: null,
        gstDoc: null,
        panDoc: null,
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

    // For handling checkbox arrays (complianceCertificates)
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            complianceCertificates: checked
                ? [...prev.complianceCertificates, value]
                : prev.complianceCertificates.filter((v) => v !== value),
        }));
    };

    const handleCustomerTypeChange = (e) => {
        const { name, value } = e.target;
        // Reset vendor type when customer type changes
        setFormData({
            ...formData,
            [name]: value,
            vendorType: ''
        });
    };

    // Function to render vendor type options based on customer type
    const renderVendorTypeOptions = (customerType) => {
        switch (customerType) {
            case 'fire':
                return (
                    <>
                        <option value="fire-alarm">Fire Alarm Systems</option>
                        <option value="fire-extinguisher">Fire Extinguishers</option>
                        <option value="sprinkler">Sprinkler Systems</option>
                        <option value="hydrant">Hydrant Systems</option>
                    </>
                );
            case 'water-treatment':
                return (
                    <>
                        <option value="ro-purifier">RO Water Purifiers</option>
                        <option value="water-softener">Water Softeners</option>
                        <option value="waste-treatment">Waste Water Treatment</option>
                    </>
                );
            case 'cctv':
                return (
                    <>
                        <option value="cctv-installation">CCTV Installation</option>
                        <option value="access-control">Access Control Systems</option>
                        <option value="security-alarm">Security Alarms</option>
                    </>
                );
            case 'solar':
                return (
                    <>
                        <option value="solar-panel">Solar Panel Installation</option>
                        <option value="solar-inverter">Solar Inverter Systems</option>
                        <option value="solar-maintenance">Solar Maintenance</option>
                    </>
                );
            default:
                return null;
        }
    };

    const steps = [
        "Customer Type",
        "Basic Details",
        "Site Registration",
        "Fire Risk Mapping",
        "Compliance",
        "AMC",
        "Documents",
    ];

    return (
        <div className="p-6">
            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                    <Flame className="text-purple-600 dark:text-purple-500" />
                    Fire Compliance Customer Onboarding
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    BOOKAMC – Fire Safety & Compliance Management
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

                    {/* STEP 1 - FIXED INPUT FIELDS */}
                    {step === 1 && (
                        <div className="space-y-6">
                            {/* Customer Type Section */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Customer Type</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Industry Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="customerType"
                                        value={formData.customerType}
                                        onChange={handleCustomerTypeChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="">Select Industry Type</option>
                                        <option value="fire">Fire Systems</option>
                                        <option value="water-treatment">Water Treatment</option>
                                        <option value="cctv">CCTV & Security Systems</option>
                                        <option value="solar">Solar Systems</option>
                                    </select>
                                </div>
                            </div>

                            {/* Vendor Type Section - Auto-generated based on Customer Type */}
                            {formData.customerType && (
                                <div>
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
                                        {renderVendorTypeOptions(formData.customerType)}
                                    </select>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Vendor type options are auto-generated based on the selected industry
                                    </p>
                                </div>
                            )}

                            {/* Legal Entity Information Section */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Legal Entity Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Organisation <span className="text-red-500">*</span>
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
                                            Trade Name (if different)
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

                    {/* STEP 2 - UPDATED TO USE handleChange INSTEAD OF handleInputChange */}
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
                                            <option value="private-limited">Private Limited Company</option>
                                            <option value="public-limited">Public Limited Company</option>
                                            <option value="llp">Limited Liability Partnership (LLP)</option>
                                            <option value="partnership">Partnership Firm</option>
                                            <option value="proprietorship">Proprietorship</option>
                                            <option value="trust">Trust</option>
                                            <option value="society">Society</option>
                                            <option value="government">Government Department</option>
                                            <option value="psu">Public Sector Undertaking</option>
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
                                            MSME / Udyam Registration (Optional)
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
                                            <option value="services">Services</option>
                                            <option value="trading">Trading</option>
                                            <option value="construction">Construction</option>
                                            <option value="it">Information Technology</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="energy">Energy & Utilities</option>
                                            <option value="logistics">Logistics & Transportation</option>
                                            <option value="retail">Retail</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Nature of Business
                                        </label>
                                        <input
                                            type="text"
                                            name="natureOfBusiness"
                                            value={formData.natureOfBusiness}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Describe nature of business"
                                        />
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
                                            Number of Employees
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

                            {/* Original Compliance Section */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Compliance Certificates <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['ISO 9001', 'ISO 14001', 'OHSAS 18001', 'Fire Safety License', 'Pollution Control', 'MSME'].map((cert) => (
                                        <label key={cert} className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="complianceCertificates"
                                                value={cert}
                                                checked={formData.complianceCertificates.includes(cert)}
                                                onChange={handleCheckboxChange}
                                                className="w-4 h-4 text-purple-600 rounded"
                                            />
                                            <span className="text-gray-800 dark:text-gray-300">{cert}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rest of the steps remain the same... */}
                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Step 3 – Site Registration</h3>
                            <input
                                name="siteAddress1"
                                value={formData.siteAddress1}
                                onChange={handleChange}
                                placeholder="Address Line 1"
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <input
                                name="siteAddress2"
                                value={formData.siteAddress2}
                                onChange={handleChange}
                                placeholder="Address Line 2"
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <input
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    placeholder="District"
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <input
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    placeholder="PIN Code"
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="siteContactName"
                                    value={formData.siteContactName}
                                    onChange={handleChange}
                                    placeholder="Contact Person"
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <input
                                    name="siteContactNumber"
                                    value={formData.siteContactNumber}
                                    onChange={handleChange}
                                    placeholder="Contact Number"
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                            <input
                                name="siteDesignation"
                                value={formData.siteDesignation}
                                onChange={handleChange}
                                placeholder="Designation"
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    )}

                    {/* STEP 4 */}
                    {step === 4 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Step 4 – Fire Risk Mapping</h3>
                            <select
                                name="occupancyType"
                                value={formData.occupancyType}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">Occupancy Type</option>
                                <option value="educational">Educational</option>
                                <option value="hospital">Hospital</option>
                                <option value="hotel">Hotel</option>
                                <option value="mall">Mall</option>
                                <option value="factory">Factory</option>
                                <option value="residential">Residential High Rise</option>
                            </select>

                            <select
                                name="riskCategory"
                                value={formData.riskCategory}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">Risk Category</option>
                                <option value="R1-Low">R1 - Low</option>
                                <option value="R1-Medium">R1 - Medium</option>
                                <option value="R1-High">R1 - High</option>
                            </select>
                        </div>
                    )}

                    {/* STEP 5 */}
                    {step === 5 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Step 5 – Compliance Mapping</h3>
                            <select
                                name="fireNoc"
                                value={formData.fireNoc}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">Fire NOC Required</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                            <select
                                name="pcb"
                                value={formData.pcb}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">PCB CTO / CTE</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                            <select
                                name="localLicense"
                                value={formData.localLicense}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">Local Authority License</option>
                                <option value="required">Required</option>
                                <option value="not-required">Not Required</option>
                            </select>
                        </div>
                    )}

                    {/* STEP 6 */}
                    {step === 6 && (
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Step 6 – AMC Details</h3>
                            <select
                                name="amcType"
                                value={formData.amcType}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">AMC Type</option>
                                <option value="compliance-only">Compliance Only AMC</option>
                                <option value="preventive">Preventive AMC</option>
                                <option value="comprehensive">Comprehensive AMC</option>
                                <option value="om">O & M AMC</option>
                            </select>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    name="amcStart"
                                    value={formData.amcStart}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <input
                                    type="date"
                                    name="amcEnd"
                                    value={formData.amcEnd}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>

                            <select
                                name="billingCycle"
                                value={formData.billingCycle}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">Billing Cycle</option>
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="yearly">Yearly</option>
                            </select>

                            <select
                                name="sla"
                                value={formData.sla}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">SLA Category</option>
                                <option value="sla-1">SLA-1</option>
                                <option value="sla-2">SLA-2</option>
                                <option value="sla-3">SLA-3</option>
                                <option value="sla-4">SLA-4</option>
                            </select>

                            <select
                                name="escalation"
                                value={formData.escalation}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="">Escalation Level</option>
                                <option value="critical">Critical</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    )}

                    {/* STEP 7 */}
                    {step === 7 && (
                        <div className="space-y-6">
                            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Step 7 – Documents & Declaration</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Incorporation Certificate
                                    </label>
                                    <input
                                        type="file"
                                        name="incorporationDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        PAN Card
                                    </label>
                                    <input
                                        type="file"
                                        name="panDoc"
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <input
                                    type="checkbox"
                                    name="declaration"
                                    checked={formData.declaration}
                                    onChange={handleChange}
                                    className="mt-1 w-4 h-4 text-purple-600 rounded"
                                />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                    Organisation confirms that all submitted information is accurate and legally valid.
                                </span>
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
                            <Save size={18} /> Submit Fire Customer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}