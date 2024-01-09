import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  //     setSession(session);
  //   });
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  // if (!session) {
  //   return (
  //     <div
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <div>
  //         <Auth
  //           supabaseClient={supabase}
  //           appearance={{ theme: ThemeSupa }}
  //           providers={["google"]}
  //         />
  //       </div>
  //     </div>
  //   );
  // } else {

  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <div>
      <Header />

      {/* <main className="h-full flex flex-col flex-auto bg-grey"> */}
      <main className="px-8 py-4 w-full  mt-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  ) : (
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
}
