import React from "react";
import styles from "./CardNFT.module.css";
import Image from "next/image";
import { CartItem } from "@/types/index";
import { useCart } from "@/context/CartContext";

interface Props {
  listing: CartItem;
  onClickNft: (item: CartItem) => void;
}

const CardNFT: React.FC<Props> = ({ listing, onClickNft }) => {
  const { state, dispatch } = useCart();
  const itemIsOnCart = (array: CartItem[], id: number | undefined): boolean => {
    return array.some((item) => item.id === id);
  };
  return (
    <div onClick={() => onClickNft(listing)} className={styles.card}>
      <div className={styles.backgroundImage}>
        <div className={styles.amountContainer}>
          <div className={styles.price}>
            {listing.btcPrice} <span className={styles.btc}>BTC</span>
          </div>
          <div className={styles.price}>${listing.usdPrice}</div>
        </div>
        <div className={styles.inGameText}>IN-GAME</div>
        {itemIsOnCart(state.items, listing?.id) && (
          <div className={styles.onCartOverlay}>🛒On Your Cart </div>
        )}
        <Image
          src={listing.background}
          width={300}
          height={350}
          alt={`${listing.title} image background`}
        />
        <div className={styles.foregroundImage}>
          <Image
            src={listing.image}
            width={180}
            height={180}
            alt={`${listing.title} nft image`}
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.date}>{listing.date}</div>
        <div className={styles.title}>{listing.title}</div>
        <div className={styles.qty}>QTY: {listing.qty}</div>
      </div>
    </div>
  );
};

export default CardNFT;
