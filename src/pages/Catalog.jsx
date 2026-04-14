import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Catalog() {
  return (
    <div style={{ padding: "20px" }}>
      
      <h1>Catalog</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}
export default Catalog;