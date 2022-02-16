import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="link" to="/projects">
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
