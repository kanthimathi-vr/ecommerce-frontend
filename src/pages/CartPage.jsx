import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          <p>Your cart is empty.</p>
          <Link to="/products" className="text-indigo-600 hover:underline mt-4 inline-block">
            Go back to shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4 last:border-b-0">
                <img src={item.image || 'https://via.placeholder.com/100'} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 mt-1">${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    min="1"
                    className="w-16 text-center border rounded-md py-1"
                  />
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg self-start">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Cart Summary</h2>
            <div className="flex justify-between mt-4">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 w-full inline-block text-center bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;