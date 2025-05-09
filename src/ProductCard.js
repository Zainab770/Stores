import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9500/fruitfetch")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products", error));
  }, []);

  const addToCart = (productId) => {
    if (!auth) {
      alert("You need to login first!");
      navigate("/login");
      return;
    }

    const userId = JSON.parse(auth)._id;
    axios.post("http://localhost:9500/api/cart/add", {
      userId,
      productId: productId,
      quantity: 1
    })
      .then((response) => {
        alert("Product added to cart");
      })
      .catch((error) => {
        console.error("Error adding product to cart", error);
      });
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product._id}>
          <div className="card">
            <img src={product.image} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <button className="btn btn-primary" onClick={() => addToCart(product._id)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
