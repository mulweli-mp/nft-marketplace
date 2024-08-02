"use client";
import styles from "./page.module.css";
import { useCallback, useState } from "react";
import LeftMenu from "@/components/LeftMenu";
import BurgerMenu from "@/components/BurgerMenu";
import SelectedMenu from "@/components/SelectedMenu";
import Header from "@/components/Header";

export default function Home() {
  const [activeItem, setActiveItem] = useState<string>("Marketplace");

  const handleMenuClick = useCallback((item: string) => {
    setActiveItem(item);
  }, []);

  return (
    <main className={styles.main}>
      <Header activeItem={activeItem} />
      <LeftMenu activeItem={activeItem} handleMenuClick={handleMenuClick} />
      <SelectedMenu activeItem={activeItem} />
      <BurgerMenu activeItem={activeItem} handleMenuClick={handleMenuClick} />
    </main>
  );
}
