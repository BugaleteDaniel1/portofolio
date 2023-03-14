import { FaBars, FaTimes } from "react-icons/fa";
import NavCss from "../styles/navbar/navbar.module.css";
import { navbarData } from "../assets/data/navbarData";
import { useEffect, useRef } from "react";
export const Navbar = ({ navState, clickHandler }) => {
  console.log(navState);

  const nav = useRef(null);
  const navWrapper = useRef(null);

  useEffect(() => {
    const navHeight = navWrapper.current.getBoundingClientRect().height;
    nav.current.style.height = navHeight + "px";
  }, []);

  useEffect(() => {
    navState ? (nav.current.style.top = 0) : (nav.current.style.top = "-500%");
  }, [navState]);

  return (
    <div className={NavCss.navbar}>
      <div onClick={clickHandler} className={NavCss.hamburger}>
        <FaBars />
      </div>
      <nav ref={nav} className={NavCss.navContainer}>
        <div ref={navWrapper}>
          <div onClick={clickHandler} className={NavCss.hamburger}>
            <FaTimes />
          </div>
          <ul className={NavCss.links}>
            {navbarData.map((navEl) => {
              return (
                <li className={NavCss.listItem}>
                  <a href={navEl.link}>{navEl.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
