import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import styles from "./itemcard.module.css";

function ItemCard({ id, title, price, imageUrl }) {
  const [quantity, setQuantity] = useState(1);
  const cartContext = useContext(CartContext);

  function addToCart() {
    cartContext.addToCart({ id, price, quantity });
  }

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Image" />
      <p>{title}</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.inputSection}>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
