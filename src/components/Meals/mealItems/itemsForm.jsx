import { useRef, useState } from "react";
import Input from "../../UI/input/input";
import styles from "./itemForm.module.css";

const ItermForm = (props) => {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;  
    const amountToNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      amountToNum < 1 ||
      amountToNum > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(amountToNum);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
  );
};

export default ItermForm;
