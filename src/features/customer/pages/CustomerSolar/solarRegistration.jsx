import React, { useState, useEffect } from "react";
import {
    Sun,
    SolarPanel,
    Battery,
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
    FileCheck,
    Zap,
    Flame,
    Droplets,
    Camera,
    Cloud,
    Home
} from "lucide-react";

export default function CreateSolarCustomer() {
    const [step, setStep] = useState(1);
    const [selectedIndustries, setSelectedIndustries] = useState({
        solar: false,
        fire: false,
        "water-treatment": false,
        cctv: false
    });

    const [formData, setFormData] = useState({
        /* STEP 1 */
        customerType: "solar",
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

        /* STEP 4 - Solar Installation Details */
        installationType: "",
        installedCapacity: "",
        capacityUnit: "kW",
        solarSystemType: "",
        panelType: "",
        inverterType: "",
        batteryBackup: "",
        gridConnection: "",
        
        /* STEP 5 - Fire Risk Mapping */
        occupancyType: "",
        riskCategory: "",

        /* STEP 6 - CCTV Specific Details */
        cctvSystemType: "",
        numberOfCameras: "",
        cameraTypes: [],
        recordingSystem: "",
        storageCapacity: "",
        monitoringType: "",
        integrationSystems: [],
        
        /* STEP 7 - Water Treatment Compliance Mapping */
        industryCategory: "",
        plantType: "",
        installedCapacityWT: "", // Changed from installedCapacity to avoid conflict
        capacityUnitWT: "KLD",
        technologyUsed: "",
        commissioningDate: "",
        plantOEM: "",
        operationResponsibility: "",
        
        /* STEP 8 - Compliance Classification */
        pcbCTO: "",
        pcbCTE: "",
        fireNOC: "",
        localLicense: "",

        /* STEP 9 - AMC Details */
        amcType: "",
        amcStartDate: "",
        amcEndDate: "",
        slaCategory: "",
        billingCycle: "",
        escalationMatrix: "",

        /* STEP 10 - Documents */
        incorporationDoc: null,
        gstDoc: null,
        panDoc: null,
        boardResolutionDoc: null,
        complianceAuditDoc: null,
        declaration: false,
    });

    // Calculate total steps based on selected industries
    const calculateTotalSteps = () => {
        let baseSteps = 3; // Always include Steps 1, 2, 3 (Customer Type, Basic Details, Site Registration)
        let industrySpecificSteps = 0;
        
        if (selectedIndustries.solar) industrySpecificSteps++;
        if (selectedIndustries.fire) industrySpecificSteps++;
        if (selectedIndustries["water-treatment"]) industrySpecificSteps++;
        if (selectedIndustries.cctv) industrySpecificSteps++;
        
        // Add compliance steps (after industry-specific steps)
        if (industrySpecificSteps > 0) {
            baseSteps += industrySpecificSteps;
            baseSteps += 2; // Add AMC Details and Documents steps
        }
        
        return baseSteps;
    };

    // Get step label based on current step
    const getStepLabel = (stepNumber) => {
        if (stepNumber === 1) return "Customer Type";
        if (stepNumber === 2) return "Basic Details";
        if (stepNumber === 3) return "Site Registration";
        
        let currentStep = 3;
        let stepLabels = [];
        
        // Add industry-specific step labels
        if (selectedIndustries.solar) {
            currentStep++;
            if (stepNumber === currentStep) return "Solar Installation";
        }
        
        if (selectedIndustries.fire) {
            currentStep++;
            if (stepNumber === currentStep) return "Fire Risk Mapping";
        }
        
        if (selectedIndustries.cctv) {
            currentStep++;
            if (stepNumber === currentStep) return "CCTV Configuration";
        }
        
        if (selectedIndustries["water-treatment"]) {
            currentStep++;
            if (stepNumber === currentStep) return "Water Treatment Details";
        }
        
        // Add compliance steps
        currentStep++;
        if (stepNumber === currentStep) return "Compliance Classification";
        
        currentStep++;
        if (stepNumber === currentStep) return "AMC Details";
        
        currentStep++;
        if (stepNumber === currentStep) return "Documents";
        
        return `Step ${stepNumber}`;
    };

    // Generate steps array based on selected industries
    const getSteps = () => {
        const steps = ["Customer Type", "Basic Details", "Site Registration"];
        
        if (selectedIndustries.solar) steps.push("Solar Installation");
        if (selectedIndustries.fire) steps.push("Fire Risk Mapping");
        if (selectedIndustries.cctv) steps.push("CCTV Configuration");
        if (selectedIndustries["water-treatment"]) steps.push("Water Treatment Details");
        
        steps.push("Compliance Classification", "AMC Details", "Documents");
        
        return steps;
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            if (name === "customerType") {
                // Handle industry type checkboxes
                setSelectedIndustries(prev => ({
                    ...prev,
                    [value]: !prev[value]
                }));
            } else {
                setFormData({ ...formData, [name]: checked });
            }
        } else if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleCheckboxArrayChange = (field, value, isChecked) => {
        setFormData(prev => {
            const currentArray = prev[field] || [];
            if (isChecked) {
                return { ...prev, [field]: [...currentArray, value] };
            } else {
                return { ...prev, [field]: currentArray.filter(item => item !== value) };
            }
        });
    };

    // Camera type options for CCTV
    const cameraTypeOptions = [
        "Dome Camera",
        "Bullet Camera",
        "PTZ Camera",
        "Thermal Camera",
        "ANPR Camera",
        "Fisheye Camera",
        "Hidden Camera"
    ];

    // Integration options for CCTV
    const integrationOptions = [
        "Access Control System",
        "Fire Alarm System",
        "Building Management System",
        "Intrusion Detection",
        "Video Analytics",
        "Mobile App Integration"
    ];

    // Get current step's actual number based on selected industries
    const getActualStepNumber = (displayStep) => {
        if (displayStep === 1) return 1;
        if (displayStep === 2) return 2;
        if (displayStep === 3) return 3;
        
        let actualStep = 3;
        let stepOffset = 3; // We're already past steps 1,2,3
        
        if (selectedIndustries.solar) {
            actualStep++;
            if (displayStep === 4) return actualStep;
        }
        
        if (selectedIndustries.fire) {
            actualStep++;
            if (displayStep === 4 + stepOffset) return actualStep;
            stepOffset++;
        }
        
        if (selectedIndustries.cctv) {
            actualStep++;
            if (displayStep === 4 + stepOffset) return actualStep;
            stepOffset++;
        }
        
        if (selectedIndustries["water-treatment"]) {
            actualStep++;
            if (displayStep === 4 + stepOffset) return actualStep;
            stepOffset++;
        }
        
        // Compliance steps
        actualStep++;
        if (displayStep === 4 + stepOffset) return actualStep;
        
        actualStep++;
        if (displayStep === 5 + stepOffset) return actualStep;
        
        actualStep++;
        if (displayStep === 6 + stepOffset) return actualStep;
        
        return displayStep;
    };

    // Get the step content based on current step and selected industries
    const getStepContent = () => {
        const steps = getSteps();
        const stepIndex = step - 1;
        const currentStepLabel = steps[stepIndex];
        
        switch(currentStepLabel) {
            case "Customer Type":
                return renderStep1();
            case "Basic Details":
                return renderStep2();
            case "Site Registration":
                return renderStep3();
            case "Solar Installation":
                return renderSolarInstallation();
            case "Fire Risk Mapping":
                return renderFireRiskMapping();
            case "CCTV Configuration":
                return renderCCTVConfiguration();
            case "Water Treatment Details":
                return renderWaterTreatmentDetails();
            case "Compliance Classification":
                return renderComplianceClassification();
            case "AMC Details":
                return renderAMCDetails();
            case "Documents":
                return renderDocuments();
            default:
                return null;
        }
    };

    const renderStep1 = () => (
        <div className="space-y-6">
            {/* Customer Type Section */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <SolarPanel className="w-5 h-5 text-purple-500" />
                    Customer Type
                </h3>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Industry Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="solar-checkbox"
                                name="customerType"
                                value="solar"
                                checked={selectedIndustries.solar}
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                            />
                            <label
                                htmlFor="solar-checkbox"
                                className="ml-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 cursor-pointer"
                            >
                                <SolarPanel className="w-4 h-4" />
                                Solar Systems
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="fire-checkbox"
                                name="customerType"
                                value="fire"
                                checked={selectedIndustries.fire}
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                            />
                            <label
                                htmlFor="fire-checkbox"
                                className="ml-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 cursor-pointer"
                            >
                                <Flame className="w-4 h-4" />
                                Fire Systems
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="water-checkbox"
                                name="customerType"
                                value="water-treatment"
                                checked={selectedIndustries["water-treatment"]}
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                            />
                            <label
                                htmlFor="water-checkbox"
                                className="ml-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 cursor-pointer"
                            >
                                <Droplets className="w-4 h-4" />
                                Water Treatment
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="cctv-checkbox"
                                name="customerType"
                                value="cctv"
                                checked={selectedIndustries.cctv}
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                            />
                            <label
                                htmlFor="cctv-checkbox"
                                className="ml-3 text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2 cursor-pointer"
                            >
                                <Camera className="w-4 h-4" />
                                CCTV & Security Systems
                            </label>
                        </div>
                    </div>
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
                        <option value="solar-panel">Solar Panel Installation</option>
                        <option value="solar-inverter">Solar Inverter Systems</option>
                        <option value="solar-maintenance">Solar Maintenance</option>
                        <option value="rooftop-solar">Rooftop Solar Systems</option>
                        <option value="ground-solar">Ground-mounted Solar</option>
                        <option value="solar-hybrid">Solar Hybrid Systems</option>
                    </select>
                </div>
            </div>

            {/* Legal Entity Information Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-purple-500" />
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
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-500" />
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
    );

    const renderStep2 = () => (
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
                            <option value="agriculture">Agriculture</option>
                            <option value="commercial">Commercial</option>
                            <option value="retail">Retail</option>
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
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-500" />
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
    );

    const renderStep3 = () => (
        <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-500" />
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
                            <option value="rajasthan">Rajasthan</option>
                            <option value="delhi">Delhi</option>
                            <option value="uttar-pradesh">Uttar Pradesh</option>
                        </select>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            Solar policies vary by state
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
    );

    const renderSolarInstallation = () => (
        <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <SolarPanel className="w-5 h-5 text-purple-500" />
                Solar Installation Details
            </h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Type of Installation <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="installationType"
                        value={formData.installationType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                        <option value="">Select Installation Type</option>
                        <option value="roof">Roof Mounted</option>
                        <option value="ground">Ground Mounted</option>
                        <option value="floating">Floating Solar</option>
                        <option value="carport">Solar Carport</option>
                        <option value="facade">Building Integrated (Facade)</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Installation Capacity <span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                            <input
                                type="number"
                                name="installedCapacity"
                                value={formData.installedCapacity}
                                onChange={handleChange}
                                className="flex-1 px-4 py-2.5 rounded-l border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="Capacity"
                                min="0"
                                step="0.1"
                            />
                            <select
                                name="capacityUnit"
                                value={formData.capacityUnit}
                                onChange={handleChange}
                                className="px-4 py-2.5 rounded-r border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                                <option value="kW">kW</option>
                                <option value="MW">MW</option>
                                <option value="kVA">kVA</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Solar System Type
                        </label>
                        <select
                            name="solarSystemType"
                            value={formData.solarSystemType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="">Select System Type</option>
                            <option value="on-grid">Grid Connected</option>
                            <option value="off-grid">Off Grid</option>
                            <option value="hybrid">Hybrid System</option>
                            <option value="grid-tied">Grid Tied with Net Metering</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Solar Panel Type
                        </label>
                        <select
                            name="panelType"
                            value={formData.panelType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="">Select Panel Type</option>
                            <option value="mono">Monocrystalline</option>
                            <option value="poly">Polycrystalline</option>
                            <option value="thin-film">Thin Film</option>
                            <option value="bifacial">Bifacial</option>
                            <option value="half-cut">Half-cut Cells</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Inverter Type
                        </label>
                        <select
                            name="inverterType"
                            value={formData.inverterType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="">Select Inverter Type</option>
                            <option value="string">String Inverter</option>
                            <option value="central">Central Inverter</option>
                            <option value="micro">Micro Inverter</option>
                            <option value="hybrid-inverter">Hybrid Inverter</option>
                            <option value="off-grid-inverter">Off-grid Inverter</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Battery Backup
                        </label>
                        <select
                            name="batteryBackup"
                            value={formData.batteryBackup}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="">Select Battery Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="planned">Planned for Future</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Grid Connection Type
                        </label>
                        <select
                            name="gridConnection"
                            value={formData.gridConnection}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="">Select Grid Connection</option>
                            <option value="grid-connected">Grid Connected</option>
                            <option value="off-grid">Off Grid</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderFireRiskMapping = () => (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Flame className="w-5 h-5 text-purple-500" />
                Fire Risk Mapping
            </h3>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Occupancy Type
                </label>
                <select
                    name="occupancyType"
                    value={formData.occupancyType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                    <option value="">Select Occupancy Type</option>
                    <option value="educational">Educational</option>
                    <option value="hospital">Hospital</option>
                    <option value="hotel">Hotel</option>
                    <option value="mall">Mall</option>
                    <option value="factory">Factory</option>
                    <option value="residential">Residential High Rise</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Risk Category
                </label>
                <select
                    name="riskCategory"
                    value={formData.riskCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                    <option value="">Select Risk Category</option>
                    <option value="R1-Low">R1 - Low</option>
                    <option value="R1-Medium">R1 - Medium</option>
                    <option value="R1-High">R1 - High</option>
                </select>
            </div>
        </div>
    );

    const renderCCTVConfiguration = () => (
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
    );

    const renderWaterTreatmentDetails = () => (
        <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-purple-500" />
                Water Treatment Plant Details
            </h3>
            
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
                                name="installedCapacityWT"
                                value={formData.installedCapacityWT}
                                onChange={handleChange}
                                className="flex-1 px-4 py-2.5 rounded-l border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                placeholder="Capacity"
                            />
                            <select
                                name="capacityUnitWT"
                                value={formData.capacityUnitWT}
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
    );

    const renderComplianceClassification = () => (
        <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-purple-500" />
                Compliance Classification
            </h3>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Pollution Control Board - CTO
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
                            <option value="not-applicable">Not Applicable</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Pollution Control Board - CTE
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
                            <option value="not-applicable">Not Applicable</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Fire NOC Required
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
                        Local Authority License related to AMC
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
    );

    const renderAMCDetails = () => (
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
                        Escalation Matrix Selection
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
    );

    const renderDocuments = () => (
        <div className="space-y-6">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
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
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-purple-500" />
                    Declaration & Consent
                </h4>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg">
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
    );

    const steps = getSteps();
    const totalSteps = steps.length;

    return (
        <div className="p-6">
            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
                    <Sun className="text-purple-500" />
                     Customer Registration
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    BOOKAMC – Multi-Industry Systems Management
                </p>

                {/* STEPPER */}
                <div className="mt-6">
                    <div className="flex justify-between mb-2 overflow-x-auto pb-2">
                        {steps.map((label, index) => (
                            <div key={index} className="flex flex-col items-center min-w-[80px]">
                                <div
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold
                                        ${step >= index + 1
                                            ? "bg-gradient-to-r from-purple-500 to-purple-500 text-white"
                                            : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span className="text-xs mt-1 text-gray-500 text-center">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-purple-500 rounded transition-all"
                            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* FORM CARD */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm">
                <div className="p-6 space-y-6">
                    {getStepContent()}
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
                    {step < totalSteps ? (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-500 text-white rounded hover:from-purple-600 hover:to-purple-600 transition"
                        >
                            Next <ChevronRight size={18} />
                        </button>
                    ) : (
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            <Save size={18} /> Submit Customer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}