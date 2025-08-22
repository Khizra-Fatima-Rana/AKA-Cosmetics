// pages/Catalog.js
import React from 'react';
import ProductList from './ProductList';

const Catalog = () => {
  return (
    <div>
      <section className="catalog-section">
        <h1 className="catalog-title">Product Catalog</h1>
        <p className="catalog-description">
          Here will be a list of all available beauty products pulled from MongoDB.
        </p>
      </section>
      <ProductList />
    </div>
  );
};

export default Catalog;
