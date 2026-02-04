import AddVendorForm from "../components/AddVendorForm";
import VendorTable from "../components/VendorTable";

export default function Vendor() {
  return (
    <div className="h-full p-6 bg-gray-50 dark:bg-gray-900">
      {/* Page Title */}
      <h1 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        Vendor Management
      </h1>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT — Add Vendor (≈40%) */}
        <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <AddVendorForm />
        </div>

        {/* RIGHT — Vendor Table (≈60%) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-4">
          <VendorTable />
        </div>
      </div>
    </div>
  );
}
