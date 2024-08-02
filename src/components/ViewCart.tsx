import React from "react";
import styles from "./ViewCart.module.css";
import Modal from "./Modal";
import ItemOnCart from "./ItemOnCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface Props {
  cartIsOpen: boolean;
  toogleCart: () => void;
}

const ViewCart: React.FC<Props> = ({ cartIsOpen, toogleCart }) => {
  const { state, dispatch } = useCart();

  return (
    <Modal isOpen={cartIsOpen}>
      <div className={styles.modalHeader}>
        <p className={styles.modalHeaderText}>My Basket</p>
        <div onClick={toogleCart} className={styles.closeButton}>
          <FontAwesomeIcon icon={faClose} size="1x" />
        </div>
      </div>
      <div className={styles.balanceContainer}>
        <Image
          src={`/bitcoin-logo.png`}
          width={30}
          height={30}
          alt={`bitcoin-logo`}
        />
        <div className={styles.walletUnit}>
          <p>BTC </p>
          <p>Available</p>
        </div>
        <p>0.00312414 BTC</p>
      </div>
      <div className={styles.itemsContainer}>
        {state.items.map((listing) => (
          <ItemOnCart key={listing.id} listing={listing}></ItemOnCart>
        ))}

        {state.items.length === 0 && <p>No items on your cart</p>}
      </div>
      <div className={styles.totalsTable}>
        <div className={styles.totalsRow}>
          <p className={styles.subTotal}>Tx Fee</p>
          <p className={styles.subTotal}>
            <span className={styles.sats}>14,035 sats</span> | $9.35
          </p>
        </div>
        <div className={styles.totalsRow}>
          <p className={styles.subTotal}>Fee Savings</p>
          <p className={styles.subTotal}>
            <span className={styles.sats}>5,035 sats</span> | $3.35
          </p>
        </div>
        <div className={styles.totalsRow}>
          <p className={styles.subTotal}>Time Estimate</p>
          <p className={styles.subTotal}>30 minutes</p>
        </div>
        <div className={styles.explectedTotalContainer}>
          <p className={styles.expectedTotalText}>EXPECTED TOTAL</p>
          <p className={styles.subTotal}>
            <span className={styles.sats}>0.002</span>{" "}
            <span className={styles.btc}>BTC</span> | $132.70
          </p>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <div
          onClick={toogleCart}
          className={`${styles.actionButton} ${styles.addAnother}`}
        >
          ADD ANOTHER
        </div>
        <div
          onClick={() => alert("CHECKOUT Feature Coming Soon")}
          className={styles.actionButton}
        >
          CHECKOUT
        </div>
      </div>
    </Modal>
  );
};

export default ViewCart;
