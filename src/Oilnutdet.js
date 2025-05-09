import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'; 
const Oilnutdet = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [wishlist, setWishlist] = useState(false); 
    const navigate = useNavigate();
    const fetchProductDetails = async () => {
        const { data } = await axios.get(`http://localhost:9500/fruitfetch/${id}`);
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isInWishlist = wishlistItems.some(item => item._id === data._id);
        setProduct(data);
        setWishlist(isInWishlist);
      };
    useEffect(() => {
        fetchProductDetails();
    }, [id]);
    const toggleWishlist = async () => {
        try {
          const newWishlistValue = !wishlist;
          const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
          let updatedWishlistItems;
          if (newWishlistValue) {
            updatedWishlistItems = [...wishlistItems, product];
          } else {
            updatedWishlistItems = wishlistItems.filter(item => item._id !== product._id);
          }
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlistItems));
          setWishlist(newWishlistValue);
          await axios.put(`http://localhost:9500/updateWishlist/${product._id}`, { wishlist: newWishlistValue });
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
            {product ? (
                <div className="box-container">
                    <div className="box-image">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="box-image-style"
                        />
                    </div>
                    <div className="box-details">
                        <h4 className="box-title">{product.title}</h4>
                        <p className="box-code"><b>Code:</b> {product.code}</p>
                        <p className="box-price"><b>Price:</b> {product.price}</p>
                        <p className="box-category"><b>Category:</b> {product.category}</p>
                        <p className="box-subcategory"><b>Subcategory:</b> {product.subcategory}</p>

                        <div className="box-rating">
                            <strong className="rating-title">Rating:</strong>
                            <FontAwesomeIcon icon={faStar} className="rating-icon" />
                            <FontAwesomeIcon icon={faStar} className="rating-icon" />
                            <FontAwesomeIcon icon={faStar} className="rating-icon" />
                            <FontAwesomeIcon icon={faStar} className="rating-icon" />
                            <FontAwesomeIcon icon={faStar} className="rating-icon inactive" />
                        </div>

                        <div className="wishlist-button" onClick={toggleWishlist}>
                            <FontAwesomeIcon icon={wishlist ? faHeartSolid : faHeartOutline} />
                            <span className="wishlist-text">
                                {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
                            </span>
                        </div>

                        <div className="quantity-container">

                            <button onClick={() => addToCart(product._id)} className="btnss">
                                Add to Cart
                            </button>
                        </div>

                        <h4 className="shipping-heading">Shipping & Handling</h4>
                        <ul className="shipping-details">
                            <h6>Shipping & Handling</h6>
                            <li>You will receive a verification code (OTP) on your mobile number for order verification.</li>
                            <li>Tracking details will be shared via email once your order has been shipped.</li>
                            <li>For Cash on Delivery orders, please pay the rider before opening the package.</li>

                            <h6 className="local-orders">Local orders</h6>
                            <li>Delivery timeline for Karachi is 2–3 working days; rest of Pakistan is 3–5 days.</li>
                            <li>Flat shipping rate of PKR 99 nationwide.</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Oilnutdet;
