import { Link } from "react-router";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { setSearchQuery } = useSearch();
  const { cartCount } = useCart();

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <header>
      <div className="container">
        <div className="headerWrap">
          <Link to={"/"} className="logo">
            MyShoppingSite
          </Link>
          <div className="header-center">
            <div className="inputWrap">
              <div className="btn-search">
                <i className="bi bi-search"></i>
              </div>
              <input
                type="text"
                className="input-search"
                placeholder="search"
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="header-right">
            <button type="button" className="btn-login">
              Login
            </button>
            
            <Link className="header-right-icon" to={"/wishlist"}>
              <i className="bi bi-heart"></i>
              <span className="heart-badge"></span>
            </Link>
            <Link className="header-right-icon" to={"/cart"}>
              <i className="bi bi-cart"></i>
              <span className="heart-badge">{cartCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
