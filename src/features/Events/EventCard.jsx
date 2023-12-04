import { useDispatch } from "react-redux";
import { addItem } from "./EventSlice";

/* eslint-disable react/prop-types */
export default function EventCard(event) {
  const { id: eventID, title, description, startDate, endDate } = event.event;
  const dispatch = useDispatch();

  function handleAddItem() {
    const newEvent = {
      itemId: eventID,
      title,
      description,
      startDate,
      endDate,
    };
    console.log(newEvent);
    dispatch(addItem(newEvent));
  }
  return (
    <>
      <div
        className="w-[18rem] sm:w-[15rem] bg-white shadow-md  rounded-md flex flex-col gap-4"
        key={event.id}
      >
        <img src="./bg-image.jpg" alt="" className="" />

        <div className=" space-y-2">
          <div className="space-y-1 p-3">
            <h1 className="text-blue">{title}</h1>
            <p className="text-sm tracking-wide hidden md:block">
              {description}
            </p>
          </div>
          <div>
            <div className="flex flex-col items-start gap-2 justify-between px-2 py-1 ">
              <div className="text-xs">
                <p className="flex flex- items-end gap-1 text-sm ">
                  <span>{startDate}</span>
                  to: <span>{endDate}</span>
                </p>
                <button
                  className=" m-2 text-base bg-blue text-grey rounded-full px-2 py-1 "
                  onClick={handleAddItem}
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
