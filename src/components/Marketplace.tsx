import React from "react";
import styles from "./Marketplace.module.css";
import { listings } from "@/constants/Listings";
import CardNFT from "@/components/CardNFT";
import { CartItem } from "@/types";

interface Props {
  onClickNft: (item: CartItem) => void;
  itemToAdd: CartItem | null;
}

const Marketplace: React.FC<Props> = ({ onClickNft }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {listings.map((listing) => (
          <CardNFT key={listing.id} listing={listing} onClickNft={onClickNft} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
