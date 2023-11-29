import { Book, Person, Ticket } from "react-bootstrap-icons";
import Users from "./Users";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userApi";
import Spinner from "../ui/Spin";
import { getEvents } from "../services/apiEvents";

export default function Overview() {
  // FETCHING USER DATA
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  // FETCHING EVENTS DATA
  const { data: events, error: eventsError } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;
  if (eventsError) return <div>Error</div>;

  return (
    <div className="space-y-6">
      <ul className="flex gap-8 relative">
        {users.map((user) => {
          let usr = [];
          usr.push(user);
          return (
            <div
              key={user.id}
              className="px-3 py-2 bg-black text-white rounded-lg w-[8rem] h-24 flex flex-col justify-around"
            >
              <div className="flex items-center gap-2">
                <Person />
                <h2>Users</h2>
              </div>
              <p className="left">{usr.length}</p>
            </div>
          );
        })}

        <div className="px-3 py-2 bg-black text-white rounded-lg w-[8rem] h-24 flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <span className="text-md">
              <Book />
            </span>
            <h2>Courses</h2>
          </div>
          <p>2</p>
        </div>

        {events.map((event) => {
          const ev = [];
          ev.push(event);
          return (
            <div
              key={event.id}
              className="px-3 py-2 bg-black text-white rounded-lg w-[8rem] h-24 flex flex-col justify-around"
            >
              <div className="flex items-center gap-2">
                <Ticket />
                <h2>Events</h2>
              </div>
              <p>{ev.length}</p>
            </div>
          );
        })}
      </ul>

      <div>
        <Users users={users} isFetching={isLoading} error={error} />
      </div>
    </div>
  );
}
