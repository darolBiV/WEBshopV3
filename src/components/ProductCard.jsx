import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.image} alt={product.title} width="150" />

      <h3>{product.title}</h3>
      <p>{product.subtitle}</p>
      <p>${product.price}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Link to={`/product/${product.id}`}>View</Link>
        <button type="button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;