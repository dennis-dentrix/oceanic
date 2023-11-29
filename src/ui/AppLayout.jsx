import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { Weather } from "./Weather";
import { useEffect, useState } from "react";
import supabase from "../services/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";

export default function AppLayout() {
  const [session, setSession] = useState(null);

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
            providers={["google"]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <Header />

        {/* <main className="h-full flex flex-col flex-auto bg-grey"> */}
        <main className="px-8 py-4 w-full mt-4">
          <Outlet />
        </main>
        <Weather />

        <Footer />
      </div>
    );
  }
}
