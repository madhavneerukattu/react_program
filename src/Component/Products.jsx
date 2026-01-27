import { useState } from "react";
import Card from "./Card";

const Products = ({ products, addToCart }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // 🔍 FILTER LOGIC
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div style={styles.container}>
      <h2>Products</h2>

      {/* 🔍 SEARCH BAR */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* 🏷 CATEGORY FILTERS */}
      <div style={styles.filters}>
  <button onClick={() => setCategory("all")}>All</button>
  <button onClick={() => setCategory("men")}>Men</button>
  <button onClick={() => setCategory("women")}>Women</button>
  <button onClick={() => setCategory("shoes")}>Shoes</button>
</div>


      {/* 🛍 PRODUCTS GRID */}
      <div style={styles.grid}>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  search: {
    padding: "10px",
    width: "250px",
    marginBottom: "15px",
  },
  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
};

export default Products;
