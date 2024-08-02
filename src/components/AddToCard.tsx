import React from "react";
import styles from "./AddToCard.module.css";
import Modal from "./Modal";
import { CartItem } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CardNFT from "./CardNFT";

import { useCart } from "@/context/CartContext";

interface Props {
  itemToAdd: CartItem | null;
  closeBuyModal: () => void;
  addItemToCart: () => void;
}

const onClickNft = () => {};
const AddToCard: React.FC<Props> = ({
  addItemToCart,
  closeBuyModal,
  itemToAdd,
}) => {
  const { state, dispatch } = useCart();

  const itemIsOnCart = (array: CartItem[], id: number | undefined): boolean => {
    return array.some((item) => item.id === id);
  };

  const removeFromCart = () => {
    if (itemToAdd) {
      dispatch({ type: "REMOVE_ITEM", payload: itemToAdd });
    }
  };

  return (
    <Modal isOpen={itemToAdd !== null}>
      <div className={styles.modalHeader}>
        <p className={styles.modalHeaderText}>Buy NFT</p>
        <div onClick={closeBuyModal} className={styles.closeButton}>
          <FontAwesomeIcon icon={faClose} size="1x" />
        </div>
      </div>

      {itemToAdd && (
        <CardNFT
          key={itemToAdd.id}
          listing={itemToAdd}
          onClickNft={onClickNft}
        />
      )}

      {itemIsOnCart(state.items, itemToAdd?.id) ? (
        <div onClick={removeFromCart} className={styles.actionButton}>
          REMOVE FROM CART
        </div>
      ) : (
        <div onClick={addItemToCart} className={styles.actionButton}>
          ADD TO CART
        </div>
      )}
    </Modal>
  );
};

export default AddToCard;
