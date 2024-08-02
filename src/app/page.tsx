"use client";
import styles from "./page.module.css";
import { useCallback, useState } from "react";
import LeftMenu from "@/components/LeftMenu";
import BurgerMenu from "@/components/BurgerMenu";
import SelectedMenu from "@/components/SelectedMenu";
import Header from "@/components/Header";
import ViewCart from "@/components/ViewCart";
import AddToCard from "@/components/AddToCard";
import { CartItem } from "@/types/index";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { state, dispatch } = useCart();
  const [activeItem, setActiveItem] = useState<string>("Marketplace");
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  const [itemToAdd, setItemToAdd] = useState<CartItem | null>(null);

  const handleMenuClick = useCallback((item: string) => {
    setActiveItem(item);
  }, []);
  const toogleCart = () => {
    setCartIsOpen((prev) => !prev);
  };
  const onClickNft = (item: CartItem) => {
    setItemToAdd(item);
  };
  const addItemToCart = () => {
    if (itemToAdd) {
      dispatch({ type: "ADD_ITEM", payload: itemToAdd });
      setItemToAdd(null);
      setTimeout(() => {
        toogleCart();
      }, 500);
    }
  };
  const closeBuyModal = () => {
    setItemToAdd(null);
  };

  return (
    <main className={styles.main}>
      <Header activeItem={activeItem} toogleCart={toogleCart} />
      <LeftMenu activeItem={activeItem} handleMenuClick={handleMenuClick} />
      <SelectedMenu
        activeItem={activeItem}
        onClickNft={onClickNft}
        itemToAdd={itemToAdd}
      />
      <BurgerMenu activeItem={activeItem} handleMenuClick={handleMenuClick} />
      <ViewCart cartIsOpen={cartIsOpen} toogleCart={toogleCart} />
      <AddToCard
        itemToAdd={itemToAdd}
        closeBuyModal={closeBuyModal}
        addItemToCart={addItemToCart}
      />
    </main>
  );
}
