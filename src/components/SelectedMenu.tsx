import React from "react";
import styles from "./SelectedMenu.module.css";
import Marketplace from "@/components/Marketplace";
import { CartItem } from "@/types/index";

interface Props {
  activeItem: string;
  onClickNft: (item: CartItem) => void;
  itemToAdd: CartItem | null;
}
const SelectedMenu: React.FC<Props> = ({
  activeItem,
  onClickNft,
  itemToAdd,
}) => {
  return (
    <div className={styles.container}>
      {activeItem === "Marketplace" ? (
        <Marketplace onClickNft={onClickNft} itemToAdd={itemToAdd} />
      ) : (
        <h2>{activeItem} Coming Soon</h2>
      )}
    </div>
  );
};

export default SelectedMenu;
