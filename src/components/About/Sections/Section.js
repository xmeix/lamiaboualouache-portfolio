import "./Section.css";
const Section = () => {
  return (
    <div className="section">
      <div className="WhoAmi">
        <div className="title">Who am i</div>
        <div className="description">
          Born in <span className="span1">1999</span>, i hold a{" "}
          <span className="span1">Licence's degree</span> in
          <span className="span1">computer science</span> and Currently studying
          to get a masters' degree in software engineering after studying
          computer science <span className="span1">"ACAD"</span> at the university
          of science and technology Houari Boumediene{" "}
          <span className="span1">"USTHB"</span> for 3 years, along with studies
          , i try to specialize in{" "}
          <span className="span1">front and back-end developpement.</span>
          <br /> <br />
          Well versed in numerous programming languages,
          <span className="span2">
            Creative, curious, sociable and passionate, I have a constant thirst
            to learn new things especially in programming and design.
          </span>
          <br />
          PS: in love with Javascript.
        </div>
      </div>
    </div>
  );
};

export default Section;
