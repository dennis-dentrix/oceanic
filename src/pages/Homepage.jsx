import EventsSection from "../features/homepage/EventsSection";
import { Landing } from "../features/homepage/Landing";
import NewsSection from "../features/homepage/NewsSection";

export default function Homepage() {
  return (
    // <div className="flex flex-col  sm:grid sm:grid-rows-[1fr_auto_auto] gap-9">
    <div>
      <Landing />
      {/* NEWS HIGHLIGHTS */}
      <NewsSection />
      {/* Events hightlights */}
      <EventsSection />
    </div>
  );
}
