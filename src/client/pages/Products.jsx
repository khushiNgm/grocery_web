import React, { useRef } from "react";
import PeeledGarlic from '../../assets/Imges/peeledGarlic.webp'
import DehydratedGarlic from '../../assets/Imges/DehydratedGarlic.jpg'
import Garlic from '../../assets/Imges/Garlic.webp'
import GarlicPickle from '../../assets/Imges/GarlicAAchar.jpg'
import GarlicChutney from '../../assets/Imges/ourSpecialProducts.jpg'
import garlicImg from '../../assets/Imges/ourSpecialProducts.jpg'
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


const products = [
    { img: PeeledGarlic, name: "Peeled Garlic", price: "₹120/kg", weight: "Available: 250g | 500g | 1kg" },
    { img: DehydratedGarlic, name: "Dehydrated Garlic", price: "₹150/kg", weight: "Available: 100g | 250g" },
    { img: Garlic, name: "Garlic", price: "₹100/kg", weight: "Available: 500g | 1kg | 5kg" },
    { img: GarlicPickle, name: "Garlic Pickle", price: "₹200/jar", weight: "Available: 200g | 500g" },
    { img: GarlicChutney, name: "Garlic Chutney", price: "₹180/bottle", weight: "Available: 250g | 400g" },
    { img: garlicPowder, name: "Garlic Powder", price: "₹130/pack", weight: "Available: 100g | 200g" },
    { img: garlicImg, name: "Garlic ", price: "₹130/pack", weight: "Available: 100g | 200g" },
   
];

const flourProducts = [
    {img: makkiaata,name: "Makki Atta",price: "₹60/kg",weight: "Available: 500g | 1kg" },
    {img: javar,name: "Jowar Atta",price: "₹55/kg",weight: "Available: 500g | 1kg"},
    {img: gehu,name: "Wheat Flour",price: "₹40/kg",weight: "Available: 1kg | 5kg"},
    {img: bajre,name: "Bajra Atta",price: "₹50/kg",weight: "Available: 500g | 1kg"},
    {img: besan,name: "Besan",price: "₹70/kg",weight: "Available: 500g | 1kg"},
  ];

  const pulseProducts = [
    { img: UradDal, name: "UradDal", price: "₹95/kg", weight: "Available: 500g | 1kg" },
    { img: ToorDal, name: "ToorDal", price: "₹110/kg", weight: "Available: 500g | 1kg" },
    { img: MoongDal, name: "MoongDal", price: "₹105/kg", weight: "Available: 500g | 1kg" },
    { img: Soybean, name: "Soybean", price: "₹80/kg", weight: "Available: 500g | 1kg" },
    { img: ChanaDal, name: "ChanaDal", price: "₹85/kg", weight: "Available: 500g | 1kg" },
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

const pulseScrollRef = useRef(null);

const scrollPulse = (scrollOffset) => {
  if (pulseScrollRef.current) {
    pulseScrollRef.current.scrollLeft += scrollOffset;
  }
};


  
    return (
      <div className="w-full h-full bg-white py-10">
        <h1 className="text-4xl font-bold text-center bg-green-50 p-10">Our Products</h1>
        <div className="relative px-6 w-full h-screen flex flex-col">

          <div className="h-[250px] w-[100%] flex justify-center items-center">
         <img src={GarlicChutney} alt="" className="w-full h-full object-contain" />
        </div> 
                     {/* Scroll buttons */}
          <button 
            onClick={() => scroll(-300)} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            ⬅
          </button>
          <button 
            onClick={() => scroll(300)} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            ➡
          </button>
  
                     {/* Scrollable Product Row */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide"
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
                        {/* Flour product */}
<h2 className="text-3xl font-bold text-center mt-16 bg-green-50 py-6">Flour Products</h2>
<div className="relative px-6 mt-4">
  {/* Scroll buttons */}
  <button 
    onClick={() => scrollFlour(-300)} 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
  >
    ⬅
  </button>
  <button 
    onClick={() => scrollFlour(300)} 
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
  >
    ➡
  </button>

  {/* Scrollable Flour Product Row */}
  <div 
    ref={flourScrollRef}
    className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide"
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
                                     {/* pulses in india */}
<h2 className="text-3xl font-bold text-center mt-16 bg-green-50 py-6">Pulses</h2>
<div className="relative px-6 mt-4">
  {/* Scroll buttons */}
  <button 
    onClick={() => scrollPulse(-300)} 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
  >
    ⬅
  </button>
  <button 
    onClick={() => scrollPulse(300)} 
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
  >
    ➡
  </button>

  {/* Scrollable Pulses Row */}
  <div 
    ref={pulseScrollRef}
    className="flex overflow-x-auto space-x-6 px-8 scrollbar-hide"
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
