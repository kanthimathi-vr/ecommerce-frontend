import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import config from '../config'; // Import the config file

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link to={`/products/${product.id}`}>
        <img 
    src={`${config.BASE_IMAGE_URL}${product.image}`} 
    alt={product.name} 
    className="w-full h-48 object-cover object-center"
/>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;