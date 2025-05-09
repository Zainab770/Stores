import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom"; 

const Shop = () => {
  return (
    <>
      <div className="shop">
        <Link to="/fruitveg"><button type="button" className="btn btn-outline-success">Fruits & Veges</button></Link>   
        <Link to="/dairyproducts"><button type="button" className="btn btn-outline-success">Dairy Products</button></Link>   
        <Link to="/grainpulses"><button type="button" className="btn btn-outline-success">Grains & Pulses</button></Link>   
        <Link to="/herbspices"><button type="button" className="btn btn-outline-success">Herbs & Spices</button></Link>   
        <Link to="/beverages"><button type="button" className="btn btn-outline-success">Beverages</button></Link>   
        <Link to="/Oilnut"><button type="button" className="btn btn-outline-success">Oils & Nuts</button></Link>   
        <Link to="/skinproducts"><button type="button" className="btn btn-outline-success">Skincare Products</button></Link>
      </div>
      <Search />
    </>
  );
};

export default Shop;
