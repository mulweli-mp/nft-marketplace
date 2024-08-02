import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { menuItems, MenuItemType, Props } from "@/constants/MenuItems";
import MenuItem from "@/components/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu: React.FC<Props> = ({ activeItem, handleMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderMenuItem = (menuItem: MenuItemType) => (
    <MenuItem
      key={menuItem.name}
      onMenuClick={onTapMenuOption}
      activeItem={activeItem}
      menuItem={menuItem}
    />
  );

  const toogleMobileMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const onTapMenuOption = (menuItem: string): void => {
    setIsOpen(false);
    handleMenuClick(menuItem);
  };

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerIcon} onClick={toogleMobileMenu}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </div>

      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.closeButton} onClick={toogleMobileMenu}>
          <FontAwesomeIcon icon={faClose} size="2x" />
        </div>
        {menuItems.map(renderMenuItem)}
      </div>
      {isOpen && (
        <div className={styles.overlay} onClick={toogleMobileMenu}></div>
      )}
    </div>
  );
};

export default BurgerMenu;
