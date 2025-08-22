import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <div className="container flex justify-between items-center py-2 px-6">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo flex items-center gap-2">
            <img
              src="/images/icon.png"
              alt="AKA_logo"
              className="w-10 object-contain"
              srcSet="/images/icon.png 6000w"
            />
            <h1 className="brandName text-xl font-bold">AKA Cosmetics &lt;3</h1>
          </div>
        </Link>

        <nav className="navBar" id="NavBar">
          <ul id="navList" className={`flex gap-4 items-center ${menuOpen ? 'responsive' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/cart" className="cart-icon flex items-center gap-1">
                <img
                  src="/images/shopping-cart.png"
                  alt="cart_icon"
                  srcSet="/images/shopping-cart.png 29095w"
                  className="w-5"
                />
                <p>Cart ({cartItems.length})</p>
              </Link>
            </li>
          </ul>
          <div
            className="icon ml-4 cursor-pointer"
            id="menuToggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fa fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
