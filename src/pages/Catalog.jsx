import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Catalog() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [sortType, setSortType] = useState("");

  let filteredProducts = products.filter((product) => {
    const matchesPrice =
      (!minPrice || product.price >= Number(minPrice)) &&
      (!maxPrice || product.price <= Number(maxPrice));

    const matchesRating =
      !minRating || product.rating >= Number(minRating);

    return matchesPrice && matchesRating;
  });

  if (sortType === "az") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortType === "za") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortType === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortType === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Catalog</h1>

      {/* 🔽 ФИЛЬТРЫ */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ marginLeft: "10px" }}
        />

        <input
          type="number"
          placeholder="Min rating"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* 🔽 СОРТИРОВКА */}
      <div style={{ marginBottom: "20px" }}>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="priceLow">Price ↑</option>
          <option value="priceHigh">Price ↓</option>
        </select>
      </div>

      {/* 🔽 ТОВАРЫ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;