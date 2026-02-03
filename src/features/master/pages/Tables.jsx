import AddTableForm from "../components1/AddTableForm";
import TablesList from "../components1/TablesList";

export default function RestaurantTables() {
  return (
    <div className="p-6 bg-gray-50 min-h-full space-y-6">

      <h1 className="text-xl font-semibold text-gray-800">
        Restaurant Tables
      </h1>

      {/* Add Table Form */}
      <AddTableForm />

      {/* Tables List */}
      <TablesList />

    </div>
  );
}
