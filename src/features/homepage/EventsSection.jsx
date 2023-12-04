import { ArrowRight } from "react-bootstrap-icons";
import EventCard from "./../Events/EventCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../services/apiEvents";
import Spinner from "../../ui/Spin";

export default function EventsSection() {
  const navigate = useNavigate();

  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
  if (isLoading) return <Spinner />;
  if (error) return <div>Error</div>;
  return (
    <div className="px-2 py-4 ">
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
      <div className="flex gap-3">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>

      {/* {events.map((event) => {
        return (
          <div
            key={event.id}
            className=" flex gap-4 sm:gap-6 flex-wrap justify-between md:justify-center py-8 "
          >
            <EventCard title={event.title} description={event.description} />
          </div>
        );
      })} */}
    </div>
  );
}
