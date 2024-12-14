import Input from "../../UI/input/input";
import styles from "./itemForm.module.css";

const ItermForm = (props) => {
  return (
    <div className={styles.form}>
      <Input
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
    </div>
  );
};

export default ItermForm;
