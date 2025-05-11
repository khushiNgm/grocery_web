// src/components/Loader.jsx
import React from "react";
import logo from './assets/Imges/logo2.jpeg'

const Loader = () => {
    return (
        <div className="bg-white w-full h-screen flex flex-col items-center justify-center text-center px-4">
          <img
            src={logo}
            alt="Organic Logo"
            className="max-w-[140px] sm:max-w-[160px] mb-6"
          />
          <h1 className="text-5xl font-bold text-green-700 mb-4">Welcome to Our Site</h1>
          <div className="text-lg text-gray-700 max-w-2xl">
            Explore our range of farm-fresh fruits and vegetables grown naturally at Nigam Farm House.
            From the soil to your home, we ensure every product carries the essence of purity and sustainability.
            <p className="text-xl font-bold text-green-700 mt-4">"Maa Durga agri Food's Product"</p>
          </div>
          <div className="flex space-x-2 mt-6">
            <div className="w-4 h-4 bg-green-900 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-4 h-4 bg-green-900 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-4 h-4 bg-green-900 rounded-full animate-bounce" />
          </div>
        </div>
      );
      
};

export default Loader;
