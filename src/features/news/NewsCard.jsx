/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function NewsCard({ news }) {
  return (
    <div className=" flex flex-col w-72 sm:w-60 rounded-md">
      <img src={news.image} alt={news.title} className="w-full" />
      <div className="bg-white px-2 rounded-b-md py-2 border border-black">
        <Link className="font-bold text-lg tracking-wide">{news.title}</Link>
        <p className="text-black border-l pl-1 border-blue">Read more</p>
      </div>
    </div>
  );
}
