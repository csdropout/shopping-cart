import { NavLink } from "react-router";
import styles from "./navbar.module.css";

function Navbar() {
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
        Cart
      </NavLink>
    </div>
  );
}

export default Navbar;
