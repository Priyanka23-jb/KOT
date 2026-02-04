import AddAuditorForm from "../components/AddAuditorForm";
import AuditorTable from "../components/AuditorTable";

export default function Auditor() {
  return (
    <div className="h-full p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        Auditor Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT – FORM (40%) */}
        <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <AddAuditorForm />
        </div>

        {/* RIGHT – TABLE (60%) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-4">
          <AuditorTable />
        </div>
      </div>
    </div>
  );
}
