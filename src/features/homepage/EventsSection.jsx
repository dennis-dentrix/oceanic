import { ArrowRight } from "react-bootstrap-icons";
import EventCard from "./../Events/EventCard";
import { useNavigate } from "react-router-dom";

export default function EventsSection() {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-lg tracking-wide font-bold">
          Upcoming events
        </h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/events")}
        >
          <p>view more</p>
          <ArrowRight />
        </div>
      </div>
      <div className="flex gap-6 justify-center flex-wrap py-4  ">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
