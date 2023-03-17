import { FaBars, FaTimes } from "react-icons/fa";
import NavCss from "../styles/navbar/navbar.module.css";
import { navbarData } from "../assets/data/navbarData";
import { useEffect, useRef, useState } from "react";

export const Navbar = ({ navState, clickHandler }) => {
  const nav = useRef(null);
  const navWrapper = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  console.log(screenWidth);

  const setWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(document.defaultView.innerWidth);

    window.addEventListener("resize", setWidth);
    if (screenWidth >= 768) {
    }
    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth >= 768) {
      nav.current.style.top = 0;
      nav.current.style.height = nav.current.getBoundingClientRect().height;
    }
  }, [screenWidth]);

  useEffect(() => {
    const navHeight = navWrapper.current.getBoundingClientRect().height;
    nav.current.style.height = navHeight + "px";
  }, [screenWidth]);

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
                <li key={navEl.name} className={NavCss.listItem}>
                  <a className={NavCss.anchor} href={navEl.link}>
                    {navEl.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
