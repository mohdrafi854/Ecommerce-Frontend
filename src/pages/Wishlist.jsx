import axios from "axios";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishData, setWishData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ecommerce-backend-delta-five.vercel.app/api/wishlist");
        setWishData(response.data);
      } catch (error) {
        console.error("Server Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="listing-bg py-5">
      <div className="container mt-4">
        <h1 className="text-center mb-4">My Wishlist</h1>
        <div className="row">
          {wishData?.map((data, index) => (
              <div className="col-md-3" key={index}>
                <div className="card border-0">
                  <div className="card-body p-0 text-center">
                    <img
                      src={data.productId.imageUrl}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="card-title">{data.productId.name}</div>
                    <div className="h4">&#8377; {data.productId.price}</div>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-0 btn-block w-100"
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
