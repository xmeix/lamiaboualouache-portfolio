import "./About.css";
import Section from "./Sections/Section";
const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <div className="part1">
          <h1 className="sectionTitle">About Me</h1>
          <hr style={{ width: "150px" }} />
          <h2 className="sectionSubTitle">
            In LOVE with design, Technology and programming
          </h2>
        </div>
        <div className="part2"></div>
      </div>
      <Section />
    </div>
  );
};

export default About;
