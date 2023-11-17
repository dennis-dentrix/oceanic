import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div className="px-6 py-4">
      <Outlet />
    </div>
  );
}
