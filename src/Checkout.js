import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from "./cash-on-delivery.webp";
import { useNavigate } from 'react-router-dom';
function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [errors, setErrors] = useState({});
  const [fullname, setFullname] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [instruction, setInstruction] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const { data } = await axios.get(`http://localhost:9500/cart/${userId}`);
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };
    fetchCart();
  }, []);
  const navigate = useNavigate();


  const calculateItemTotal = (price, qty) => {
    const numeric = parseFloat(price.replace(/[^\d.-]/g, ''));
    return numeric * qty;
  };

  const invoiceTotal = cartItems
    .reduce((sum, item) => sum + calculateItemTotal(item.price, item.quantity), 0)
    .toFixed(2);

  const deliveryCharges = 0;
  const netTotal = (parseFloat(invoiceTotal) + deliveryCharges).toFixed(2);

  const handleorder = async (e) => {
    e.preventDefault();
    console.log(fullname, contactNumber, address, city, instruction);
    try {
      await axios.post("http://localhost:9500/detail", {
        fullname,
        contactNumber,
        address,
        instruction,
        city,
        cartItems,
      totalAmount: parseFloat(netTotal),
      status: "Processing"
      });
      alert("Order placed successfully!");
      navigate('/success');
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <div className="checkoutPage-container">
      <div className="checkoutPage-wrapper">
        <form onSubmit={handleorder} className="checkoutPage-formSection">
          <h3>Delivery Details</h3>

          <input
            type="text"
            name="fullName"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name*"
          />

          <input
            type="text"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Contact Number*"
          />

          <select
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City*</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Multan">Multan</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Peshawar">Peshawar</option>
          </select>

          <textarea
            name="address"
            placeholder="Address*"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <textarea
            name="instructions"
            placeholder="Special Instructions"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
          />

          <div className="checkoutPage-paymentMethod">
            <h4>Payment Method</h4>
            <div className="paymentMethod">
              <img
                src={img1}
                alt="Cash on Delivery"
                style={{ width: '50px', height: '50px', marginRight: '8px' }}
              />
              <span style={{ fontSize: '10px', lineHeight: '50px' }}>Cash on Delivery</span>
            </div>
          </div>

          <button type="submit" className="checkoutPage-btn">
  PLACE ORDER
</button>

        </form>

        <div className="checkoutPage-summarySection">
          <h3 className="checkoutPage-summaryTitle">Order Summary</h3>
          <div className="checkoutPage-itemsList">
            {cartItems.map(item => (
              <div key={item._id} className="checkoutPage-summaryItem">
                <span className="checkoutPage-itemTitle">{item.title} × {item.quantity}</span>
                <span className="checkoutPage-itemPrice">Rs. {calculateItemTotal(item.price, item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr />
          <div className="checkoutPage-totalSection">
            <div className="checkoutPage-totalItem">
              <span>Invoice Total</span>
              <span className="checkoutPage-totalPrice">Rs. {invoiceTotal}</span>
            </div>
            <div className="checkoutPage-totalItem">
              <span>Delivery Charges</span>
              <span className="checkoutPage-totalPrice">Rs. {deliveryCharges}</span>
            </div>
            <hr />
            <div className="checkoutPage-totalItem finalTotal">
              <span><strong>Net Total</strong></span>
              <span className="checkoutPage-finalTotalPrice"><strong>Rs. {netTotal}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
