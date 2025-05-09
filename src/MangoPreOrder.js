import React, { useState, useEffect } from 'react';
import mangoBanner from './mango.jpg'; 
import axios from 'axios';
import Home2 from './Home2';

const MangoPreOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    address: '',
    message: '',
    mangoType: '',
    packagingType: '',
    weight: '',
    paymentProof: null
  });

  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    const order = localStorage.getItem("lastOrder");
    const orderStatus = localStorage.getItem("orderStatus");

    if (order && orderStatus !== "delivered") {
      setLastOrder(JSON.parse(order)); 
    }
  }, []); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'paymentProof') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = localStorage.getItem('user');
    if (!auth) {
      alert("Please login or register first to place an order.");
      window.location.href = "/register"; 
      return;
    }

    if (lastOrder && localStorage.getItem("orderStatus") !== "delivered") {
      alert("You already have a pending order!");
      return;
    }

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const res = await axios.post('http://localhost:9500/api/orders', form);
      alert('Order placed successfully! Wait for admin verification.');
      alert('Thank you for ordering!');
      localStorage.setItem("lastOrder", JSON.stringify(formData));
      localStorage.setItem("orderStatus", "placed");

      window.location.href = '/'; 
    } catch (err) {
      console.error('Error submitting order:', err);
      alert('Something went wrong while placing the order.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("lastOrder"); 
    localStorage.removeItem("orderStatus"); 
    window.location.href = "/login";
  };

  const markAsDelivered = () => {
    localStorage.setItem("orderStatus", "delivered");
    alert("Your order has been delivered!");
    setLastOrder(null); 
  };

  return (
    <>
      <div className="preorder-page">
        <div className="hero-banner">
          <img src={mangoBanner} alt="Mango Banner" className="banner-image" />
          <div className="hero-text">
            <h1>Fresh Mango Season 2025</h1>
            <p>Reserve your box of juicy mangoes now — delivered farm-fresh to your doorstep!</p>
            <a href="#order-form" className="banner-btn">Order Now</a>
          </div>
        </div>

        <div className="form-section" id="order-form">
          <h2>Pre-Order Now</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Select Mango Type:
              <select name="mangoType" value={formData.mangoType} onChange={handleChange} required>
                <option value="">-- Choose Mango Type --</option>
                <option value="Sindhri">Sindhri</option>
                <option value="Chaunsa">Chaunsa</option>
                <option value="Langra">Langra</option>
                <option value="Anwar Ratol">Anwar Ratol</option>
              </select>
            </label>
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <label style={{ flex: 1 }}>
                Packaging Type:
                <select name="packagingType" value={formData.packagingType} onChange={handleChange} required style={{ width: "100%" }}>
                  <option value="">-- Choose Packaging --</option>
                  <option value="Standard">Standard</option>
                  <option value="Gift Box">Gift</option>
                  <option value="Premium Box">Premium</option>
                </select>
              </label>

              <label style={{ flex: 1 }}>
                Weight:
                <select name="weight" onChange={handleChange} required style={{ width: "100%" }}>
                  <option value="">-- Select Weight --</option>
                  <option value="2kg">2kg</option>
                  <option value="5kg">5kg</option>
                  <option value="10kg">10kg</option>
                </select>
              </label>
            </div>

            <label>
              Full Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Contact Number:
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            </label>
            <label>
              Email Address:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Delivery Address:
              <textarea name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label>
              Message (Optional):
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <div className="payment-section">
              <h3>Payment Instructions</h3>
              <p style={{ color: "black" }}>Send payment via <strong>JazzCash / EasyPaisa</strong> to:</p>
              <p style={{ color: "black" }}><strong>0300-1234567</strong></p>
              <p style={{ color: "black" }}>Upload screenshot after sending payment:</p>
              <input type="file" name="paymentProof" accept="image/*" onChange={handleChange} required />
            </div>
            <p className="note">📦 Delivery may take up to <strong>1 month</strong> after order confirmation.</p>
<p className="note">📞 If you have any queries or need help, please contact us at <strong>0300-1234567</strong>.</p>

            <button type="submit">Place Pre-Order</button>
          </form>
        </div>
      </div>
      <Home2 />
    </>
  );
};

export default MangoPreOrder;
