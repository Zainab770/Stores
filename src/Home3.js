import React from "react";
import { Link } from "react-router-dom";
import img1 from './category1.jpg';
import img2 from './category2.jpg';
import img3 from './category3.jpg';
import img4 from './category4.jpg';
import img5 from './category5.jpg';
import img6 from './category6.webp';
import img7 from './category8.jpg';
import Home4 from "./Home4";


const Home3 = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Our categories</h1>
      <div className="categories">
        <div className="circle">
        <div className="img-wrapper">
            <img src={img1} alt="Category 1" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p> Fruits & Vegetables</p>
        </div>
        <div className="circle">
        <div className="img-wrapper">
            <img src={img2} alt="Category 2" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p>Dairy Products</p>
        </div>
        <div className="circle">
        <div className="img-wrapper">
            <img src={img3} alt="Category 3" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p>Grains & Pulses</p>
        </div>
        <div className="circle">
        <div className="img-wrapper">
            <img src={img4} alt="Category 4" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p> Herbs & Spices</p>
        </div>
        <div className="circle">
        <div className="img-wrapper">
            <img src={img5} alt="Category 5" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p> Beverages</p>
        </div>
        <div className="circle">
        <div className="img-wrapper">
            <img src={img6} alt="Category 6" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p>Oils & Nuts</p>
        </div>
        <div className="circle">
        <div className="img-wrapper">
            <img src={img7} alt="Category 7" className="rounded-circle" />
            <Link to="/shop" className="hover-text" style={{textDecoration:"none",color:"black"}}>Shop Now</Link>
          </div>
          <p>Skincare Products</p>
        </div>
      </div>
      <Home4/>
    </>
  );
}

export default Home3;
