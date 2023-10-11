import { BookedEvents } from "../features/Events/BookedEvents";
import { EventsContainer } from "../features/Events/EventsContainer";
import { AddEvent } from "../features/Events/AddEvent";

export default function Events() {
  return (
    <div className=" px-4 py-2 sm:w-2/3 mx-auto flex gap-4">
      <div>
        <AddEvent />
        <div>
          <EventsContainer />
          <EventsContainer />
          <EventsContainer />
        </div>
      </div>
      <div className="sm:w-1/2  h-screen  my-2  flex flex-col items-center bg-white w-full overflow-y-scroll scrollbar px-2">
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
