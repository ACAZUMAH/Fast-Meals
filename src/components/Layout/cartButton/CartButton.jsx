import { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/cartIcon";
import styles from "./cartButton.module.css";
import CartContext from "../../../Context/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [animete, setAnimete] = useState(false);
  
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    };
    setAnimete(true);
    const timer = setTimeout(() => {
        setAnimete(false);
    }, 300);
    return () => {
        clearTimeout(timer)
    };
  }, [items]);

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className={`${styles.button} ${animete ? styles.bump : ''}`}
      onClick={props.onConfirm}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
