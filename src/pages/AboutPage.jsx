import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-12">
          Welcome to Shoply, where we're dedicated to bringing you the best products with a seamless shopping experience. Our mission is to provide high-quality items at affordable prices, all while prioritizing customer satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver a curated selection of products that enhance your life, from innovative electronics to timeless apparel, all in one place.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Values</h2>
            <p className="text-gray-600">
              We believe in transparency, integrity, and exceptional service. Every product we offer is chosen with quality and customer trust in mind.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Commitment</h2>
            <p className="text-gray-600">
              We are committed to providing a secure and enjoyable shopping journey, from the moment you browse to the day your package arrives.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our team is a small but passionate group of e-commerce enthusiasts dedicated to making your online shopping experience the best it can be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;