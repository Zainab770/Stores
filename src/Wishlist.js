import React, { useEffect, useState } from "react";
const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlist);
    const cart = JSON.parse(localStorage.getItem("cart")) || []; 
    setCartItems(cart);
  }, []);
  const handleAddToCart = (item) => {
    const updatedCart = [...cartItems, item]; 
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    alert(`${item.title} added to cart!`);
  };
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item, index) => (
            <div className="wishlist-item" key={index}>
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
              <p>Price: {item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
