import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Catalog.css";

function Catalog() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [sortType, setSortType] = useState("");

  let filteredProducts = products.filter((product) => {
    const matchesPrice =
      (!minPrice || product.price >= Number(minPrice)) &&
      (!maxPrice || product.price <= Number(maxPrice));

    const matchesRating = !minRating || product.rating >= Number(minRating);

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
    <div className="catalog-page">
      <h1 className="catalog-title">Catalog</h1>

      <div className="catalog-filters">
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="catalog-input"
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="catalog-input"
        />

        <input
          type="number"
          placeholder="Min rating"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="catalog-input"
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="catalog-select"
        >
          <option value="">Sort</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="priceLow">Price ↑</option>
          <option value="priceHigh">Price ↓</option>
        </select>
      </div>

      <div className="catalog-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;