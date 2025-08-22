import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // 👈 track which index is expanded

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching catalog products:", err));
  }, []);

  const toggleDetails = (index) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle logic
  };

  return (
    <section className="bestSellers" id="bs">
      <div className="container">
        <h2>Our Best Sellers</h2>
        <div className="productContainer">
          {products.map((prod, i) => (
            <Product
              key={i}
              {...prod}
              showDetail={activeIndex === i}
              onToggle={() => toggleDetails(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
