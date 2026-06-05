import { NavLink } from "react-router";
import styles from "./navbar.module.css";
import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";

function Navbar() {
  const cartProvider = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="shop"
      >
        Shop
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        to="cart"
      >
        Cart <div className={styles.cartCount}>{cartProvider.getCount()}</div>
      </NavLink>
    </div>
  );
}

export default Navbar;
