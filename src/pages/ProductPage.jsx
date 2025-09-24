import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { items: products, status, error } = useSelector((state) => state.products);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">All Products</h1>
      
      {status === 'loading' && <p className="text-center text-lg">Loading products...</p>}
      {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
      
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;