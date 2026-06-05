import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import CartItemCard from "../components/Cart/CartItemCard.jsx";
import styles from "./cart.module.css";

function Cart() {
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;

  return (
    <div>
      <h1 className={styles.cartHeader}>Shopping Cart</h1>
      <div className={styles.itemsContainer}>
        {cart.map((item) => (
          <CartItemCard
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
