import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";
import CartContextProvider from "./CartContext.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="content">
      <CartContextProvider>
        <Navbar />
        <Outlet />
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
