import React from "react";
import styles from "./SelectedMenu.module.css";
import Marketplace from "@/components/Marketplace";

interface Props {
  activeItem: string;
}
const SelectedMenu: React.FC<Props> = ({ activeItem }) => {
  return (
    <div className={styles.container}>
      {activeItem === "Marketplace" ? (
        <Marketplace />
      ) : (
        <h2>{activeItem} Coming Soon</h2>
      )}
    </div>
  );
};

export default SelectedMenu;
