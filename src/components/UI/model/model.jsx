import React from "react";
import ReactDom from 'react-dom';
import styles from './model.module.css';

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart}/>;
};

const OverLay = (props) => {
    return (
        <div className={styles.modal}>
            {props.children}
        </div>
    )
};

const portalElement = document.getElementById('overlay')

export const CartModel = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop onHideCart={props.onHideCart} />, portalElement)}
      {ReactDom.createPortal(<OverLay>{props.children}</OverLay>, portalElement)}
    </React.Fragment>
  );
};

export default CartModel;
