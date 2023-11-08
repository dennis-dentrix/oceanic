/* eslint-disable react/prop-types */

import { PostForm } from "../ui/PostForm";

import { TopStories } from "../features/news/TopStories";
import { NewsContainer } from "../features/news/NewsContainer";
import Postnews from "./../features/news/Postnews";

export default function News() {
  return (
    <div>
      <Postnews />

      <TopStories />
      <OtherStories />
    </div>
  );
}

function OtherStories() {
  return (
    <div className="my- px-8 py-3  rounded-md">
      <h1 className="text-black text-xl py-4 font-bold">Other stories</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
      </div>
    </div>
  );
}
