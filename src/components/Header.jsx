import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";

function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header className="header">
      <nav className="nav">
        {/* Левая часть */}
        <div className="brand">
          <div className="brand-icon">🐾</div>
          <Link to="/" className="logo">
            PawsStore
          </Link>
        </div>

        {/* Центр */}
        <div className="menu">
          <Link to="/">Shop</Link>
          <Link to="/">Categories</Link>
          <Link to="/">Deals</Link>
          <Link to="/">About</Link>
        </div>

        {/* Правая часть */}
        <div className="header-actions">
          <button type="button" className="icon-button" aria-label="Search">
            🔍
          </button>

          <Link to="/cart" className="icon-button cart-icon" aria-label="Cart">
            🛒
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;