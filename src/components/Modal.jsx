import { BsGlobe, BsGithub } from "react-icons/bs";
import ModalCss from "../styles/backdrop/modal.module.css";

export const Modal = ({ data }) => {
  const info = data[0] ?? null;
  console.log(info);
  return info ? (
    <div className={ModalCss.modal}>
      <img
        className={ModalCss.img}
        src={info.projectImage}
        alt="a picture of a project i made"
      />
      <h3>{info.projectName}</h3>
      <div className={ModalCss.btnContainer}>
        <a target="_blank" href={info.projectLink} className={ModalCss.btn}>
          <BsGlobe color="#90deea" />
          Live website
        </a>
        <a target="_blank" href={info.projectRepo} className={ModalCss.btn}>
          <BsGithub />
          Repository
        </a>
      </div>
    </div>
  ) : (
    <div>hello</div>
  );
};
