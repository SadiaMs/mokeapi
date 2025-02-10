import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <div className="bg-red-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          Have any questions We d love to hear from you
        </p>
        <form>
          
          <div className="mb-4">
            
            <label htmlFor="name" className="block text-sm font-medium text-red-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border border-red-500 rounded-md focus:ring-green-900 focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-red-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-red-500 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-bold text-red-700">
              Message
            </label>
            <textarea
              id="message"
                          placeholder="Write your message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
