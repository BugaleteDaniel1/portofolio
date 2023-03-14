import { useState } from "react";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/skills";
import { Title } from "./components/Title";

function App() {
  const [isActive, setIsActive] = useState(false);

  const navHandler = () => {
    setIsActive((prevSetIsActive) => !prevSetIsActive);
  };

  return (
    <div className="app">
      <div className="landing">
        <Navbar navState={isActive} clickHandler={navHandler} />
        <Title />
        <Banner />
        <button className="btn">Start</button>
      </div>
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
