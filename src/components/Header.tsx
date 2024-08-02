import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBell,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  activeItem: string;
  toogleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeItem, toogleCart }) => {
  const { state, dispatch } = useCart();

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
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </div>

      <div className={styles.headerTitle}>{activeItem}</div>
      <div className={styles.connectButton}>Connect Wallet</div>
      <div className={`${styles.bellButton} ${styles.iconButton}`}>
        <FontAwesomeIcon icon={faBell} size="lg" />
      </div>
      <div onClick={toogleCart} className={`${styles.iconButton}`}>
        <div className={styles.cartCounter}>{state.items.length}</div>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
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
