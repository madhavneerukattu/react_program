const Header = () => {
  return (
    <header className="header">
      {/* LEFT ICONS */}
      <div className="header-left-icons">
        <a href="#">🏠 Home</a>
        <a href="#">🛒 Shop</a>
      </div>

      {/* CENTER EZSHOP */}
      <div className="header-center">
        EZShop
      </div>

      {/* RIGHT LOGO */}
      <div className="header-right">
        <img
          src="https://images.unsplash.com/photo-1444464666168-49d633b86797?w=200"
          alt="Shop Logo"
          className="shop-logo"
        />
      </div>
    </header>
  );
};

export default Header;
