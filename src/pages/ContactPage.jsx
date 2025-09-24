import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend API
    // For this example, we'll just simulate a successful submission
    console.log('Form data submitted:', formData);
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-2xl mx-auto mb-12">
          Have a question, comment, or concern? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information Section */}
          <div className="lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 E-Commerce Ave, Suite 456, Shopville, SV 12345</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-6 9h.01M17 10l-4 4m0 0l-4-4m4 4v4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>support@ecomfinal.com</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.134l-2.498 1.667a.999.999 0 00-.414 1.256l.82 2.872a.999.999 0 001.256.414l1.667-2.498a1 1 0 011.134-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-4.5a2.5 2.5 0 01-2.5-2.5 1 1 0 00-1-1h-1a.999.999 0 00-1 1A2.5 2.5 0 013 16.5V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-2/3 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-6 text-center text-green-600 font-semibold">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;