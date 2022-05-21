import "./Home.css";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import Name from "../Name/Name";
import Header from "../Header/header";
const Home = () => {
  return (
    <div className="home">
      <ParticleBackground />
      <div className="name">
        Hi, <br />
        I'm Lamia
      </div>
      <div className="cadres">
        <div className="cadre1"></div>
        <div className="cadre2">
          <Name />
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Home;
