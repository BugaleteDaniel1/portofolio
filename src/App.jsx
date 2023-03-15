import { useState } from "react";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/skills";
import { Title } from "./components/Title";
import { projectsData } from "./assets/data/projectsData";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const navHandler = () => {
    setIsActive((prevSetIsActive) => !prevSetIsActive);
  };

  const selectCard = (projectName) => {
    const selectedCard = projectsData.filter(
      (data) => data.projectName === projectName
    );
    setName(selectedCard);
    openModal();
  };

  const openModal = () => {
    setIsModalActive(true);
  };
  const closeModal = () => {
    setIsModalActive(false);
  };

  return (
    <div className="app">
      <div className="landing">
        <Navbar navState={isActive} clickHandler={navHandler} />
        <Title />
        <Banner />
        <a href="#projects-landing" className="btn">
          Start
        </a>
      </div>
      <Projects
        closeBackdrop={closeModal}
        backdropData={name}
        backdropState={isModalActive}
        openModal={openModal}
        clickCard={selectCard}
      />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
