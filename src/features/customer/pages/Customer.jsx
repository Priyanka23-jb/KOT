import { useState } from "react";
import CustomerForm from "../components/AddCustomerForm";
import CustomerTable from "../components/CustomerTable";

export default function Customer() {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Samir Sahoo", email: "", phone: "7873885040", type: "VIV", status: "Active" },
    { id: 2, name: "Sabadrinis", email: "", phone: "9665748536", type: "Regular", status: "Active" },
  ]);

  const handleAddCustomer = (data) => {
    setCustomers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        status: "Active",
        ...data,
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Restaurant Dashboard</h1>
        <p className="text-gray-600">Manage your restaurant operations</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Page Title */}
        <h2 className="text-xl font-semibold text-gray-900">
          Customer Management
        </h2>

        {/* Add Customer Section */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Add Customer
          </h3>
          
          <CustomerForm onSubmit={handleAddCustomer} />
        </div>

        {/* Customer Table Section */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Customer
          </h3>
          
          <CustomerTable data={customers} />
        </div>

        {/* Footer with Date and Compliance Manager */}
        <div className="flex justify-between items-center pt-6 border-t">
          <div className="text-gray-700 font-medium">
            Thursday, Feb 5<br />
            22:11 AM
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">Compliance Manager</div>
            <div className="text-gray-600">Advisor</div>
          </div>
        </div>
      </div>
    </div>
  );
}