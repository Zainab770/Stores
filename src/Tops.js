import React from "react";
import { Link } from "react-router-dom";
import img1 from './f1.jpg';
import img2 from './pumpkins.jpg';
import img3 from './Red Lentils.jpg';
import img4 from './Corn Grits.jpg';
import img5 from './Cheddar Cheese.jpg';
import img6 from './Herbs.jpeg';
import img7 from './Almond Butter.jpg';
import img8 from './Eucalyptus Oil.jpg';
import img9 from './coffee.jpg';
import img10 from './Acne.jpeg';
import Personal from "./Personal";
const Tops = () => {
  return (
    <>
    <div className="subcategories-container">
      <h2 className="main-heading">Top Sub Categories</h2>
      <div className="subcategories">
        <div className="subcategory">
          <img src={img1} alt="Fruits" />
          <div className="subcategory-text">
            <h4>Root Vegetables</h4>
            <Link to="/fruitveg">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img2} alt="Vegetables" />
          <div className="subcategory-text">
            <h4>Fruiting Vegetables</h4>
            <Link to="/fruitveg">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img4} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Corn Products</h4>
            <Link to="/grainpulses">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img5} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Organic Cheese Products</h4>
            <Link to="/dairyproducts">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img3} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Lentils</h4>
            <Link to="/grainpulses">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img6} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Herbs</h4>
            <Link to="/herbspices">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img7} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Nut Butters</h4>
            <Link to="/Oilnut">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img8} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Essential oil</h4>
            <Link to="/Oilnut">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img9} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Coffee</h4>
            <Link to="/beverages">Shop Now</Link>
          </div>
        </div>
        <div className="subcategory">
          <img src={img10} alt="Dry Fruits" />
          <div className="subcategory-text">
            <h4>Skin solutions</h4>
            <Link to="/skinproducts">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
    <Personal/>
    </>
  );
};
export default Tops;
