'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://678157a285151f714b0a5f9f.mockapi.io/ecom/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className='text-center text-yellow-400'>Loading...</p>;
  if (!product) return <p className='text-center text-red-500'>Product not found</p>;

  return (
    <div className='min-h-screen bg-gradient-to-r from-black to-slate-700 px-4'>
      <Navbar />
      <div className='max-w-4xl mx-auto my-10 bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-slate-800 mb-4'>{product.productname}</h1>
        <Image 
          src={product.image} 
          alt={product.productname} 
          width={400} 
          height={400} 
          className='w-full h-auto rounded-lg' 
        />
        <p className='text-lg text-slate-700 mt-4'>{product.productdesc}</p>
        <div className='mt-4'>
          <p className='text-xl font-bold text-red-600'>Price: {product.discount} Rupees</p>
          <p className='text-lg text-yellow-500'>Rating: {product.rating} ⭐</p>
        </div>
        <button className='mt-6 bg-red-600 text-white rounded-lg py-3 px-6 text-lg font-semibold transition-all duration-300 hover:bg-orange-600'>
          Add To Cart
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
