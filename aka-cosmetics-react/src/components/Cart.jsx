import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(0);
  const [coupon, setCoupon] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const total = subtotal + shipping;
  const freeShippingThreshold = 194;
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="cart-section">
      <h1>Cart</h1>
      <p className="free-shipping-msg">
        Shop for ${remaining} more to enjoy <strong>FREE Shipping</strong>
      </p>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }} />
      </div>

      <div className="cart-table">
        <div className="cart-header">
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Subtotal</span>
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-row">
            <div className="product-info">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="product-name">{item.name}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.name, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.name, 1)}>+</button>
            </div>
            <div>${item.price.toFixed(2)}</div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="bottom-row">
        <div className="coupon">
          <h4>Have a coupon?</h4>
          <p>Add your code for an instant cart discount</p>
          <div className="coupon-input">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Input"
            />
            <button>Apply</button>
          </div>
        </div>

        <div className="summary">
          <h4>Cart summary</h4>
          <label>
            <input
              type="radio"
              checked={shipping === 0}
              onChange={() => setShipping(0)}
            /> Free shipping ($0.00)
          </label>
          <label>
            <input
              type="radio"
              checked={shipping === 15}
              onChange={() => setShipping(15)}
            /> Express shipping (+$15.00)
          </label>
          <hr />
          <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
          <p>Total: <strong>${total.toFixed(2)}</strong></p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
