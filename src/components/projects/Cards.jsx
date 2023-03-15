import { FaEye } from "react-icons/fa";
import defaultImg from "../../assets/img/project-img/default-img.png";
import cardsCss from "../../styles/projects/cards/cards.module.css";

export const Cards = ({ name, img, pressCard }) => {
  return (
    <div onClick={() => pressCard(name)} className={cardsCss.card} key={name}>
      <img
        className={cardsCss.img}
        src={img ?? defaultImg}
        alt="a picture of an website"
      />
      <div className={cardsCss.bottom}>
        <FaEye />
        <p>{name}</p>
      </div>
    </div>
  );
};
