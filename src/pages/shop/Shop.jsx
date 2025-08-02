import React from 'react'
import BannerImg from '../../assets/banner.png'
import Products from './Products'

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Shop Our Products
          </h1>
          <p className="mt-4 text-lg">Find the perfect furniture for your home.</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12 md:py-16">
        <Products headline="Explore Our Collection" />
      </div>
    </section>
  );
};

export default Shop;