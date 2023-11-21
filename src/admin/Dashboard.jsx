import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";
import supabase from "../services/supabase";
import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Dashboard() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.admin;
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
            providers={["google", "facebook", "github"]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex  w-[90vw]">
        <div className="bg-white w-52">
          <Navigation />
        </div>
        <div className="w-full">
          <div className="bg-white">
            <Header />
          </div>
          <div className="bg-grey h-full rounded-md">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}
