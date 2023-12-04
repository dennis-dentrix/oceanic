/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import { XLg } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteItem } from "./EventSlice";

export function BookedEvents({ reserve }) {
  console.log(reserve);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center gap-2  py-2 border-b-1 border-black">
        <Avatar src="./img-1.jpeg" />
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-sm font-medium">{reserve.title}</h1>
            <p className="text-sm text-black">
              From: <span>{reserve.startDate}</span>
            </p>
          </div>
          <button
            className="flex items-center gap-1 text-red-600 border rounded-full px-1 "
            onClick={() => dispatch(deleteItem(reserve.itemId))}
          >
            <XLg />
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </>
  );
}
