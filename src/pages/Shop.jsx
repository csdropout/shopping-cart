import { useContext } from "react";
import ShopGrid from "../components/Shop/ShopGrid.jsx";
import styles from "./shop.module.css";

function Shop() {
  return (
    <div className="container">
      <h1 className={styles.heading}>Products</h1>
      <ShopGrid />
    </div>
  );
}

export default Shop;
