import React, { useState, useEffect } from 'react';

const Adds = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeAd = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className="floating-ad">
        <button className="close-btn" onClick={closeAd}>×</button>
        <img src="/images/organic-ad.jpg" alt="Organic Offer" />
        <div className="ad-content">
          <h4>Special Organic Deals!</h4>
          <p>Fresh, Natural & Delivered to You 🌿</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>
    )
  );
};

export default Adds;
