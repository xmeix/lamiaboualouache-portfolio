import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li>Home</li>
        </Link>

        <Link to="/Projects" style={{ textDecoration: "none", color: "black" }}>
          <li>Projects</li>
        </Link>

        <Link to="/AboutMe" style={{ textDecoration: "none", color: "black" }}>
          <li>AboutMe</li>
        </Link>

        <Link to="/Contact" style={{ textDecoration: "none", color: "black" }}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
