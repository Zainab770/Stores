import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = JSON.parse(localStorage.getItem('user'))._id;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get(`http://localhost:9500/cart/${userId}`);
        setCartItems(data);
      } catch (e) {
        console.error('Error fetching cart', e);
      }
    };
    fetchCartItems();
  }, [userId]);

  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    const cartItem = cartItems.find(i => i._id === cartItemId);
    try {
      await axios.put(
        `http://localhost:9500/cart/${userId}/${cartItem.productId}`,
        { quantity: newQuantity }
      );
      setCartItems(prev =>
        prev.map(item =>
          item._id === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (e) {
      console.error('Error updating quantity', e);
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:9500/cart/item/${cartItemId}`);
      setCartItems(prev => prev.filter(item => item._id !== cartItemId));
    } catch (e) {
      console.error('Error removing item', e);
    }
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const calculateItemTotal = (price, qty) => {
    const n = parseFloat(price.replace(/[^\d.-]/g, ''));
    return n * qty;
  };
  const subtotal = cartItems
    .reduce((sum, item) => sum + calculateItemTotal(item.price, item.quantity), 0)
    .toFixed(2);

  return (
    <div className="container mt-4">
      <h1 className="mb-4" style={{ textAlign: 'center' }}>Shopping Cart</h1>
      <table className="table table-striped">
        <thead className="table-light">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th style={{ minWidth: '160px' }}>Quantity</th>
            <th> Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? cartItems.map(item => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '60px', borderRadius: '4px' }}
                />
              </td>
              <td className="align-middle">{item.title}</td>
             
              <td className="align-middle">
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="btn btn-outline-secondary btn-sm"
                    disabled={item.quantity <= 1}
                  >−</button>
                  <input
                    type="text"
                    className="form-control text-center mx-2"
                    value={item.quantity}
                    readOnly
                    style={{ width: '50px' }}
                  />
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="btn btn-outline-secondary btn-sm"
                  >+</button>
                </div>
              </td>
              <td className="align-middle">
                Rs {calculateItemTotal(item.price, item.quantity).toFixed(2)}
              </td>
              <td className="align-middle">
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                Your cart is empty
              </td>
            </tr>
          )}
        </tbody>
        {cartItems.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan="4" className="text-end"><strong>Subtotal:</strong></td>
              <td><strong>Rs {subtotal}</strong></td>
              <td>
              <button
    className="btn btn-success btn-sm"
    onClick={() => window.location.href = '/checkout'}
  >
    Proceed to Checkout
 </button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default Cart;
