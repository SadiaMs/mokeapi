'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-slate-700 px-4">
      <Navbar />
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-yellow-400">Your Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-white text-xl">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <Image src={item.image} height={200} width={200} alt={item.productname} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-xl font-semibold text-slate-800 mt-2">{item.productname}</h2>
              <p className="text-sm text-slate-600">{item.productdesc}</p>
              <p className="font-bold text-lg text-blue-600 mt-2">{item.discount} Rupees</p>
              <button onClick={() => removeFromCart(item.id)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors w-full">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CartPage;
