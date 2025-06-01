import { Link } from "react-router";

const Arrivals = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <Link
            to={`/listing`}
            className="card rounded-0 text-decoration-none card-arrivals border-0"
          >
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="https://imagescdn.allensolly.com/img/app/product/3/39746892-16792826.jpg?auto=format&w=390" alt="" width={120} height={150} className="img-fluid" />
                </div>

                <div className="flex-grow-1 ms-3 text-start">
                  <span>New Arrivals</span>
                  <h5>Summer Collection</h5>
                  <p>
                    Checkout our best winter collection to <br /> stay warm in
                    style this season
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <a href="#"></a>
        </div>
        <div className="col-md-5">
          <Link
            to={`/listing`}
            className="card rounded-0 text-decoration-none card-arrivals border-0"
          >
            <div className="card-body">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="https://imagescdn.allensolly.com/img/app/product/3/39826781-16609975.jpg?auto=format&w=390" alt="" width={120} height={150} className="img-fluid" />
                </div>

                <div className="flex-grow-1 ms-3 text-start">
                  <span>New Arrivals</span>
                  <h5>Summer Collection</h5>
                  <p>
                    Checkout our best winter collection to <br /> stay warm in
                    style this season
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;