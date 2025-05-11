import React, { useRef } from "react";
import PeeledGarlic from '../../assets/Imges/peeledGarlic.webp'
import DehydratedGarlic from '../../assets/Imges/DehydratedGarlic.jpg'
import Garlic from '../../assets/Imges/Garlic.webp'
import GarlicPickle from '../../assets/Imges/GarlicAAchar.jpg'
import GarlicChutney from '../../assets/Imges/imagesChatni.jpeg'
import garlicPowder from '../../assets/Imges/GarlicPowder.jpg'
// rowPartSec-> Flor
import makkiaata from '../../assets/Imges/Makkiaata.jpg'
import javar from '../../assets/Imges/javar.webp'
import gehu from '../../assets/Imges/florWeet.webp'
import bajre from '../../assets/Imges/BajreAata.webp'
import besan from '../../assets/Imges/BesanFlor.jpg'
//Pulses img
import UradDal from '../../assets/Imges/Udat.jpg'
import ToorDal from '../../assets/Imges/TuarDal.jpg'
import MoongDal from '../../assets/Imges/MunghDal.jpg'
import Soybean from '../../assets/Imges/soybean.webp'
import ChanaDal from '../../assets/Imges/Udat.jpg'
import bannerPRO from '../../assets/Imges/bannerPRO1.jpg'
import NewsTicker from './NewsTicker';

//Impot Vegitables
import Began from '../../assets/Imges/Began.jpeg'
import Palak from '../../assets/Imges/Palak.jpeg'
import KachePyaj from '../../assets/Imges/KachePyaj.jpeg'
import PattaGobhi from '../../assets/Imges/PattaGobhi.jpeg'
import FulGobhi from '../../assets/Imges/FulGobhi.jpeg'

const products = [
    { img: PeeledGarlic, name: "Peeled Garlic", price: "₹75/kg", weight: "Available: 250g | 500g | 1kg" },
    { img: DehydratedGarlic, name: "Dehydrated Garlic", price: "₹150/kg", weight: "Available: 100g | 250g" },
    { img: Garlic, name: "Garlic", price: "₹90/kg", weight: "Available: 500g | 1kg | 5kg" },
    { img: GarlicPickle, name: "Garlic Pickle", price: "₹90/jar", weight: "Available: 200g | 500g" },
    { img: GarlicChutney, name: "Garlic Chutney", price: "₹140/bottle", weight: "Available: 250g | 400g" },
    { img: garlicPowder, name: "Garlic Powder", price: "₹99/pack", weight: "Available: 100g | 200g" },
   
];

const flourProducts = [
    {img: makkiaata,name: "Corn Flour",price: "₹198/kg",weight: "Available: 500g | 1kg" },
    {img: javar,name: "Sorghum Flour",price: "₹90/kg",weight: "Available: 500g | 1kg"},
    {img: gehu,name: "Wheat Flour",price: "₹80/kg",weight: "Available: 1kg | 5kg"},
    {img: bajre,name: "Pearl Millet Flour",price: "₹70/kg",weight: "Available: 500g | 1kg"},
    {img: besan,name: "Chickpea Flour",price: "₹120/kg",weight: "Available: 500g | 1kg"},
  ];
  // Vegetable product array
const vegetableProducts = [
  { img: Began, name: "Brinjal", price: "₹80/kg", weight: "Available: 500g | 1kg" },
  { img: Palak, name: "Spinach", price: "₹34/bunch", weight: "Available: 1 bunch" },
  { img: KachePyaj, name: "Raw Onion", price: "₹30/bundle", weight: "Available: 250g | 500g" },
  { img: PattaGobhi, name: "Cabbage", price: "₹40/kg", weight: "Available: 500g | 1kg" },
  { img: FulGobhi, name: "Cauliflower", price: "₹80/kg", weight: "Available: 500g | 1kg" }
];


  const pulseProducts = [
    { img: UradDal, name: " Black Gram", price: "₹160/kg", weight: "Available: 500g | 1kg" },
    { img: ToorDal, name: "Pigeon Pea", price: "₹150/kg", weight: "Available: 500g | 1kg" },
    { img: MoongDal, name: "Green Gram", price: "₹130/kg", weight: "Available: 500g | 1kg" },
    { img: Soybean, name: "Soya bean", price: "₹220/kg", weight: "Available: 500g | 1kg" },
    { img: ChanaDal, name: "Bengal gram split", price: "₹110/kg", weight: "Available: 500g | 1kg" },
  ];
  
  
  
function Products () {
    const scrollRef = useRef(null);
  
    const scroll = (scrollOffset) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollOffset;
      }
    };

    // add this near top with other useRefs
  const flourScrollRef = useRef(null);
  const scrollFlour = (scrollOffset) => {
  if (flourScrollRef.current) {
    flourScrollRef.current.scrollLeft += scrollOffset;
  }
};


const vegetableScrollRef = useRef(null);
const scrollVegetable = (scrollOffset) => {
  if (vegetableScrollRef.current) {
    vegetableScrollRef.current.scrollLeft += scrollOffset;
  }
};

const pulseScrollRef = useRef(null);

const scrollPulse = (scrollOffset) => {
  if (pulseScrollRef.current) {
    pulseScrollRef.current.scrollLeft += scrollOffset;
  }
};

    return (
      <div className="w-full h-full bg-green-100 py-10 ">
         <NewsTicker />
        {/* <div className="w-full h-[200px] ml-[30px]"> <img src={bannerPRO} alt=""  className="w-1/2 h-full"/></div> */}
        <h1 className="text-4xl font-bold text-center bg-green-50 p-10 mt-10 ">Our Products</h1>
        <div className="relative px-6 w-full h-screen flex flex-col ">
                     {/* Scroll buttons */}
          <button 
            onClick={() => scroll(-300)} 
            className="absolute left-0 top-1/3 transform -translate-y-1/2 hover:bg-green-500 bg-green-600 p-4 rounded-full shadow-md z-10 text-white w-10px h-10  flex items-center justify-center"
          >
         «
          </button>
          <button 
            onClick={() => scroll(300)} 
            className="absolute flex items-center justify-center right-0 top-1/3 transform -translate-y-1/2 hover:bg-green-500 bg-green-600 p-4 rounded-full shadow-md z-10 text-white w-20px h-10"
          >
          »
          </button>
  
                     {/* Scrollable Product Row */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide mt-10 p-1"
          >
            {products.map((product, index) => (
              <div 
                key={index}
                className="min-w-[300px] bg-white rounded-lg shadow-md p-4 mt-9"
              >
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="text-green-700 font-bold">{product.price}</p>
                <p className="text-gray-600 text-sm">{product.weight}</p>
                <button className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="w-1/3 h-30 "><img src={bannerImg} alt="" className="w-full h-full" /></div> */}
 
                        {/* Flour product */}
<h2 className="text-3xl font-bold text-center bg-green-50 py-6 mt-[-200px]">Flour Products</h2>
<div className="relative px-6 mb-20">
  {/* Scroll buttons */}
  <button 
    onClick={() => scrollFlour(-300)} 
    className="absolute flex items-center justify-center text-white left-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 rounded-full shadow-md z-10 bg-green-600 p-4 w-20px h-10"
  >
      «
  </button>
  <button 
    onClick={() => scrollFlour(300)} 
    className="absolute flex items-center justify-center text-white right-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md z-10 bg-green-600 p-4 w-20px h-10"
  >
       »
  </button>

  {/* Scrollable Flour Product Row */}
  <div 
    ref={flourScrollRef}
    className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide mt-10 p-1"
  >
    {flourProducts.map((product, index) => (
      <div 
        key={index}
        className="min-w-[300px] bg-white rounded-lg shadow-md p-4"
      >
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-[200px] object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-green-700 font-bold">{product.price}</p>
        <p className="text-gray-600 text-sm">{product.weight}</p>
        <button className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

                                           {/* Vegetables in India */}
<h2 className="text-3xl font-bold text-center mt-16 bg-green-50 py-6">Fresh Vegetables</h2>
<div className="relative px-6 mt-4">
  <button 
    onClick={() => scrollVegetable(-300)} 
    className="absolute flex items-center justify-center text-white left-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md z-10 bg-green-600 p-4 w-20px h-10"
  >
       «
  </button>
  <button 
    onClick={() => scrollVegetable(300)} 
    className="absolute flex items-center justify-center text-white right-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md z-10 bg-green-600 p-4 w-20px h-10"
  >
     »
  </button>

  <div 
    ref={vegetableScrollRef}
    className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide p-1"
  >
    {vegetableProducts.map((product, index) => (
      <div 
        key={index}
        className="min-w-[300px] bg-white rounded-lg shadow-md p-4"
      >
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-[200px] object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-green-700 font-bold">{product.price}</p>
        <p className="text-gray-600 text-sm">{product.weight}</p>
        <button className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>
                                  {/* pulses in india */}
<h2 className="text-3xl font-bold text-center mt-16 bg-green-50 py-6">Pulses</h2>
<div className="relative px-6 mt-4">
  {/* Scroll buttons */}
  <button 
    onClick={() => scrollPulse(-300)} 
    className="absolute flex items-center justify-center text-white left-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md z-10 bg-green-600 p-4 w-20px h-10"
  >
        «
  </button>
  <button 
    onClick={() => scrollPulse(300)} 
    className="absolute flex items-center justify-center text-white right-0 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-500 p-2 rounded-full shadow-md z-10 bg-green-600 p-4 w-20px h-10"
  >
    »
  </button>

  {/* Scrollable Pulses Row */}
  <div 
    ref={pulseScrollRef}
    className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide p-1"
  >
    {pulseProducts.map((product, index) => (
      <div 
        key={index}
        className="min-w-[300px] bg-white rounded-lg shadow-md p-4"
      >
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-[200px] object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-green-700 font-bold">{product.price}</p>
        <p className="text-gray-600 text-sm">{product.weight}</p>
        <button className="mt-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded">
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

      </div>
    );
  }
  


export default Products;
