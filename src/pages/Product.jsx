import { useParams } from "react-router-dom";
import { useContext } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import Slider from "../components/Slider";
import Accordion from "../components/Accordion";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 style={{ padding: "20px" }}>Product not found</h1>;
  }

  return (
    <div className="product-page">
      <h1 className="product-title">{product.title}</h1>

      <div className="product-layout">
        <Slider images={product.images} title={product.title} />

        <div className="product-info">
          <p className="product-subtitle">{product.subtitle}</p>

          <p className="product-price">${product.price}</p>

          <p className="product-rating">
            <strong>Rating:</strong> {product.rating}
          </p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="product-button"
          >
            Add to cart
          </button>

          <Accordion
            title="Extended description"
            content={product.description}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;