import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./component/Header";

//pages
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Cart from "./pages/Cart";
import DetailPage from "./pages/DetailPage";
import Wishlist from "./pages/Wishlist";

import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <SearchProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/detail/:productId" element={<DetailPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist/>} />
            </Routes>
          </SearchProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
