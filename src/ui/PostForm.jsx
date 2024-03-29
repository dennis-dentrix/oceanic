/* eslint-disable react/prop-types */
import { Pen } from "react-bootstrap-icons";

export function PostForm({ placeholder, onClick }) {
  return (
    // <div className="bg-white px-4 py-2 my-2">
    <div className="transition-all duration-500 space-x-4 flex flex-col md:flex-row">
      <div className="flex items-center gap-2 w-full">
        <form className="flex items-center gap-3 bg-white rounded-lg px-2 border-2 border-grey w-full">
          <Pen />
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent px-4 py-2 text-black focus:outline-none w-full"
            onFocus={onClick}
          />
        </form>
        <div className="px-1 py-1 shadow-md rounded-full ">
          {/* <Plus
            style={{ height: 30, width: 30 }}
            onClick={() => showMore(!moreButtons)}
          /> */}
        </div>
      </div>

      {/* {moreButtons && (
        <div className="flex items-center gap-3 my-3 md:my-0">
          <span className="text-black flex items-center gap-1">
            <Image className="text-blue" />
            <p>Image</p>
          </span>
          <span className="text-black flex items-center gap-1">
            <CameraReels className="text-blue" />
            <p>Video</p>
          </span>
          <span className="text-black flex items-center gap-1">
            <Link className="text-blue" />
            <p>Link</p>
          </span>
          <span className="text-black flex items-center gap-1">
            <Calendar className="text-blue" />
            <p>Schedule</p>
          </span>
        </div>
      )} */}
    </div>
  );
}
