import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";

function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">
          STORE
        </Link>

        <div className="menu">
          <Link to="/">Catalog</Link>
          <Link to="/cart" className="cart">
            Cart ({totalItems})
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;