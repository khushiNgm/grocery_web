import React from "react";

const NewsTicker = () => {
  return (
    <div className="bg-green-600 overflow-hidden whitespace-nowrap py-2 mt-[]">
      <div className="flex animate-slide">
      <span className="text-white mx-4">WELCOME TO THE MAA DURGA AGRI FOOD"S PRODUCTION</span>
        <span className="text-white mx-2">Purely grown with devotion, Maa Durga Agri Food’s products bring nature’s purity and tradition to your table.</span>
        <span className="text-white">From our sacred soil to your home — Maa Durga Agri Foo delivers purity, tradition, and trust in every bite.</span>
        <span className="text-white mx-1">Enjoy amazing discounts!</span>
        {/* Duplicate for smooth loop */}
        <span className="text-white">Purely grown with devotion, Maa Durga Agri Food’s products bring nature’s purity and tradition to your table.</span>
        <span className="text-white">Offer for limited time!</span>
      </div>
    </div>
  );
};

export default NewsTicker;

