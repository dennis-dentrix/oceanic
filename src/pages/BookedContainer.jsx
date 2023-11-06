import { BookedEvents } from "../features/Events/BookedEvents";

export function BookedContainer() {
  return (
    <div className="w-full col-start-2 col-end-3">
      <h1 className="font-bold text-lg tracking-widest">Reserved Events</h1>
      <BookedEvents />
      <BookedEvents />
      <BookedEvents />
      <BookedEvents />
      <BookedEvents />
    </div>
  );
}
