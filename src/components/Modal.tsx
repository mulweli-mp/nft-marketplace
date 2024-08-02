import React, { ReactNode, useEffect } from "react";
import styles from "./Modal.module.css";

const Modal: React.FC<{ isOpen: boolean; children: ReactNode }> = ({
  isOpen,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset"; // Allow background scrolling
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.open : styles.close}`}
    >
      <div className={styles.leftMenuMock}></div>
      <div className={styles.modalContentContainer}>
        <div className={styles.modalContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
