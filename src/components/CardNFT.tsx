import React from "react";
import styles from "./CardNFT.module.css";
import Image from "next/image";

interface CardNFTType {
  id: number;
  image: string;
  background: string;
  title: string;
  date: string;
  qty: number;
  btcPrice: number;
  usdPrice: number;
}
interface Props {
  listing: CardNFTType;
}

const CardNFT: React.FC<Props> = ({ listing }) => {
  return (
    <div className={styles.card}>
      <div className={styles.backgroundImage}>
        <div className={styles.amountContainer}>
          <div className={styles.price}>
            {listing.btcPrice} <span className={styles.btc}>BTC</span>
          </div>
          <div className={styles.price}>${listing.usdPrice}</div>
        </div>
        <div className={styles.inGameText}>IN-GAME</div>
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
