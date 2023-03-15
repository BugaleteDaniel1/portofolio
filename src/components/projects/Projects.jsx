import { Cards } from "./Cards";
import { projectsData } from "../../assets/data/projectsData";
import { Backdrop } from "../Backdrop";

export const Projects = ({
  clickCard,
  backdropState,
  backdropData,
  closeBackdrop,
}) => {
  return (
    <section className="projects">
      <Backdrop
        modalState={backdropState}
        modalData={backdropData}
        closeModal={closeBackdrop}
      />
      <h2 id="projects-landing" className="title">
        Projects
      </h2>
      {projectsData.map((site) => {
        return (
          <Cards
            pressCard={clickCard}
            key={site.projectName}
            name={site.projectName}
            img={site.projectImage}
          />
        );
      })}
    </section>
  );
};
