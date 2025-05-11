import imgFarm from '../../assets/Imges/DJI0812.webp';

function AboutUs() {
  return (
    <div className='w-full h-full bg-blue-50'>

      {/* Section 1 - Welcome */}
      <div className="w-full flex flex-col md:flex-row mt-[100px] px-6 md:px-12 gap-6">
        
        {/* Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">WELCOME TO THE NIGAM FARMHOUSE</h1>
          <div className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              <span className="italic">Where Nature Meets Nurture....</span><br />
              Rooted in tradition and grown with care,<br />
              <span className="font-bold">Nigam Farm House</span> is more than just a farm — it’s a promise of purity.
              We cultivate fresh, chemical-free fruits and vegetables using <span className="font-bold">sustainable</span> farming practices, ensuring every bite is healthy and wholesome.
              <br /><span className="font-bold">Our mission is simple:</span> to bring farm-fresh goodness directly to your doorstep.
              Every seed we sow and every crop we harvest is done with love, integrity, and a deep respect for the earth.
              <br /><span className="font-bold">Join us</span> in embracing a healthier lifestyle — one harvest at a time.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img src={imgFarm} alt="Nigam Farmhouse" className="w-full h-auto object-cover rounded-md shadow" />
        </div>
      </div>
      <hr className='border-black mt-20'/>
      {/* Section 2 - Location */}
      <div className="w-full flex flex-col md:flex-row mt-[100px] px-6 md:px-12 gap-6 pb-16">
        
        {/* Map */}
        <div className="w-full md:w-1/2">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4902113920743!2d75.54236867511565!3d23.765551978660007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396467000cd1220f%3A0x31ab5d5fc004e7a6!2sMaa%20Durga%20AGRI%20FOOD&#39;s!5e0!3m2!1sen!2sin!4v1746890752212!5m2!1sen!2sin"
            className="w-full h-64 sm:h-80 md:h-96 border-none rounded-md shadow"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Location Description */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">Location</h1>
          <div className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              Tucked away in the heart of nature, Nigam Farm House is located in the tranquil surroundings of [Insert Location],
              far from the hustle and bustle of urban life.
              Here, the air is fresher, the soil is richer, and life moves in harmony with nature.
              <br /><br />
              Our farm isn’t just a piece of land — it's a sanctuary where the earth is respected, crops are grown with care, and every sunrise brings new hope for a healthier tomorrow.
              <br /><br />
              Whether you're seeking peace, purity, or just a connection to the roots, Nigam Farm House welcomes you with open arms.
              We pride ourselves on our location — easily accessible yet untouched by pollution, it’s the perfect escape into a world where sustainability and tradition walk hand in hand.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;

