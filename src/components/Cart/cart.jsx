import React from "react";
import styles from "./cart.module.css";
import CartModel from "../UI/model/model";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "shushi", amount: 2, price: 6.39 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <CartModel onHideCart={props.onHideCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.66</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.button} onClick={props.onHideCart}>
          Order
        </button>
      </div>
    </CartModel>
  );
};

export default Cart;
