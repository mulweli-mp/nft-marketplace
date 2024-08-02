import React from "react";
import styles from "./ItemOnCart.module.css";
import Image from "next/image";
import { CartItem } from "@/types/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";

interface Props {
  listing: CartItem;
}

const ItemOnCart: React.FC<Props> = ({ listing }) => {
  const { state, dispatch } = useCart();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_ITEM", payload: listing });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src={listing.background}
          width={50}
          height={50}
          alt={`${listing.title} image background`}
        />
        <div className={styles.foregroundImage}>
          <Image
            src={listing.image}
            width={40}
            height={40}
            alt={`${listing.title} nft image`}
          />
        </div>
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.title}>{listing.title}</p>
        <p className={styles.price}>
          {listing.btcPrice} <span className={styles.btc}>BTC</span>
        </p>
      </div>
      <div onClick={removeFromCart} className={styles.deleteButton}>
        <FontAwesomeIcon icon={faTrash} size="1x" />
      </div>
    </div>
  );
};

export default ItemOnCart;
