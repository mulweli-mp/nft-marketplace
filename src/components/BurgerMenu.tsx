import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { menuItems, MenuItemType } from "@/constants/MenuItems";
import MenuItem from "@/components/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Marketplace");

  const renderMenuItem = (menuItem: MenuItemType) => (
    <MenuItem
      key={menuItem.name}
      onMenuClick={handleMenuClick}
      activeItem={activeItem}
      menuItem={menuItem}
    />
  );

  const handleMenuClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerIcon} onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </div>

      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.closeButton} onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faClose} size="2x" />
        </div>
        {menuItems.map(renderMenuItem)}
      </div>
      {isOpen && (
        <div className={styles.overlay} onClick={handleMenuClick}></div>
      )}
    </div>
  );
};

export default BurgerMenu;
