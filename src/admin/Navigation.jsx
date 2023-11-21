import { Link, NavLink } from "react-router-dom";
import supabase from "../services/supabase";

export default function Navigation() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Link
          to="/dashboard"
          className="text-blue tracking-wider text-2xl px-3 py-4 "
        >
          Oceanic
        </Link>

        <nav className="my-4 px-6">
          <ul className="flex flex-col items-start gap-9">
            <NavLink
              to="admin"
              className="text-black px-2 py-3 rounded-full focus:bg-blue focus:text-white transition-all duration-300"
            >
              Overview
            </NavLink>

            <NavLink
              to="classes"
              className="text-black px-2 py-3 rounded-full focus:bg-blue focus:text-white transition-all duration-300"
            >
              Courses
            </NavLink>

            <NavLink
              to="eventsmanagement"
              className="text-black px-2 py-3 rounded-full focus:bg-blue focus:text-white transition-all duration-300"
            >
              Events
            </NavLink>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => supabase.auth.signOut()}
        className="px-1 py-2 mx-3 bg-blue text-white tracking-wide rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
