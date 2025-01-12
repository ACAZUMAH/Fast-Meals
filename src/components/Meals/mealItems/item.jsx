import { useContext } from 'react';
import styles from './item.module.css';
import ItermForm from './itemsForm';
import CartContext from '../../../Context/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });  
    };

    return (
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price} </div>
        </div>
        <div>
            <ItermForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    );
    
};

export default MealItem;