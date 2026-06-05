import styles from "./cartitemcard.module.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import QuantityPill from "../QuantityPill";

function CartItemCard({ id, title, price, imageUrl, quantity }) {
  const cartContext = useContext(CartContext);

  const onIncrease = () => {
    cartContext.increaseQty(id);
  };

  const onDecrease = () => {
    cartContext.decreaseQty(id);
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} />
      <div className={styles.right}>
        <p>{title}</p>
        <p>${price.toFixed(2)}</p>
        <QuantityPill
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <button
          className={styles.removeBtn}
          onClick={() => cartContext.removeFromCart(id)}
        >
          Remove
        </button>
        <p>Subtotal: ${(quantity * price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItemCard;
