import ProfitLossCards from "../components/ProfitLossCards";
import ProfitLossTable from "../components/ProfitLossTable";

export default function ProfitLoss() {
  return (
    <div className="p-6 bg-gray-50 min-h-full space-y-6">

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-800">
        Profit & Loss Report
      </h1>

      {/* Summary Cards */}
      <ProfitLossCards />

      {/* Table */}
      <ProfitLossTable />

    </div>
  );
}
