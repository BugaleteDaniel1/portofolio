import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/img/project-img/default-img.png";
import cardsCss from "../../styles/projects/cards/cards.module.css";

export const Cards = ({ name, image }) => {
  return (
    <div className={cardsCss.card} key={name}>
      <img
        className={cardsCss.img}
        src={image ?? defaultImg}
        alt="a picture of an website"
      />
      <div className={cardsCss.bottom}>
        <FaEye />
        <p>{name}</p>
      </div>
    </div>
  );
};
