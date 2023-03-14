import BannerImg from "../assets/img/coding-img.svg";
import BannerCss from "../styles/banner/banner.module.css";
export const Banner = () => {
  return (
    <div className={BannerCss.wrapper}>
      <img
        className={BannerCss.img}
        src={BannerImg}
        alt="a computer made image of an computer"
      />
    </div>
  );
};
