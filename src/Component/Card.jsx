const Card = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.title}
        style={styles.img}
      />

      {/* ✅ PRODUCT NAME (THIS WAS MISSING) */}
      <h3 style={styles.title}>{product.title}</h3>

      {/* PRICE */}
      <p style={styles.price}>₹ {product.price}</p>

      {/* BUTTON */}
      <button
        style={styles.btn}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  title: {
    marginTop: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000", // 👈 ensure visible
  },
  price: {
    fontSize: "16px",
    color: "#444",
    margin: "8px 0",
  },
  btn: {
    padding: "8px 16px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Card;
