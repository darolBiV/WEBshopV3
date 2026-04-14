import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        
        {/* ЛОГО */}
        <Link to="/" style={{ fontWeight: "bold", fontSize: "20px" }}>
          STORE
        </Link>

        {/* МЕНЮ */}
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Catalog</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </nav>

    </header>
  );
}

export default Header;