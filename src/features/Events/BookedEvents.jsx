/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
import DeleteBtn from "./DeleteBtn";

export function BookedEvents({ reserve }) {
  const { itemId } = reserve;

  return (
    <>
      <div className="flex items-center gap-2 py-2 border-b-1 border-black">
        <Avatar src="./img-3.jpeg" />
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-sm font-medium">{reserve.title}</h1>
            <p className="text-sm text-black">
              From: <span>{reserve.startDate}</span>
            </p>
          </div>

          <DeleteBtn id={itemId} />
        </div>
      </div>
    </>
  );
}
