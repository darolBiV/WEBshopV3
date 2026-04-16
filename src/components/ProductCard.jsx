import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <div className="title">{product.title}</div>
      <div>{product.subtitle}</div>
      <div className="price">${product.price}</div>

      <div className="buttons">
        <Link to={`/product/${product.id}`} className="btn">
          View
        </Link>

        <button className="btn" onClick={() => addToCart(product)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;