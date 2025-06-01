import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("https://ecommerce-backend-delta-five.vercel.app/api/cart");
        setData(response.data);
      } catch (error) {
        console.error("server Error", error);
      }
    };
    fetchCartData();
  }, []);

  const handleRemoveCart = async (cartId) => {
    try {
      await axios.delete(
        `https://ecommerce-backend-delta-five.vercel.app/api/cart/item/${cartId}`
      );
    } catch (error) {
      console.error("Delete Error", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {data.map((cart, index) => (
            <div className="mt-4" key={index}>
              {cart.items?.map((item, i) => (
                <div className="card mb-4" key={i}>
                <div className="card-body">
                  <h5>{item?.productId?.name}</h5>
                  <p>Price: ₹{item?.productId?.price}</p>
                  <p>Qty: {item.quantity}</p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleRemoveCart(item?._id)}
                  >
                    Remove from Cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-3"
                  >
                    Move to Wishlist
                  </button>
                </div>

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
