import { Link } from "react-router";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.tab} to="home">
        Home
      </Link>
      <Link className={styles.tab} to="shop">
        Shop
      </Link>
      <Link className={styles.tab} to="cart">
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
