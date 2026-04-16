import { useParams } from "react-router-dom";
import { useContext } from "react";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import Slider from "../components/Slider";
import Accordion from "../components/Accordion";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 style={{ padding: "20px" }}>Product not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          alignItems: "flex-start",
        }}
      >
        <Slider images={product.images} title={product.title} />

        <div>
          <p>
            <strong>Subtitle:</strong> {product.subtitle}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            style={{ marginTop: "20px", padding: "10px 20px" }}
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