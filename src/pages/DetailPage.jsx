import { useEffect, useState } from "react";
import Header from "../component/Header";
import { useParams, Link } from "react-router";
import axios from "axios";

const DetailPage = () => {
    const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
        try {
             const response = await axios.get("https://ecommerce-backend-delta-five.vercel.app/api/products")
             setData(response.data)
        } catch (error) {
            console.error("Server Error", error);
        }
    }
    fetchData()
   
  }, [data])

  


  const productId = useParams();



  const productDetails = data?.find(
    (product) => product._id === productId.productId
  );

  return (
    <>
    <div className="listing-bg">
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-md-9">
            <div className="bg-white p-4">
              <div className="row">
                <div className="col-md-4">
                  <img src={productDetails?.imageUrl} alt="" className="img-fluid" />
                  <button className="btn btn-primary w-100 mt-4 my-2">
                    Buy Now
                  </button>
                  <button className="btn btn-secondary w-100 my-2">
                    Add to Cart
                  </button>
                </div>
                <div className="col-md-8">
                  <h5>{productDetails?.name}</h5>
                  <div>{productDetails?.rating} *****</div>
                  <div>
                    {productDetails?.price} <br />
                    <span>50% off</span>
                  </div>
                  <div>
                    <span>Quantity:</span>
                    <span>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </span>
                  </div>
                  <div className="size-block">
                    <div>Size:</div>
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          S
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          M
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault3"
                        >
                          XL
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault4"
                        >
                          XXL
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="facility-block">
                    <ul className="list-unstyled d-flex mb-0 facility-list">
                      <li>
                        <span className="icon-bg">
                          <i className="icon-return"></i>
                        </span>
                        <p>
                          10 Days <br /> Returnable
                        </p>
                      </li>
                      <li>
                        <span className="icon-bg">
                          <i className="icon-pay"></i>
                        </span>
                        <p>
                          Pay on <br /> Delivery
                        </p>
                      </li>
                      <li>
                        <span className="icon-bg">
                          <i className="icon-delivery"></i>
                        </span>
                        <p>
                          Free <br /> Delivery
                        </p>
                      </li>
                      <li>
                        <span className="icon-bg">
                          <i className="icon-secure"></i>
                        </span>
                        <p>
                          Secure <br /> Payment
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="desc-detail">
                    <h6>Description:</h6>
                    <ul>
                      <li>
                        STYLE REDEFINED: Elevate your look with our versalite
                        Bomber jacket. Combining timeless design with modern
                        flair, it offers a cool, effortless style and
                        long-lasting durability.
                      </li>
                      <li>
                        ALL-WEATHER READY: Stay comfortable in any weather with
                        its wind-resistant and water-repellent features, perfect
                        for transitioning between seasons.
                      </li>
                      <li>
                        UNPARALLELED COMFORT: Enjoy a snug, non-restrictive fit
                        and premium materials for a cozy experience year-round.
                      </li>
                      <li>
                        VERSATILE ESSENTIAL:Ideal for any occasion, from casual
                        outings to semi-formal events. Pair it with jeans or
                        dress it up-it's a wardrobe staple.
                      </li>
                      <li>
                        TRAVEL-FRIENDLY: Lightweight and easy to pack, it's the
                        perfect travel companion for style on the go. Redefine
                        your fashion standards with this chic, versatile jacket.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div className="related-product">
                <h5>More items you may like in apparel</h5>
                <div className="row">
                  <div className="col-md-3">
                    <Link
                      to={`/`}
                      className="card rounded-0 border-0 mb-4 text-decoration-none"
                    >
                      <div className="card-body p-0">
                        <img
                          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/20/eGmmb5UO_72627b9530ac4d7cb5bc311a5840b211.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="p text-center">Men Premium Jacket</div>
                        <div className="h5 text-center">&#8377;2000</div>
                        <button className="btn btn-dark btn-block w-100 rounded-0 btn-dark-custom">
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to={`/`}
                      className="card rounded-0 border-0 mb-4 text-decoration-none"
                    >
                      <div className="card-body p-0">
                        <img
                          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/20/eGmmb5UO_72627b9530ac4d7cb5bc311a5840b211.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="p text-center">Men Premium Jacket</div>
                        <div className="h5 text-center">&#8377;2000</div>
                        <button className="btn btn-dark btn-block w-100 rounded-0 btn-dark-custom">
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to={`/`}
                      className="card rounded-0 border-0 mb-4 text-decoration-none"
                    >
                      <div className="card-body p-0">
                        <img
                          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/20/eGmmb5UO_72627b9530ac4d7cb5bc311a5840b211.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="p text-center">Men Premium Jacket</div>
                        <div className="h5 text-center">&#8377;2000</div>
                        <button className="btn btn-dark btn-block w-100 rounded-0 btn-dark-custom">
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to={`/`}
                      className="card rounded-0 border-0 mb-4 text-decoration-none"
                    >
                      <div className="card-body p-0">
                        <img
                          src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/20/eGmmb5UO_72627b9530ac4d7cb5bc311a5840b211.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="p text-center">Men Premium Jacket</div>
                        <div className="h5 text-center">&#8377;2000</div>
                        <button className="btn btn-dark btn-block w-100 rounded-0 btn-dark-custom">
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default DetailPage;