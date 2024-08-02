"use client";
import styles from "./page.module.css";
import { useState } from "react";
import LeftMenu from "@/components/LeftMenu";
import BurgerMenu from "@/components/BurgerMenu";
import SelectedMenu from "@/components/SelectedMenu";
import Header from "@/components/Header";

export default function Home() {
  const [isMobileMenOpen, setIsMobileMenOpen] = useState(false);

  const toogleMobileMenu = (): void => {
    setIsMobileMenOpen((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      <Header
        isMobileMenOpen={isMobileMenOpen}
        toogleMobileMenu={toogleMobileMenu}
      />
      <LeftMenu />
      <BurgerMenu />
      <SelectedMenu />
    </main>
  );
}
