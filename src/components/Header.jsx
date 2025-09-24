import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          EcomFinal 🛍️
        </Link>
        <nav className="flex items-center space-x-6 text-lg">
          <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-indigo-600 transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
          
          {isAuthenticated ? (
            <button onClick={handleLogout} className="hover:text-indigo-600 transition-colors">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-600 transition-colors">Login</Link>
              <Link to="/register" className="hover:text-indigo-600 transition-colors">Register</Link>
            </>
          )}

          <div className="relative">
            <Link to="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13a2 2 0 100 4h10a2 2 0 100-4M7 13h10l4-8H5.4M7 13L5.4 5M7 13a2 2 0 100 4h10a2 2 0 100-4M7 13h10l4-8H5.4M7 13L5.4 5M7 13a2 2 0 100 4h10a2 2 0 100-4M7 13h10l4-8H5.4M7 13L5.4 5M7 13a2 2 0 100 4h10a2 2 0 100-4" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;