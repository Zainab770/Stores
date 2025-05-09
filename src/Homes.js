import React from "react";
import { Link } from "react-router";
import img1 from "./organic1.webp"; 
import img2 from "./organic2.webp"; 
import img3 from "./organic3.webp"; 
import img4 from "./organic4.webp"; 
import img5 from "./organic5.webp"; 
import img6 from "./organic6.webp"; 
import img7 from "./organic7.webp"; 
import Home1 from "./Home1";
const Homes = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide"  data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="image-container">
              <img src={img1} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Organic Fruits & Vegetables</h2>
                <p>Fresh and naturally grown fruits and vegetables without synthetic pesticides or fertilizers.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="image-container">
              <img src={img2} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Fresh Dairy Products</h2>
                <p>Milk, cheese, yogurt, and butter sourced from grass-fed, hormone-free cows. These dairy products are free from antibiotics and artificial additives, ensuring pure and natural nutrition.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="image-container">
              <img src={img3} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Whole Grains & Nuts</h2>
                <p>Wholesome grains like rice, wheat, and quinoa, along with nutrient-rich pulses such as lentils and chickpeas. They are free from chemical treatments and provide essential proteins and fibers.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="image-container">
              <img src={img4} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Organic Spices</h2>
                <p>Naturally dried and ground herbs and spices such as turmeric, cinnamon, basil, and black pepper. These enhance flavor while offering numerous health benefits due to their organic purity.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="image-container">
              <img src={img5} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Healthy Oils</h2>
                <p>Healthy and refreshing drinks, including herbal teas, fresh fruit juices, and green smoothies. They are made from chemical-free ingredients to support overall wellness.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="image-container">
              <img src={img6} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Natural Honey</h2>
                <p>Cold-pressed organic oils like olive oil, coconut oil, and flaxseed oil, along with nutritious nuts such as almonds, walnuts, and cashews. These provide healthy fats and essential nutrients.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="image-container">
              <img src={img7} className="blend-image" alt="Product Image"/>
              <div className="overlay">
                <h2>Herbal Teas</h2>
                <p>Natural beauty products including herbal soaps, essential oils, and body scrubs. Free from harmful chemicals, they nourish and protect the skin using organic ingredients.</p>
                <Link to="/shop" className="btn btn-success hover-effect" style={{ textDecoration: "none", color: "white",backgroundColor:"darkgreen" }}>
  Shop Now
</Link>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <Home1/>
    </>
  );
};

export default Homes;
