import supabase from "../services/supabase";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Link, NavLink, Outlet } from "react-router-dom";
import { UserCards } from "../pages/Homepage";
import { useAuth } from "../context/AuthProvider";

export default function Dashboard() {
  const [session, setSession] = useState(null);
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-[15rem_auto] gap-3 h-screen ">
        <nav className="col-start-1 col-end-2 bg-slate-200 px-3 py-4">
          <div className="flex gap-2">
            <Link
              to={"/dashboard"}
              className="text-xl font-bold tracking-wider text-black"
            >
              Oceanic
            </Link>

            <button
              onClick={handleLogout}
              className="bg-blue text-white py-1 px-6 rounded-md"
            >
              Logout
            </button>
          </div>

          <ul className="flex flex-col items-end gap-4 my-4">
            <li className="px-3 py-2 rounded-lg ">
              <NavLink
                style={(isActive) => ({
                  color: isActive ? "text-blush" : "blue",
                })}
                to={"/admin"}
              >
                Overview
              </NavLink>
            </li>

            <li className="px-3 py-2 rounded-lg">
              <NavLink to={"/admin/classes"}>Classes</NavLink>
            </li>

            <li className="px-3 py-2 rounded-lg">
              <NavLink to={"/admin/events"}>Events</NavLink>
            </li>
          </ul>
        </nav>

        <div className="col-start-2 px-3 py-4">
          <div className="flex gap-3 items-center">
            <UserCards num={"6"} text={"Enrolled classes"} />
            <UserCards num={"4"} text={"Completed courses"} />
          </div>

          <div className="my-4">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
