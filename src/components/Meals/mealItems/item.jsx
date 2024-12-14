import styles from './item.module.css';
import ItermForm from './itemsForm';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price} </div>
        </div>
        <div>
            <ItermForm />
        </div>
      </li>
    );
};

export default MealItem;