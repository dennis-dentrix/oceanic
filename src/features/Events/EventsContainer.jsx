import { Heart, Plus } from "react-bootstrap-icons";

export function EventsContainer() {
  return (
    <div className="my-2 flex flex-col border border-black rounded-lg">
      <div className="px-4 py-2 bg-white rounded-lg">
        <h1 className="font-medium text-black tracking-wide">UNESCO TALK</h1>
        <div className="px-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. aperiam
            debitis earum animi. Maxime, provident rerum?
          </p>

          <div className="flex items-center gap-3 my-2">
            <button className="px-2 py-1 border border-black rounded-md flex items-center gap-1">
              <Heart />
              <p>Interested</p>
            </button>
            <button className="px-2 py-1 border border-black rounded-md flex items-center gap-1">
              <Plus />
              <p>Reserve</p>
            </button>
          </div>
        </div>
      </div>
      <img src="./img-2.jpeg" alt="" className="" />
    </div>
  );
}
