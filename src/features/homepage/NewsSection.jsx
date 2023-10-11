import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function NewsSection() {
  const navigate = useNavigate();
  return (
    <div className="px-8 py-4 h-full">
      <div className=" pb-4 flex items-center justify-between">
        <h1 className="text-black text-lg tracking-wide font-bold">
          Top stories
        </h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/news")}
        >
          <p className="text-black text-lg">Read all</p>
          <ArrowRight />
        </div>
      </div>
      <div className="sm:grid flex flex-col grid-rows-2 grid-cols-[50%_23.8%_23.8%] gap-5 h-full">
        <div className=" row-start-1 row-end-3 relative">
          <NewsCard />
        </div>
        <div className=" col-start-2 col-end-3 relative">
          <NewsCard />
        </div>
        <div className="col-start-3 col-end-4 relative">
          <NewsCard />
        </div>
        <div className="relative col-start-2 col-end-3 row-start-2 row-end-3">
          <NewsCard />
        </div>
        <div className="relative col-start-3 col-end-4 row-start-2 row-end-3">
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

function NewsCard() {
  return (
    <>
      <img
        src="./img-6.jpeg"
        alt=""
        className="bg-contain h-full sm:w-full w-2/3 contrast-50"
      />

      <div className="absolute bottom-4 pl-4 w-full">
        <h1 className="text-white text-xl py-1 flex flex-col flex-wrap">
          Marine wars
        </h1>
        <p className="text-grey pl-1 border-black border-l-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-sm text-black">source: BBC</p>
      </div>
    </>
  );
}
