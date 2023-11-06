/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../services/news";
import { PostForm } from "../features/Events/PostForm";
import { EventsContainer } from "../features/Events/EventsContainer";

export default function News() {
  return (
    <div>
      <PostForm placeholder="Create story" />
      <TopStories />
      <OtherStories />
      <Weather />
    </div>
  );
}

function TopStories() {
  const { data: news, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });
  if (isLoading) return <p>Loader</p>;
  return (
    <div className="bg-white px-8 py-6">
      <h1 className="font-bold text-xl pb-4">Top stories</h1>
      <div className="grid sm:flex sm:flex-wrap place-items-center gap-8">
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export function NewsCard({ news }) {
  return (
    <div className=" flex flex-col w-64 sm:w-60 rounded-md">
      <img src={news.image} alt="" />
      <div className="bg-white px-2 rounded-b-md py-2 border border-black">
        <Link className="font-bold text-lg tracking-wide">{news.title}</Link>
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
        <EventsContainer />
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
