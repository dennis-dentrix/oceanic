import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { Weather } from "./Weather";
export default function AppLayout() {
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
