import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <h1 className="text-blue tracking-wider text-2xl px-3 py-4 ">Oceanic</h1>

      <nav className="my-4 px-6">
        <ul className="flex flex-col items-start gap-9">
          <NavLink
            to="overview"
            className="text-black px-2 py-3 rounded-full focus:bg-blue focus:text-white transition-all duration-300"
          >
            Overview
          </NavLink>

          <NavLink
            to="courses"
            className="text-black px-2 py-3 rounded-full focus:bg-blue focus:text-white transition-all duration-300"
          >
            Courses
          </NavLink>

          <NavLink className="text-black px-2 py-3 rounded-full focus:bg-blue focus:text-white transition-all duration-300">
            Events
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
