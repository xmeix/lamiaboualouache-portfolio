import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route
              exact
              path="/lamiaboualouache-portfolio"
              element={<Home />}
            />
            <Route
              exact
              path="/lamiaboualouache-portfolio/AboutMe"
              element={<About />}
            />

            {/* <Route path="/Everything" element={}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
