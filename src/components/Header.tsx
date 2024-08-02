import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBell,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  isMobileMenOpen: boolean;
  toogleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isMobileMenOpen,
  toogleMobileMenu,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={`/aubit-logo.png`}
          width={50}
          height={50}
          alt={`aubit-logo`}
        />
      </div>
      <div className={styles.backButton}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={styles.arrowDownIcon}
          size="lg"
        />
      </div>

      <div className={styles.headerTitle}>Marketplace</div>
      <div className={styles.connectButton}>Connect Wallet</div>
      <div className={`${styles.bellButton} ${styles.iconButton}`}>
        <FontAwesomeIcon
          icon={faBell}
          className={styles.arrowDownIcon}
          size="lg"
        />
      </div>
      <div className={`${styles.iconButton}`}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          className={styles.arrowDownIcon}
          size="lg"
        />
      </div>
      <div className={styles.profileImage}>
        <Image
          src={`/avatar.png`}
          width={40}
          height={40}
          alt={`avatar image`}
        />
      </div>
    </div>
  );
};

export default Header;
