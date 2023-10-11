import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 w-full border-b-2 border-grey ">
      <div className="skew-y-6">
        <Link to="/dashboard" className="text-blue tracking-wider text-xl ">
          Oceanic
        </Link>
      </div>
      <div className="flex items center flex-grow-1 gap-12">
        <nav className="flex items-center gap-8">
          <NavLink to="/dashboard" className="text-pink-600">
            Home
          </NavLink>
          <NavLink to="/news" className="">
            News
          </NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>
        <div className="flex items-center gap-6">
          <button className="cursor-pointer px-3 py-1 border border-black text-blue rounded-md focus:ring-1 focus:ring-blue focus:border-none focus:scale-1 transition-all duration-300">
            Login
          </button>
          <button className="cursor-pointer px-3 py-1 border border-blue bg-blue text-grey rounded-md focus:ring-1 focus:border-none focus:ring-black ">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
