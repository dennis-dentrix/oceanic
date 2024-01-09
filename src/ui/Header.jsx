import { Calendar2Event, House, Person } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import HeaderDrawer from "./HeaderDrawer";
import Dropmenu from "./Dropmenu";
import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userApi";
import Spinner from "./Spin";
import img from "/prof.jpg";
import { useAuth } from "../context/AuthProvider";
import { Button, Nav } from "react-bootstrap";

const activeNav = "text-blue border-b border-black transition-all duration-200";

export default function Header() {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };
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
    <header className="flex items-center justify-between gap-3 border-b-2 border-grey px-8 py-4 w-full ">
      <Link to="/dashboard" className="text-blue tracking-wider text-xl">
        Oceanic
      </Link>
      <div className="hidden sm:flex items-center justify-between flex-grow-1 gap-12 ">
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
            </span>
            <span className="hidden sm:block">Home</span>
          </NavLink>
          {/* <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Book />
            </span>
            <span className="hidden sm:block">Courses</span>
          </NavLink> */}
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Calendar2Event />
            </span>
            <span className="hidden sm:block">Events</span>
          </NavLink>
          {/* <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? activeNav : "text-black")}
          >
            <span className="sm:hidden">
              <Book />
            </span>
            <span className="hidden sm:block">Resources</span>
          </NavLink> */}
        </nav>
      </div>
      <div>
        <div className="sm:hidden ">
          <Person />
        </div>

        <div className="sm:flex items-center gap-6 hidden">
          <div className="flex items-center gap-2">
            <Avatar style={{ width: 25, height: 25 }} src={img} />
            <Dropmenu />

            <p className="text-sm">Denis</p>
          </div>

          <NavLink>
            {!auth && (
              <Link
                as={Button}
                onClick={handleLogout}
                className="bg-blue text-white py-1 px-6 rounded-md"
              >
                Log out
              </Link>
            )}
          </NavLink>
        </div>
      </div>

      <div className="block sm:hidden">
        <HeaderDrawer />
      </div>
    </header>
  );
}
