import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import CartItemCard from "../components/Cart/CartItemCard.jsx";
import styles from "./cart.module.css";

function Cart() {
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <h1 className={styles.cartHeader}>Shopping Cart</h1>
        <svg
          className={styles.cartIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
        </svg>
        <p className={styles.noItemText}>There are no items in your cart!</p>
      </div>
    );
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
