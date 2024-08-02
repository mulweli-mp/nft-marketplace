import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faThLarge,
  faWallet,
  faCoins,
  faFileInvoiceDollar,
  faCog,
  faCheckSquare,
  faStore,
  faBoxes,
  faReceipt,
  faGift,
  faChartPie,
  faSeedling,
  faChartLine,
  faUsers,
  faTrophy,
  faTools,
  faNewspaper,
  faHeadset,
  faSignOutAlt,
  faBitcoinSign,
  faScaleUnbalanced,
  faDesktop,
  faDownload,
  faDollar,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";

export interface MenuItemType {
  name: string;
  icon: IconDefinition;
  hasLightBackgroundColor?: boolean;
  hasBorderBottom?: boolean;
  hasDropDownArrow?: boolean;
  isLogout?: boolean;
}

export interface Props {
  activeItem: string;
  handleMenuClick: (activeItem: string) => void;
}

export const menuItems: MenuItemType[] = [
  { name: "Dashboard", icon: faThLarge, hasLightBackgroundColor: true },
  {
    name: "AuBit Wallet",
    icon: faWallet,
    hasLightBackgroundColor: true,
    hasDropDownArrow: true,
  },
  { name: "Assets", icon: faBitcoinSign },
  { name: "Marketplace", icon: faScaleUnbalanced },
  { name: "Mint", icon: faCoins },
  { name: "Sell", icon: faMoneyBillTransfer },
  { name: "Claims", icon: faFileInvoiceDollar },
  { name: "Import Contract", icon: faDownload },
  { name: "Wallet Settings", icon: faCog },
  {
    name: "Validate AuBit",
    icon: faCheckSquare,
    hasLightBackgroundColor: true,
  },
  { name: "Store", icon: faStore, hasLightBackgroundColor: true },
  { name: "Inventory", icon: faBoxes, hasLightBackgroundColor: true },
  {
    name: "Orders",
    icon: faReceipt,
    hasBorderBottom: true,
    hasLightBackgroundColor: true,
  },
  {
    name: "Reward Program",
    icon: faGift,
    hasDropDownArrow: true,
    hasLightBackgroundColor: true,
  },
  { name: "Overview", icon: faChartPie },
  { name: "Earnings", icon: faDollar },
  { name: "Yield Hub", icon: faSeedling },
  { name: "Sales", icon: faChartLine },
  { name: "Team", icon: faUsers },
  { name: "Leaderboards", icon: faTrophy },
  { name: "Tools", icon: faTools, hasBorderBottom: true },
  {
    name: "Starvara",
    icon: faDesktop,
    hasBorderBottom: true,
    hasLightBackgroundColor: true,
  },
  {
    name: "News",
    icon: faNewspaper,
    hasBorderBottom: true,
    hasLightBackgroundColor: true,
  },
  {
    name: "Support",
    icon: faHeadset,
    hasBorderBottom: true,
    hasLightBackgroundColor: true,
  },
  {
    name: "Logout",
    icon: faSignOutAlt,
    isLogout: true,
    hasLightBackgroundColor: true,
  },
];
