import { BookedEvents } from "../features/Events/BookedEvents";
import { EventsContainer } from "../features/Events/EventsContainer";
import { AddEvent } from "../features/Events/AddEvent";

export default function Events() {
  return (
    <div className=" px-4 py-2 sm:w-2/3 mx-auto flex gap-4">
      {/* <div className=" px-4 py-2  mx-auto grid grid-cols-8 gap-3"> */}
      <div className="col-span-5">
        <AddEvent />
        <div>
          <EventsContainer />
          <EventsContainer />
          <EventsContainer />
        </div>
      </div>
      {/* <div className="sm:w-full  h-screen  my-2  flex flex-col items-center bg-white w-full overflow-y-scroll scrollbar px-2"> */}
      <div className="w-full">
        <h1 className="font-bold text-lg tracking-widest">Upcoming Events</h1>
        <BookedEvents />
        <BookedEvents />
        <BookedEvents />
        <BookedEvents />
        <BookedEvents />
      </div>
    </div>
  );
}
