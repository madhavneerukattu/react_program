const Home = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Welcome to EZShop</h1>

      <img
        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900"
        alt="Fashion"
        style={styles.image}
      />

      <div style={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: ezshop@gmail.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Bangalore, India</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    width: "100%",
    minHeight: "calc(100vh - 70px)", // header height
    background: "#f5f5e9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
  },
  title: {
    color: "blue",
    fontSize: "42px",
    marginBottom: "20px",
  },
  image: {
    width: "380px",
    height: "420px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    marginBottom: "40px",
  },
  contact: {
    width: "100%",
    background: "limegreen",
    color: "white",
    padding: "40px 0",
    textAlign: "center",
  },
};

export default Home;
