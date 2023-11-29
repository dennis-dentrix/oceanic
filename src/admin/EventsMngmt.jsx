import EventsDrawer from "./EventsDrawer";
import { FormDialog } from "./FormDialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEvent, getEvents } from "../services/apiEvents";
import Spinner from "../ui/Spin";
import toast from "react-hot-toast";

export default function EventsMngmt() {
  return (
    <div>
      <h1>Events managements</h1>
      <FormDialog />
      <div>
        <EventsDrawer />
      </div>
      <EventsTable />
    </div>
  );
}

function EventsTable() {
  const {
    data: events,
    isLoading: isFetching,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      toast.success("Event Deleted");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (isFetching) return <Spinner />;
  if (error) <div>error</div>;
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Event Name
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Organizer
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Start Date
          </th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            End Date
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {events.map((event) => (
          <tr key={event.id}>
            <td className="px-4 py-2 whitespace-nowrap">{event.title}</td>
            <td className="px-4 py-2 whitespace-nowrap">{event.organizer}</td>
            <td className="px-4 py-2 whitespace-nowrap">{event.location}</td>
            <td className="px-4 py-2 whitespace-nowrap">{event.startDate}</td>
            <td className="px-4 py-2 whitespace-nowrap">{event.endDate}</td>

            <td>
              <button
                className="px-2 py-1 m-2 text-grey rounded-md bg-blush"
                onClick={() => mutate(event.id)}
                disabled={isDeleting}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
