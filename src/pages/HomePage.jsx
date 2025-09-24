import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { items: products, status } = useSelector((state) => state.products);

  return (
    <div className="p-4 md:p-8">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 text-white p-10 md:p-20 rounded-xl mb-12 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fade-in-down">
            Discover Your Next Favorite Thing
          </h1>
          <p className="mt-4 text-xl md:text-2xl opacity-90 animate-fade-in-up">
            Shop the latest trends in electronics, apparel, and more.
          </p>
          <Link 
            to="/products" 
            className="mt-8 inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transform hover:scale-105 transition-all duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
      
      {status === 'loading' && <p className="text-center text-lg">Loading products...</p>}
      {status === 'failed' && <p className="text-center text-red-500">Failed to load products.</p>}
      
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;