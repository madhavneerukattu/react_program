import { useState } from "react";

const Admin = ({ products, setProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // ADD PRODUCT
  const addProduct = () => {
    if (!title || !price || !image) return;

    const newProduct = {
      id: Date.now(),
      title,
      price: Number(price),
      image,
    };

    setProducts([...products, newProduct]);

    setTitle("");
    setPrice("");
    setImage("");
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>

      {/* ADD PRODUCT FORM */}
      <div style={styles.form}>
        <input
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* PRODUCT LIST */}
      <h3>Products</h3>

      {products.map((p) => (
        <div key={p.id} style={styles.row}>
          <span>
            {p.title} – ₹{p.price}
          </span>
          <button onClick={() => deleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#222",
    color: "white",
    padding: "30px",
  },
  form: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    background: "#333",
    padding: "10px",
    marginTop: "8px",
  },
};

export default Admin;
