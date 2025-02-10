'use client';

import React, { useState } from 'react';




const Order = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: 'COD', // Default: Cash on Delivery
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order Details:', orderDetails);
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 text-white">
      

      <div className="max-w-3xl mx-auto my-10 p-6 bg-gray-900 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">Place Your Order</h1>

        {!orderPlaced ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={orderDetails.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={orderDetails.address}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={orderDetails.phone}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Payment Method</label>
              <select
                name="paymentMethod"
                value={orderDetails.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-yellow-400"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="Card">Credit/Debit Card</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Place Order
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-400">Order Placed Successfully! 🎉</h2>
            <p className="mt-4 text-gray-300">Thank you for shopping with us. Your order will be processed soon.</p>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Order;
