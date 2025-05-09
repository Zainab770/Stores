import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Allpro = ({ searchTerm, sortOption }) => {
  const [fruit, setFruit] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedAndFilteredProducts, setSortedAndFilteredProducts] = useState([]);
  const productsPerPage = 50;
  const navigate = useNavigate();
  const addToCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (!user) {
      alert('Please login or register first');
      navigate("/login");
      return;
    }
  
    try {
      await axios.post(`http://localhost:9500/cart/${productId}`, {
        userId: user._id
      });
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart', error);
      alert('Failed to add to cart');
    }
  };
  const fetchdata = async () => {
    try {
      const { data } = await axios("http://localhost:9500/fruitfetch");
      const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
      const wishlistIds = wishlistItems.map(item => item._id);
      const updatedData = data.map(item => ({
        ...item,
        wishlist: wishlistIds.includes(item._id)
      }));
      setFruit(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    const updatedProducts = getSortedAndFilteredProducts();
    setSortedAndFilteredProducts(updatedProducts);
  }, [searchTerm, sortOption, fruit]);

  const handleWishlist = async (id) => {
    try {
      const currentItem = fruit.find(item => item._id === id);
      const newWishlistValue = !currentItem.wishlist;
      const updatedFruit = fruit.map(item => 
        item._id === id ? { ...item, wishlist: newWishlistValue } : item
      );
      setFruit(updatedFruit);
      const wishlistItems = updatedFruit.filter(item => item.wishlist);
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      await axios.put(`http://localhost:9500/updateWishlist/${id}`, { wishlist: newWishlistValue });
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (error) {
      console.error("Error updating wishlist:", error);
      alert("Failed to update wishlist");
    }
  };
  const getSortedAndFilteredProducts = () => {
    let filtered = fruit || [];
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortOption === "Price: Low to High") {
      return [...filtered].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === "Price: High to Low") {
      return [...filtered].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortOption === "Newest") {
      return [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      return filtered;
    }
  };
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Array.isArray(sortedAndFilteredProducts) 
    ? sortedAndFilteredProducts.slice(indexOfFirstProduct, indexOfLastProduct) 
    : [];
  const totalPages = Math.ceil(sortedAndFilteredProducts.length / productsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
     <div className="container pro-container">
  <div className="pro-row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
    {currentProducts.map((item) => (
      <div key={item._id} style={{ flex: "1 1 220px", maxWidth: "250px" }}>
        <div className="card" style={{ width: "100%", border: "none" }}>
          <div className="card-body text-center">
            <div style={{ position: "relative" }}>
              <img
                src={item.image}
                className="card-img-top"
                style={{ height: "200px", width: "100%" }}
                alt={item.title}
              />
              <div
                onClick={() => handleWishlist(item._id)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  height:"30px",
                  width:"40px",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: item.wishlist ? "red" : "white",
                  backgroundColor:"green",
                }}
              >
                <FontAwesomeIcon icon={item.wishlist ? faHeartSolid : faHeartOutline} />
              </div>
              <div
                onClick={() => addToCart(item._id)}
                style={{
                  position: "absolute",
                  top: "35px",
                  right: "0",
                  color: "white",
                  width: "40px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  backgroundColor:"green",
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>

            <h5 className="card-title" style={{ marginTop: "10px" }}>
              {item.title}
            </h5>
            <p className="card-text" style={{ color: "black", marginTop: "-10px" }}>
              Price: {item.price}
            </p>
            <div style={{ marginTop: "-20px" }}>
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
              ))}
              <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
            </div>
            <Link to={`/form/${item._id}`}>
              <button style={{ marginTop: "10px", backgroundColor: "green", color: "white", border: "none", padding: "10px 10px" }}>
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => paginate(index + 1)}
        style={{
          margin: "0 5px",
          padding: "8px 16px",
          border: "1px solid gray",
          backgroundColor: currentPage === index + 1 ? "#28a745" : "#fff",
          color: currentPage === index + 1 ? "#fff" : "#000",
          cursor: "pointer",
        }}
      >
        {index + 1}
      </button>
    ))}
  </div>
</div>

    </>
  );
};

export default Allpro;
