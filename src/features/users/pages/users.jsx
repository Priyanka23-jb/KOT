import AddUserForm from "../components/AddUserForm";
import UsersTable from "../../../features/users/components/userTable";

export default function Users() {
  return (
    <div className="h-full p-6 bg-gray-50">
      {/* Page Title */}
      {/* <h1 className="text-xl font-semibold mb-6">User Management</h1> */}

      {/* Top: Add User Form */}
      <div className="bg-white rounded-xl shadow border mb-6">
        <div className="p-6">
          {/* <h2 className="text-lg font-medium mb-4">Add New User</h2> */}
          <AddUserForm />
        </div>
      </div>

      {/* Bottom: User Table */}
      <div className="bg-white rounded-xl shadow border">
        <div className="p-4">
          <h2 className="text-lg font-medium mb-4">User List</h2>
          <UsersTable />
        </div>
      </div>
    </div>
  );
}