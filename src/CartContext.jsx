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
        getCount,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartContextProvider;
