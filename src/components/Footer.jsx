import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Shoply. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-indigo-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;