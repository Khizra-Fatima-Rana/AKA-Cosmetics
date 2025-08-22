import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import DealBanner from './DealBanner';
import Team from './Team';

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get('/api/products/featured')
      .then(res => setFeatured(res.data))
      .catch(err => console.error("Error fetching featured products:", err));
  }, []);

  return (
    <div className="home-products">
      <DealBanner />
      <div className="container">
        <h2 className="HomeProducts">Featured Products</h2>
        <div className="productContainer">
          {featured.map((prod, i) => (
            <Product key={i} {...prod} />
          ))}
        </div>
      </div>
      <hr className="breakThrough" style={{ width: '80%', marginLeft: '9rem', border: '1px solid black' }} />
      <Team />
    </div>
  );
}

export default Home;
