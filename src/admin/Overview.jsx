import { Book, Person, Ticket } from "react-bootstrap-icons";
import Users from "./Users";

export default function Overview() {
  return (
    <div className="space-y-6">
      <ul className="flex gap-8 relative">
        <div className="px-3 py-2 bg-black text-white rounded-lg w-24 h-24 flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <Person />
            <h2>Users</h2>
          </div>
          <p className="left">30</p>
        </div>

        <div className="px-3 py-2 bg-black text-white rounded-lg w-24 h-24 flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <span className="text-md">
              <Book />
            </span>
            <h2>Courses</h2>
          </div>
          <p>2</p>
        </div>

        <div className="px-3 py-2 bg-black text-white rounded-lg w-24 h-24 flex flex-col justify-around">
          <div className="flex items-center gap-2">
            <Ticket />
            <h2>Events</h2>
          </div>
          <p>30</p>
        </div>
      </ul>

      <div>
        <Users />
      </div>
    </div>
  );
}
