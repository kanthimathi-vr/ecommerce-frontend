import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import api from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
  });
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // New state for button loading
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Redirect unauthenticated users
  useEffect(() => {
    if (!isAuthenticated) {
      alert('You must be logged in to checkout.');
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);

    const orderData = {
      items: cartItems.map(item => ({
        product: item.id,
        quantity: item.quantity,
      })),
      
    };

    try {
      await api.post('orders/create/', orderData);
      dispatch(clearCart());
      alert('Order placed successfully! Thank you for your purchase.');
      navigate('/');
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isAuthenticated) {
      return null; // Don't render anything while redirecting
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Secure Checkout</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          <p>Your cart is empty. Nothing to check out.</p>
          <Link to="/products" className="text-indigo-600 hover:underline mt-4 inline-block font-medium">
            Browse our products
          </Link>
        </div>
      ) : (
        <form onSubmit={handleCheckout} className="flex flex-col lg:flex-row gap-10">
          {/* Shipping and Payment Section */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">1. Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={shippingInfo.name} onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div className="col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" name="address" placeholder="123 Main St" value={shippingInfo.address} onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="city" placeholder="Springfield" value={shippingInfo.city} onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input type="text" id="zip" name="zip" placeholder="12345" value={shippingInfo.zip} onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6 border-b pb-4">2. Payment Method</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-center">Payment is not implemented in this demo. Your order will be placed upon clicking "Place Order".</p>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-xl border border-gray-200 self-start">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className="text-gray-600">x{item.quantity}</span>
                  <span className="font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-xl mt-6 pt-4 border-t border-gray-300">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            {error && <p className="text-red-500 text-center mt-4 font-medium">{error}</p>}
            <button
              type="submit"
              className="mt-8 w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;