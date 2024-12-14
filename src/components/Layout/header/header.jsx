import React from 'react';
import styles from './header.module.css';
import Image from '../../../assets/meals.jpg';
import CartButton from '../cartButton/CartButton'

const Header = (props) => {
    return (
      <React.Fragment>
        <header className={styles.header}>
          <h2>Fast Meals</h2>
          <CartButton onConfirm={props.onShowCart} />
        </header>
        <div className={styles["main-image"]}>
          <img src={Image} alt="A table with meals" />
        </div>
      </React.Fragment>
    );
};

export default Header;