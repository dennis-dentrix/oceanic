import { Link } from "react-router-dom";
import { news } from "../../data/news";
import EventCard from "../features/Events/EventCard";

export default function News() {
  return (
    <div className="">
      <TopStories />
      <OtherStories />
      <Weather />
    </div>
  );
}

function TopStories() {
  return (
    <div className="bg-white px-8 py-6">
      <h1 className="font-bold text-xl pb-4">Top stories</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

export function NewsCard() {
  return (
    <div className="flex flex-col w-60 rounded-md">
      <img src="./img-1.jpeg" alt="" />
      <div className="bg-white px-2 rounded-b-md py-2 border border-black">
        <Link className="font-bold text-lg tracking-wide">
          Humans are now exploring under water minerals.
        </Link>
        <p className="text-black border-l pl-1 border-blue">DW news</p>
      </div>
    </div>
  );
}

function OtherStories() {
  return (
    <div className="my-6 bg-grey px-8 py-6  rounded-md">
      <h1 className="text-black font-bold">Other stories</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

function Weather() {
  return (
    <div className="px-8 py-6  rounded-t-md text-white border-b-2 border-white bg-black">
      <div>
        <h1>Nairobi</h1>
        <div className="flex flex-wrap gap-8 px-3 py-2">
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
          <span className="flex items-center gap-2">
            <span>🌦️</span>
            <div>
              <p>Monday</p>
              34<sup>o</sup>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
