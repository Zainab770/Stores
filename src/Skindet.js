import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'; 
import { useNavigate } from 'react-router-dom';
const Skindet = () => {
    const { id } = useParams();
    const [fruit, setFruit] = useState(null);
    const [wishlist, setWishlist] = useState(false);
    const navigate = useNavigate();
    const FetchProductdet = async () => {
        const { data } = await axios.get(`http://localhost:9500/fruitfetch/${id}`);
        setFruit(data);
        setWishlist(data.wishlist || false);
    };
    useEffect(() => {
        FetchProductdet();
    }, [id]);
    const toggleWishlist = async () => {
        try {
          const newWishlistValue = !wishlist;
          const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
          let updatedWishlistItems;
          if (newWishlistValue) {
            updatedWishlistItems = [...wishlistItems, fruit];
          } else {
            updatedWishlistItems = wishlistItems.filter(item => item._id !== fruit._id);
          }
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
          setWishlist(newWishlistValue);
          await axios.put(`http://localhost:9500/updateWishlist/${fruit._id}`, { wishlist: newWishlistValue });
          window.dispatchEvent(new Event("wishlistUpdated"));
        } catch (error) {
          console.error("Error updating wishlist:", error);
          alert("Failed to update wishlist");
        }
      };
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
    return (
        <div>
            {fruit ? (
                <div className="flex-container">
                    <div className="flex-image">
                        <img
                            src={fruit.image}
                            alt={fruit.title}
                            className="flex-img"
                        />
                    </div>
                    <div className="flex-details">
                        <h4 className="flex-title">{fruit.title}</h4>
                        <p style={{color:"black"}}><b>Code:</b> {fruit.code}</p>
                        <p style={{color:"black"}}><b>Price:</b> {fruit.price}</p>
                        <p style={{color:"black"}}><b>Category:</b> {fruit.category}</p>
                        <p style={{color:"black"}}><b>Subcategory:</b> {fruit.subcategory}</p>
                        <div className="flex-rating">
                            <strong>Rating:</strong>
                            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "gray" }} />
                        </div>
                        <div className="flex-wishlist" onClick={toggleWishlist}>
                            <FontAwesomeIcon icon={wishlist ? faHeartSolid : faHeartOutline} />
                            <span className="flex-wishlist-text">
                                {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
                            </span>
                        </div>
                        <div className="flex-button">
                            <button onClick={() => addToCart(fruit._id)} className="btn btn-success flex-addtocart">
                                Add to Cart
                            </button>
                        </div>
                        <h4 className="flex-shipping-title">Shipping</h4>
                        <ul className="flex-shipping-list">
                            <h6>Shipping & Handling</h6>
                            <li>Our aim is to deliver the parcel to our valued customers at our earliest...</li>
                            <li>Tracking details will be shared via email once shipped.</li>
                            <li>For COD orders, please pay the rider before opening the package.</li>
                            <h6 style={{marginTop:"10px"}}>Local orders</h6>
                            <li>Karachi: 2–3 working days. Rest of Pakistan: 3–5 days.</li>
                            <li>Delivery Charges: PKR 99 flat nationwide.</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p>loading......</p>
            )}
        </div>
    );
};
export default Skindet;
