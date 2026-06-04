import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";
import CartContextProvider from "./CartContext.jsx";

function App() {
  return (
    <div>
      <CartContextProvider>
        <Navbar />
        <Outlet />
      </CartContextProvider>
    </div>
  );
}

export default App;
