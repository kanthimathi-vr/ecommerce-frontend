import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import config from '../config'; // Import the config file

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div className="text-center text-red-500 mt-20">Product not found.</div>;
    }

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex flex-col lg:flex-row gap-12 bg-white p-6 rounded-lg shadow-xl">
                <div className="w-full lg:w-1/2">
                    <img 
    src={`${config.BASE_IMAGE_URL}${product.image}`} 
    alt={product.name} 
    className="w-full h-48 object-cover object-center"
/>
                </div>
                
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mt-4 text-xl">${product.price}</p>
          <p className="text-gray-700 mt-6 leading-relaxed">{product.description}</p>
          <div className="flex items-center mt-6 text-gray-500">
            <span className="font-semibold text-gray-800 mr-2">Category:</span>
            {product.category}
          </div>
          <div className="flex items-center mt-2 text-gray-500">
            <span className="font-semibold text-gray-800 mr-2">Stock:</span>
            {product.stock > 0 ? (
              <span className="text-green-600 font-bold">{product.stock} in stock</span>
            ) : (
              <span className="text-red-600 font-bold">Out of stock</span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-8 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;