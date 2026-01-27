import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>EZShop</h2>

      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/admin-login" style={styles.link}>Admin</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: "100%",
    background: "orange",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
  },
};


export default Header;
