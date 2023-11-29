import { ArrowRight } from "react-bootstrap-icons";
import EventCard from "./../Events/EventCard";
import { useNavigate } from "react-router-dom";

export default function EventsSection() {
  const navigate = useNavigate();
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
      <div className=" flex gap-4 sm:gap-6 flex-wrap justify-between md:justify-center py-8 ">
        <EventCard
          title="Tree Planting Day"
          description="community tree-planting event to increase green cover and combat deforestation."
        />
        <EventCard
          title="Beach Cleanup"
          description=" clean up beaches and coastal areas to protect marine life and ecosystems."
        />
        <EventCard title="Environmental Film Screenings" />
        <EventCard title="Earth Day Celebrations" />
        <EventCard title="Clean Energy Expos" />
      </div>
    </div>
  );
}
