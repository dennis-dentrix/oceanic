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

      {/* <div className="sm:grid flex flex-col grid-rows-2 grid-cols-[50%_23.8%_23.8%] gap-5 h-full"> */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="hidden sm:flex flex-col gap-4 ">
          <TopStoryCard />
          <TopStoryCard />
        </div>

        <div className="flex flex-col gap-4 h-screen overflow-y-scroll">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

function TopStoryCard() {
  return (
    // <div className="w-full sm:w-2/3 relative">
    <div className="relative w-full">
      <img
        src="./img-6.jpeg"
        alt=""
        className="bg-contain w-full contrast-50"
      />

      <div className="absolute bottom-3 pl-4 w-full">
        <h1 className="text-white py-1 flex flex-col flex-wrap">Marine wars</h1>
        <p className="text-grey pl-1 border-black border-l-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-sm text-black">source: BBC</p>
      </div>
    </div>
  );
}

function NewsCard() {
  return (
    // <div className="w-full sm:w-2/3 relative">
    <div className="relative w-full sm:w-2/3">
      <img
        src="./img-6.jpeg"
        alt=""
        className="bg-contain w-full contrast-50"
      />

      <div className="absolute bottom-3 pl-4 w-full">
        <h1 className="text-white py-1 flex flex-col flex-wrap">Marine wars</h1>
        <p className="text-grey pl-1 border-black border-l-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-sm text-black">source: BBC</p>
      </div>
    </div>
  );
}
// function NewsCard() {
//   return (
//     <div className="w-full flex ">
//       <img src="./img-6.jpeg" alt="" className="bg-contain w-full" />

//       <div className="pl-4 w-full">
//         <h1 className="text-white py-1 flex flex-col flex-wrap">Marine wars</h1>
//         <p className="text-grey pl-1 border-black border-l-2">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         </p>
//         <p className="text-sm text-black">source: BBC</p>
//       </div>
//     </div>
//   );
// }