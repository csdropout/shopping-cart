import { useState, useEffect } from "react";
import ItemCard from "./ItemCard.jsx";
import styles from "./shopgrid.module.css";

function ShopGrid() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStoreData() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`HTTP Status: ${response.status}`);
        let data = await response.json();
        setItems([...data]);
      } catch (error) {
        console.error(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStoreData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.image}
          />
        );
      })}
    </div>
  );
}

export default ShopGrid;
