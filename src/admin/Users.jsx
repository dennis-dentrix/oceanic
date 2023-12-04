/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/userApi";
import Spinner from "../ui/Spin";
import toast from "react-hot-toast";

export default function Users({ users, isFetching, error }) {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success("User deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  if (isFetching) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
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
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td className="px-4 py-2 whitespace-nowrap">{user.firstName}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.lastName}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                {user.numcourses !== null ? user.numcourses : 0}
              </td>
              <td className="px-4 py-2 whitespace-nowrap">
                {user.eventsBooked !== null ? user.eventsBooked : 0}
              </td>

              <button
                className="px-2 py-1 m-2 text-grey rounded-md bg-blush"
                onClick={() => mutate(user.id)}
                disabled={isDeleting}
              >
                Delete
              </button>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
