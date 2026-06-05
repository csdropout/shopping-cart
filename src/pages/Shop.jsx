import { useContext } from "react";
import ShopGrid from "../components/Shop/ShopGrid.jsx";

function Shop() {
  return (
    <div className="container">
      <h1>Products</h1>
      <ShopGrid />
    </div>
  );
}

export default Shop;
