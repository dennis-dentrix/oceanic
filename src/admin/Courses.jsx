import { NavLink } from "react-router-dom";

export default function Courses() {
  return (
    <div className="space-y-6">
      <div className="flex gap-10 ">
        <NavLink className="bg-black text-white rounded-md px-4 py-6 w-48 flex flex-col justify-around gap-5">
          <div className="flex flex-col items-end gap-3">
            <h1>Endagered species</h1>
            <p className="text-sm">10 Minutes</p>
            <p className="text-sm">0/100 points</p>
          </div>
          <button className="bg-blue py-2 rounded-full">Enroll</button>
        </NavLink>

        <NavLink className="bg-black text-white rounded-md px-4 py-6 w-48 flex flex-col justify-around gap-5">
          <div className="flex flex-col items-end gap-3">
            <h1>Endagered species</h1>
            <p className="text-sm">10 Minutes</p>
            <p className="text-sm">0/100 points</p>
          </div>
          <button className="bg-green text-black font-medium py-2 rounded-full">
            Continue
          </button>
        </NavLink>
      </div>

      <div className="h-full overflow-y-scroll">
        <h1>Endanger Species</h1>

        <div></div>
      </div>
    </div>
  );
}
