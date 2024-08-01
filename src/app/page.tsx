"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <main className={styles.main}>
      <h1>NFT Marketplace</h1>
    </main>
  );
}
