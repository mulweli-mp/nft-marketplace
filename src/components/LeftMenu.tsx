import React, { useState, useCallback } from "react";
import styles from "./LeftMenu.module.css";
import { menuItems, MenuItemType } from "@/constants/MenuItems";
import MenuItem from "@/components/MenuItem";

const LeftMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Marketplace");

  const handleMenuClick = useCallback((item: string) => {
    setActiveItem(item);
  }, []);

  const renderMenuItem = (menuItem: MenuItemType) => (
    <MenuItem
      key={menuItem.name}
      onMenuClick={() => handleMenuClick(menuItem.name)}
      activeItem={activeItem}
      menuItem={menuItem}
    />
  );

  return (
    <div className={styles.container}>{menuItems.map(renderMenuItem)}</div>
  );
};

export default LeftMenu;
