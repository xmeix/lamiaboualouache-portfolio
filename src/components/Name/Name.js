import "./Name.css";
import { Link } from "react-router-dom";

const Name = () => {
  return (
    <div className="Name">
      <div className="animated-title">
        <div className="text-top">
          <div>
            <span>full-stack web developer.</span>
            <span>computer science engineer.</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>
            <Link className="item"
              to="/Projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              Want to see my projects?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
