import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Person";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import img1 from "./logo.jpeg";
import Banner from "./Banner";
import Register from "./Register";
import Login from "./Login";

const Mynav = () => {
  const [showForm, setShowForm] = useState(null);
  const [wishlistCount, setWishlistCount] = useState(0);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    if (auth) {
      setShowForm(null); 
    }
  }, [auth]);
  const handleWishlistCountChange = (count) => {
    setWishlistCount(count);
  };
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlistCount(wishlist.length);
    };
    updateWishlistCount();
    window.addEventListener("wishlistUpdated", updateWishlistCount);
    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlistCount);
    };
  }, []);  
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={img1} alt="Logo" />
          </Link>
          <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/privacy">Privacypolicy</Link>
              </li>
              <li className="nav-item">
  <Link className="nav-link blink-text" to="/preorder" style={{color:"red"}}>Preorder</Link>
</li>

              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
  <Link className="nav-link wishlist-wrapper" to="/wishlist">
    <FavoriteBorderIcon />
    <span className="wishlist-count">{wishlistCount}</span>
  </Link>
</li>
            </ul>
            <ul className="navbar-nav auth-links">
              {auth ? (
                <>
                  <li className="nav-item">
                    <Link onClick={logOut} className="nav-link">
                      <LogoutOutlinedIcon />
                    </Link>
                  </li>
                  <Link className="nav-link" to="/cart">
  <CartIcon
  />
</Link>
                </>
              ) : (
                <>
                  <li className="nav-item">
                  <Link className="nav-link" to="/register">
  
  Register
</Link>

                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/login">
  <LoginIcon />
</Link>

                  </li>
                  
                  <li className="nav-item">
  <Link className="nav-link" to="/cart">
  <CartIcon/>
  </Link>
</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Mynav;
