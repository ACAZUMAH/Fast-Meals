import React, { useContext } from "react";
import styles from "./cart.module.css";
import CartModel from "../UI/model/model";
import CartItem from "./cartItem";
import CartContext from "../../Context/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <CartModel onHideCart={props.onHideCart}>
      <ul className={styles["cart-items"]}>
        { cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        )) }
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={styles.button} onClick={props.onHideCart}>
            Order
          </button>
        )}
      </div>
    </CartModel>
  );
};

export default Cart;
