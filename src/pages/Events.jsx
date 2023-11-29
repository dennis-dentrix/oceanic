import { useState } from "react";
import EventCard from "../features/Events/EventCard";
import EventsDrawer from "../admin/EventsDrawer";
import { BookedContainer } from "./BookedContainer";

import { Search } from "react-bootstrap-icons";

export default function Events() {
  const [showBooked, setBooked] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[auto_1fr] gap-6">
      <div className="col-start-1 col-end-2">
        {/* <FormDialog /> */}
        <form className="flex items-center border rounded-md px-3">
          <input
            type="text"
            placeholder="Search for event"
            className="focus:outline-none  px-1 py-2 w-full text-black text-lg"
          />
          <Search />
        </form>
        <div className=" py-3">
          <div className="flex items-center justify-between">
            <h1 className="py-3">Upcoming events</h1>
            <div
              className="block md:hidden"
              onClick={() => setBooked(!showBooked)}
            >
              <EventsDrawer />
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-between md:justify-normal ">
            <EventCard title="Tree Planting Day" />
            <EventCard title="Beach Cleanup" d />
            <EventCard title="Environmental Film Screenings" />
            <EventCard title="Earth Day Celebrations" />
            <EventCard title="Clean Energy Expos" />
          </div>
        </div>
      </div>
      {/* <div className="sm:w-full  h-screen  my-2  flex flex-col items-center bg-white w-full overflow-y-scroll scrollbar px-2"> */}
      <div className="hidden md:block col-start-2 col-end-3 w-60">
        <BookedContainer />
      </div>
    </div>
  );
}
