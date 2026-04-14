import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      
      <img src={product.image} alt="" width="150" />

      <h3>{product.title}</h3>
      <p>{product.subtitle}</p>

      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        View
      </Link>

    </div>
  );
}

export default ProductCard;