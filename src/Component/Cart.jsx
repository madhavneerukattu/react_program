const Cart = ({ cart, increaseQty, decreaseQty }) => {
  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart is empty 🛒 </h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={styles.item}>
          <img src={item.image} alt={item.title} style={styles.img} />

          <div style={{ minWidth: "200px" }}>
            <h4>{item.title}</h4>
            <p>Price: ₹ {item.price}</p>

            {/* QUANTITY CONTROLS */}
            <div style={styles.qtyBox}>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <p>
              Total: ₹ {item.price * item.quantity}
              
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "15px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px"
  },
  img: {
    width: "80px",
    height: "80px",
    objectFit: "cover"
  },
  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0"
  }
};

export default Cart;
