import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cart.find((x) => x.id === item.id);
    if (itemInCart) {
      setCart([
        ...cart,
        { ...itemInCart, quantity: itemInCart.quantity + item.quantity },
      ]);
    } else setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            let selectedItem = { ...item, quantity: item.quantity - 1 };
            return selectedItem;
          } else return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const getCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const isItemInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        getCount,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartContextProvider;
