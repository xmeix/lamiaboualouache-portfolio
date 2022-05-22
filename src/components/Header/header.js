import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link
          to="/lamiaboualouache-portfolio/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li>Home</li>
        </Link>

        <Link
          to="/lamiaboualouache-portfolio/Projects"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li>Projects</li>
        </Link>

        <Link
          to="/lamiaboualouache-portfolio/AboutMe"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li>AboutMe</li>
        </Link>

        <Link
          to="/lamiaboualouache-portfolio/Contact"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
