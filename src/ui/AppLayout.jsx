import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
export default function AppLayout() {
  return (
    <div className="relative">
      <Header />
      <main className="h-100% flex flex-col flex-auto bg-grey">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
