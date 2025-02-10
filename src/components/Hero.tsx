'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/cart.jpg')" }}>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl text-white px-6">
        <h1 className="text-5xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
          Welcome to Our Restaurant!
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Experience the best flavors with our delicious dishes.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => router.push('/order')}
            className="bg-red-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Order Now
          </button>
          <button
            onClick={() => router.push('/')}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
