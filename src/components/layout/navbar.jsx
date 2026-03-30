import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <p className="text-3xl font-bold text-blue-500">HGello Tailwidn</p>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/artwork" end>
        Artwork
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
    </nav>
  );
}
