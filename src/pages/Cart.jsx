import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import CartItemCard from "../components/Cart/CartItemCard.jsx";
import styles from "./cart.module.css";

function Cart() {
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;

  if (cart.length === 0) {
    return <p>There are no items in your cart!</p>;
  }

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
      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <div className={styles.rowsContainer}>
          <div className={styles.summaryRow}>
            <span>Item(s) subtotal</span>
            <span>${cartContext.getTotal()}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
          <span>Order total</span>
          <span>${cartContext.getTotal()}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
