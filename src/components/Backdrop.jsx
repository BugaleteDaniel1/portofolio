import { useEffect, useRef } from "react";
import BackdropCss from "../styles/backdrop/backdrop.module.css";
import { Modal } from "./Modal";

export const Backdrop = ({ modalState, modalData, closeModal }) => {
  console.log(modalState);
  const backdrop = useRef(null);
  useEffect(() => {
    modalState
      ? (backdrop.current.style.scale = 1)
      : (backdrop.current.style.scale = 0);
  }, [modalState]);

  const close = (e) => {
    e.stopPropagation();
    closeModal();
  };

  return (
    <div
      onClick={(e) => close(e)}
      ref={backdrop}
      className={BackdropCss.backdrop}
    >
      <Modal data={modalData} />
    </div>
  );
};
