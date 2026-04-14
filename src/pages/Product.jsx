import { useParams } from "react-router-dom";
import { products } from "../data/products";

function Product() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 style={{ padding: "20px" }}>Product not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <img src={product.images[0]} alt="" width="300" />

        <div>
          <p>{product.subtitle}</p>
          <p>${product.price}</p>
          <p>{product.rating}</p>
          <p>{product.description}</p>

          <button style={{ marginTop: "20px" }}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;