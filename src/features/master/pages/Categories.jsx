import AddCategoryForm from "../components2/AddCategoryForm";
import CategoriesTable from "../components2/CategoriesTable";

export default function Categories() {
  return (
    <div className="p-6 bg-gray-50 min-h-full space-y-6">

      <h1 className="text-xl font-semibold text-gray-800">
        Category Management
      </h1>

      {/* Add Category */}
      <AddCategoryForm />

      {/* Category Table */}
      <CategoriesTable />

    </div>
  );
}
