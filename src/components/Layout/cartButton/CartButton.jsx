import CartIcon from "../../Cart/cartIcon";
import styles from './cartButton.module.css'

const CartButton = (props) => {
    return(
        <button className={styles.button} onClick={props.onConfirm}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                2
            </span>
        </button>
    )
};

export default CartButton;