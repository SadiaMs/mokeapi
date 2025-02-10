'use client';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartModelVisibility, setCartModelVisibility] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://678157a285151f714b0a5f9f.mockapi.io/ecom');
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = () => setCartModelVisibility(true);
  const closeModel = () => setCartModelVisibility(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-slate-700 px-4">
      <Navbar />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400">Welcome to MockAPI Fetch Project</h1>
        <p className="text-xl text-white mt-2 mb-4">Explore the products fetched from the API</p>
      </div>
      <div><Hero /></div>

      {loading ? (
        <p className="text-center text-yellow-400 text-2xl font-semibold">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image || '/fallback.jpg'}
                  height={200}
                  width={200}
                  alt={item.productname || 'Product image'}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                {item.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white py-1 px-3 text-xs font-semibold rounded-full shadow-md">
                    {item.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-800">{item.productname}</h2>
                <p className="text-sm text-slate-600 mt-1">{item.productdesc}</p>
              </div>
              <div className="mt-4 space-y-2 px-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600">Price:</span>
                  <span className="text-xl font-bold text-slate-800">{item.price} Rupees</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-slate-800">Rating:</span>
                  <span className="text-yellow-500">{item.rating} ⭐</span>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-6 bg-red-600 text-white rounded-lg py-3 px-6 text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-orange-600 w-full"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {cartModelVisibility && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Product Added to Cart</h2>
            <p className="text-slate-600 mb-6">
              You have added a product to your cart. Would you like to view your cart?
            </p>
            <div className="flex justify-between">
              <button
                onClick={closeModel}
                className="bg-slate-300 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors font-bold"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => router.push('/cart')}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Visit Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;