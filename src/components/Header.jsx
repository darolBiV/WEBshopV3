import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ fontWeight: "bold", fontSize: "20px" }}>
          STORE
        </Link>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/">Catalog</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;