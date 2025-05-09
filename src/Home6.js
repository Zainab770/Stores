import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Home5 from './Home5';

const Home6 = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  const fetchProducts = (category = '') => {
    let url = 'http://localhost:9500/productsfetch';
    if (category) {
      url += `?category=${category}`;
    }
    axios.get(url)
      .then(res => {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        const wishlistIds = wishlistItems.map(item => item._id);
  
        const updatedProducts = res.data.map(product => ({
          ...product,
          wishlist: wishlistIds.includes(product._id) 
        }));
  
        setProducts(updatedProducts);
        setActiveCategory(category);
      });
  };
  const handleWishlist = async (id) => {
    try {
      const currentItem = products.find(item => item._id === id);
      const newWishlistValue = !currentItem.wishlist;
      const updatedFruit = products.map(item => 
        item._id === id ? { ...item, wishlist: newWishlistValue } : item
      );
      setProducts(updatedFruit);
      const wishlistItems = updatedFruit.filter(item => item.wishlist);
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
      await axios.put(`http://localhost:9500/updateWishlist/${id}`, { wishlist: newWishlistValue });
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (error) {
      console.error("Error updating wishlist:", error);
      alert("Failed to update wishlist");
    }
  };
  const addToCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
      alert('Please login first');
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
  useEffect(() => {
    fetchProducts("Best Seller"); 
  }, []);

  return (
    <>
    <div className="main-container">
      <div className="sidebar">
        <button onClick={() => fetchProducts('Best Seller')}
          className={activeCategory === 'Best Seller' ? 'active' : ''}>Best Seller</button>
        <button onClick={() => fetchProducts('Featured')}
          className={activeCategory === 'Featured' ? 'active' : ''}>Featured</button>
        <button onClick={() => fetchProducts('New')}
          className={activeCategory === 'New' ? 'active' : ''}>New</button>
        <button onClick={() => fetchProducts('')}
          className={activeCategory === '' ? 'active' : ''}>All</button>
      </div>

      <div className="container pro-container">
      <div className="pro-row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
  {products.map((p) => (
    <div key={p._id} style={{ flex: "1 1 220px", maxWidth: "250px" }}>

              <div
                className="card products-card"
                style={{
                  border: "none",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="card-body text-center">
                  <div style={{ position: "relative" }}>
                    {p.category && (
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          backgroundColor:
                            p.category === "Best Seller"
                              ? "green"
                              : p.category === "Featured"
                              ? "Red"
                              : p.category === "New"
                              ? "Blue"
                              : "green",
                          color: "white",
                          padding: "2px 8px",
                          fontSize: "12px",
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {p.category}
                      </div>
                    )}
                    <img
                      src={p.image}
                      className="card-img-top"
                      style={{ height: "200px", width: "100%" }}
                      alt={p.title}
                    />
                    <div
                      onClick={() => handleWishlist(p._id)}
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        cursor: "pointer",
                        fontSize: "24px",
                        color: p.wishlist ? "red" : "white",
                        backgroundColor:"green",
                        height:"30px",
                        width:"40px",
                      }}
                    >
                      <FontAwesomeIcon icon={p.wishlist ? faHeartSolid : faHeartOutline} />
                    </div>
                    <div
                        onClick={() => addToCart(p._id)}
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
                  <h5 className="card-title" style={{ marginTop: "10px" }}>{p.title}</h5>
                  <p className="card-text" style={{ color: "black", marginTop: "-10px" }}>
                    Price: {p.price}
                  </p>
                  <div style={{marginTop:"-15px"}}>
                    {[...Array(4)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "gold" }} />
                    ))}
                    <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
                  </div>
                  <Link to={`/for/${p._id}`}>
                    <button style={{backgroundColor:"green",color:"white",border:"none",padding:"10px",marginTop:"10px"}}>See Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
    <Link to="/shop">
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Shop Now
      </button>
    </Link>
  </div>
    </div>
    <Home5/>
    </>
  );
};

export default Home6;
