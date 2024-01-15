function AdminUsers() {
  return (
    <>
      <h2 className="mb-3 font-semibold tracking-wider">Users Management</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              First Name
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Name
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Courses Enrolled
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Events Booked
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2 whitespace-nowrap">Kyusya</td>
            <td className="px-4 py-2 whitespace-nowrap">Denis</td>
            <td className="px-4 py-2 whitespace-nowrap">1</td>
            <td className="px-4 py-2 whitespace-nowrap">4</td>

            <button className="px-2 py-1 m-2 text-grey rounded-md bg-blush">
              Delete
            </button>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AdminUsers;
