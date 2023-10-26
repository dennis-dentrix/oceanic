import { Avatar } from "@mui/material";
import { XLg } from "react-bootstrap-icons";

export function BookedEvents() {
  return (
    <>
      <div className="flex items-center gap-2  py-2 border-b-1 border-black">
        <Avatar src="./img-1.jpeg" />
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-sm font-medium">UNESCO confrence 2023</h1>
            <p className="text-sm text-black">
              From: <span>20/10/2023</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-pink-600">
            <XLg />
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </>
  );
}
