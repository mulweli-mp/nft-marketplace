import React from "react";
import styles from "./Marketplace.module.css";
import { listings } from "@/constants/Listings";
import CardNFT from "@/components/CardNFT";

const Marketplace: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {listings.map((listing) => (
          <CardNFT key={listing.id} listing={listing}></CardNFT>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
