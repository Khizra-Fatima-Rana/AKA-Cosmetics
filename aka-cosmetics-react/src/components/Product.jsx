import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Product({ name, price, description, image, showDetail, onToggle }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card border p-4 rounded-lg shadow">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">${price}</p>
      <button className="text-blue-500 underline mt-1" onClick={onToggle}>
        {showDetail ? 'Hide Details' : 'View Details'}
      </button>

      {showDetail && (
        <div className="mt-2">
          <p>{description}</p>
          <button
            className="bg-black text-white px-3 py-1 mt-2 rounded"
            onClick={() => addToCart({ name, price, image })}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
