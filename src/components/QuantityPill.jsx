import styles from "./quantitypill.module.css";

function QuantityPill({ quantity, onIncrease, onDecrease }) {
  return (
    <div className={styles.pill}>
      <button onClick={() => onDecrease()}>-</button>
      <span>{quantity}</span>
      <button onClick={() => onIncrease()}>+</button>
    </div>
  );
}

export default QuantityPill;
