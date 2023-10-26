import { useState } from "react";
import { Image, Pen, Play } from "react-bootstrap-icons";
import { EventsContainer } from "../Events/EventsContainer";

export default function Resources() {
  return (
    <div className="w-full grid grid-cols-12">
      {/* SEARCH FOR RESOURCE HERE */}
      <div className="col-start-3 col-end-11 mt-2">
        <div>
          <div className="w-full flex flex-col gap-2 border border-white px-2 py-1 rounded-md">
            <input
              type="text"
              placeholder="Share about the environment"
              className="w-full rounded-full px-2 py-1 focus:outline-none placeholder:text-grey text-black tracking-wide"
            />
            <ul className="flex items-center justify-between">
              <li className="flex items-center gap-2">
                <Play />
                <span>Video</span>
              </li>
              <li className="flex items-center gap-2">
                <Pen />
                <span>Post</span>
              </li>
              <li className="flex items-center gap-2">
                <Image />
                <span>Images</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RESOURCE DISPLAY GOES HERE */}
      <div className="col-start-4 col-end-11 my-2">
        <div>
          <h4 className="font-bold text-lg">Latest Resources</h4>

          <div className="flex items-center gap-6 flex-wrap mx-auto">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourceCard() {
  return (
    <div className="w-52 text-black bg-white rounded-md">
      <img src="./img-10.jpeg" alt="" />
      <div className="my-3  px-2">
        <div className="flex items-center gap-2">
          {/* TITLE */}
          <h3>The marine world</h3>
          {/* TYPE: PDF/VIDEO */}
          <p className="text-xs text-blue tracking-wide bg-grey rounded-full px-1 py-2 ">
            PDF file
          </p>
        </div>
        <p className="text-sm">
          By: <span>John Doe</span>
        </p>
        <div className="flex items-center justify-between text-sm gap-2 my-3">
          <button className="py-2 px-3 rounded-md bg-blue text-white">
            Download
          </button>
          <p>2mb</p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={`grid grid-cols-8 justify-center mx-auto`}>
      <div
        className={`px-3 py-2 cursor-pointer + ${
          view ? "col-span-6 " : "col-span-4"
        }`}
        onClick={handleSetView}
      >
        <div>
          <div className="w-full flex flex-col gap-2 border border-white px-2 py-1 rounded-md">
            <input
              type="text"
              placeholder="Share about the environment"
              className="w-full rounded-full px-2 py-1 focus:outline-none placeholder:text-grey text-black tracking-wide"
            />
            <ul className="flex items-center justify-between">
              <li className="flex items-center gap-2">
                <Play />
                <span>Video</span>
              </li>
              <li className="flex items-center gap-2">
                <Pen />
                <span>Post</span>
              </li>
              <li className="flex items-center gap-2">
                <Image />
                <span>Images</span>
              </li>
            </ul>
          </div>

          <div>
            <EventsContainer />
            <EventsContainer />
            <EventsContainer />
            <EventsContainer />
          </div>
        </div>
      </div>
      <div className="px-3 py-2">View</div>
    </div> */
}
