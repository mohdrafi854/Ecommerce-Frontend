import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [addCart, setAddCart] = useState("");
  const navigate = useNavigate();
  const { updateCounter } = useCart();
  const [isLiked, setIsLiked] = useState([]);

  const addToCart = async (productId, quantity) => {
    try {
      const response = await axios.post("https://ecommerce-backend-delta-five.vercel.app/api/cart", {
        productId,
        quantity: Number(quantity),
      });

      setAddCart(response.data);

      const totalItems = response.data.items.reduce(
        (accu, curr) => accu + curr.quantity,
        0
      );
      updateCounter(totalItems);

      navigate("/cart");
    } catch (error) {
      console.error("Server Error:", error);
    }
  };

  const handleWishlist = async (productId) => {
    try {
      await axios.post("https://ecommerce-backend-delta-five.vercel.app/api/wishlist", {
        productId,
      });

      

      setIsLiked(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId])

     
     
    } catch (error) {
      console.error("Server Error:", error);
    }
  };

  return product ? (
    <div className="col-md-9 product-page">
      <div className="d-flex my-4">
        <div className="fw-bold">Showing All Products</div>
        <p className="mb-0 ms-3">(Showing {product.length} Products)</p>
      </div>

      <div className="row">
        {product?.map((product, index) => (
          <div className="col-md-3 mb-4" key={product._id}>
            <div className="position-relative">
              <div
                className="wishlist-block"
                onClick={() => handleWishlist(product._id)}
              >
                <i
                  class={`bi wishlist-icon ${
                    isLiked.includes(product._id) ? "bi-heart-fill text-danger" : "bi-heart"
                  }`}
                ></i>
              </div>
              <Link
                to={`/detail/${product._id}`}
                className="card rounded-0 border-0 text-decoration-none"
              >
                <div className="card-body p-0">
                  <img src={product.imageUrl} alt="" className="img-fluid" />
                  <div className="p text-center">{product.name}</div>
                  <div className="h5 text-center">&#8377;{product.price}</div>
                </div>
              </Link>
              <button
                className="btn btn-primary btn-block w-100 rounded-0 btn-dark-custom"
                onClick={() => addToCart(product._id, 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductCard;
