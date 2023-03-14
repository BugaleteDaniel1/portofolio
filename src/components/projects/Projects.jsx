import { Cards } from "./Cards";
import { projectsData } from "../../assets/data/projectsData";

export const Projects = () => {
  return (
    <>
      <h2 className="title">Projects</h2>
      {projectsData.map((site) => {
        return <Cards name={site.projectName} img={site.projectImage} />;
      })}
    </>
  );
};
