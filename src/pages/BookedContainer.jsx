import { useSelector } from "react-redux";
import { BookedEvents } from "../features/Events/BookedEvents";
import { getCart } from "../features/Events/EventSlice";

export function BookedContainer() {
  const reservedData = useSelector(getCart);

  return (
    <div className="w-full col-start-2 col-end-3">
      <h1 className="font-bold text-lg tracking-widest">Reserved Events</h1>
      {reservedData.map((reserve) => (
        <BookedEvents key={reserve.itemId} reserve={reserve} />
      ))}
    </div>
  );
}
