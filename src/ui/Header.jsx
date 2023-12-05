import { Book, Calendar2Event, House, Person } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import HeaderDrawer from "./HeaderDrawer";
import Dropmenu from "./Dropmenu";
import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userApi";
import Spinner from "./Spin";
import img from "/prof.jpg";

const activeNav = "text-blue border-b border-black transition-all duration-200";

export default function Header() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) return <Spinner />;
  return (
    <header className="flex items-center justify-between  border-b-2 border-grey px-8 py-4 w-full">
      <div className="skew-y-6">
        <Link to="/dashboard" className="text-blue tracking-wider text-xl ">
          Oceania
        </Link>
      </div>
      <div className="hidden sm:flex items center flex-grow-1 gap-12 ">
        <nav className="flex items-center gap-8">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? activeNav
                : "text-black px-2 py-1 ext-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] "
            }
          >
            <span className="sm:hidden">
              <House />
            </span>{" "}
            <span className="hidden sm:block">Home</span>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Book />
            </span>
            <span className="hidden sm:block">Courses</span>
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Calendar2Event />
            </span>
            <span className="hidden sm:block">Events</span>
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Book />
            </span>
            <span className="hidden sm:block">Resources</span>
          </NavLink>

          {/* <NavLink
            to="/post"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Plus />
            </span>
            <span className="hidden sm:block">Post</span>
          </NavLink> */}
          <div className="sm:hidden ">
            <Person />
          </div>

          <div className="sm:flex items-center gap-6 hidden">
            <div className="flex items-center gap-2">
              <Avatar style={{ width: 25, height: 25 }} src={img} />
              {/* <p className="text-sm">Denis</p> */}

              <Dropmenu />
            </div>
            {/* <button
              onClick={() => supabase.auth.signOut()}
              className="cursor-pointer px-3 py-1 border border-black text-blue rounded-md focus:ring-1 focus:ring-blue focus:border-none focus:scale-1 transition-all duration-300"
            >
              Logout
            </button>
            <button
              onClick={() => navigate("/admin")}
              className="cursor-pointer px-3 py-1 border border-blue bg-blue text-grey rounded-md focus:ring-1 focus:border-none focus:ring-black "
            >
              Admin
            </button> */}
          </div>
        </nav>
      </div>
      <div className="block sm:hidden">
        <HeaderDrawer />
      </div>
    </header>
  );
}
