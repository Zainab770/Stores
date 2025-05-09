import React from "react";
import { Link } from "react-router-dom";
import img1 from './organic3.webp';
import Tops from "./Tops";
const Top = () => {
  return (
    <>
      <div className="promotion py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={img1}  alt="Best Organic Product"className="img-fluid rounded"  />
            </div>
            <div className="col-md-6 text-center">
              <h2 className="mb-3" style={{ color: "#2e7d32", fontWeight: "bold" }}>
                Best Organic Products
              </h2>
              <p style={{ fontSize: "18px", color: "#333" }}>
                100% Pure, Natural and Healthy Choices for Your Family!
              </p>
              <Link to="/shop" className="btn btn-success mt-3">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Tops/>
    </>
  );
};

export default Top;
