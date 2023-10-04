import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex items center bg-black text-grey justify-between px-3 py-2 text-sm">
      <div>&copy; 2023</div>
      <div>
        <Link to="/" className="text-blue skew-y-3 text-base">
          Oceanic
        </Link>
        <p>Saving the waters of the planet</p>
      </div>
      <div>
        <p>by Mulupi</p>
      </div>
    </footer>
  );
}
