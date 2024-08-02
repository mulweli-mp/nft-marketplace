import React from "react";
import styles from "./MenuItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { MenuItemType } from "@/constants/MenuItems";

interface Props {
  menuItem: MenuItemType;
  activeItem: string;
  onMenuClick: (item: string) => void;
}

const MenuItem: React.FC<Props> = ({ menuItem, activeItem, onMenuClick }) => {
  const getMenuItemClasses = (menuItem: MenuItemType) => {
    let classes = `${styles.optionContainer}`;
    if (activeItem === menuItem.name) classes += ` ${styles.active}`;
    if (menuItem.hasLightBackgroundColor)
      classes += ` ${styles.lightBackgroundColor}`;
    if (menuItem.hasBorderBottom) classes += ` ${styles.borderBottom}`;
    if (menuItem.isLogout) classes += ` ${styles.logOutButtonStyle}`;
    return classes;
  };

  return (
    <div
      className={getMenuItemClasses(menuItem)}
      onClick={() => onMenuClick(menuItem.name)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onMenuClick(menuItem.name)}
    >
      <FontAwesomeIcon icon={menuItem.icon} className={styles.icon} />
      {menuItem.name}
      {menuItem.hasDropDownArrow && (
        <FontAwesomeIcon
          icon={faChevronDown}
          className={styles.arrowDownIcon}
        />
      )}
    </div>
  );
};

export default MenuItem;
