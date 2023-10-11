import {
  Calendar2,
  Image,
  Link,
  Pen,
  CameraReels,
} from "react-bootstrap-icons";

export function AddEvent() {
  return (
    <div className="bg-white px-4 py-2 my-2">
      <form className="flex items-center gap-3 bg-white my-2 rounded-lg px-2 border-2 border-grey">
        <Pen />
        <input
          type="text"
          placeholder="Search for event"
          className="bg-transparent px-4 py-2 text-black focus:outline-none w-full"
        />
      </form>

      <div className="flex items-center gap-6">
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
          <Calendar2 className="text-blue" />
          <p>Schedule</p>
        </span>
      </div>
    </div>
  );
}
