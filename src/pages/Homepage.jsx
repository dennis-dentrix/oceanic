import EventsSection from "../features/homepage/EventsSection";
import { Landing } from "../features/homepage/Landing";
import NewsSection from "../features/homepage/NewsSection";

export default function Homepage() {
  return (
    <div className="grid grid-rows-[30rem_25rem_auto] gap-9 h-full">
      <Landing />
      {/* NEWS HIGHLIGHTS */}
      <NewsSection />
      {/* Events hightlights */}
      <EventsSection />
    </div>
  );
}
