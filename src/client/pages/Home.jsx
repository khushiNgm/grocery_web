import vedioOne from '../../assets/vedio/video-transcode_Trim.mp4'
import Img1 from '../../assets/Imges/360_garlic_powder.jpg'
import Img2 from '../../assets/Imges/corn.webp'
// import Img3 from '../../assets/Imges/DJI0812.webp'
import Img4 from '../../assets/Imges/florWeet.webp'
import Img5 from '../../assets/Imges/product.jpg'
import Img6 from '../../assets/Imges/tuar-dal.webp'
import BgImg from '../../assets/Imges/bgFamilyFarmImg.webp'
import BgImgOne from '../../assets/Imges/istockphoto.jpg'


function Home () {
  const images = [Img1, Img2, Img4, Img5, Img6];
    return(
        <div className='w-full h-full bg-blue-300'>
   <div className="relative w-full h-[900px] flex flex-col overflow-hidden">
  {/* Video Background */}
  <video
    src={vedioOne}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-[700px] sm:h-full object-cover"
  />

  {/* Overlay Text */}
  <div className="absolute top-0 left-0 w-full h-[720px] sm:h-full flex flex-col items-center justify-center text-white px-4 text-center bg-black/40 sm:w-1/2 translate-y-[-20px]">
    <h1 className="text-[23px] sm:text-3xl md:text-5xl font-bold mb-4">
      “Your Trusted Source for Farm-Fresh Essentials – Grown with Love, Delivered with Care”
    </h1>

    <p className="hidden md:block text-[13px] text-lg md:text-xl">
      Naturally grown, sincerely delivered – because your health matters.
    </p>

    <p className="text-[18px] lg:block text-[14px] lg:text-lg xl:text-xl">
      Pure from the root, honest to the core.
    </p>

    <div className="z-10 px-2 mt-6">
  <button className="animate-bounce text-sm sm:text-base md:text-xl lg:text-lg font-bold bg-green-500 text-white px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3 rounded-full shadow-lg transition-all text-center">
    <a href="/ContactUs">Explore More →</a>
  </button>
</div>

   
  </div>
</div>



{/* 👇 New content section below video */}
<div className="w-full h-screen bg-blue-50 py-10 text-center mt-[-200px] sm:mt-[1px]">
  <h1 className="text-5xl font-bold text-green-700 mb-4">Welcome to Our Site</h1>
  <div className="text-lg text-gray-700 px-4 max-w-2xl mx-auto">
    Explore our range of farm-fresh fruits and vegetables grown naturally at Nigam Farm House. 
    From the soil to your home, we ensure every product carries the essence of purity and sustainability.
    <p className="text-xl font-bold text-green-700 mb-4 ">"Maa Durga agri Food's Product"</p>
  </div>
  
<div className="relative w-full overflow-hidden mt-6 bg-blue-50 p-10">
  <div className="flex w-[200%] animate-slide gap-6">
    {[...Array(2)].flatMap(() =>
      images.map((img, index) => (
        <img
          key={index + Math.random()}
          src={img}
          alt={`Image ${index + 1}`}
          className="w-[300px] h-[250px] object-cover rounded-lg shadow-md"
        />
      ))
    )}
  </div>
</div>
</div>
<div className="relative w-screen min-h-[90vh] bg-black">
  <img
    src={BgImgOne}
    alt="Background"
    className="w-screen h-full object-cover absolute inset-0 z-0 sm:w-screen"
  />

  {/* Overlay and button */}
  <div className="relative z-10 flex items-start justify-start h-full px-2">
  <button className="animate-bounce  text-sm sm:text-2xl md:text-2xl font-bold bg-yellow-40 text-white px-6 sm:px-6 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-200 transition-all text-center mt-[560px] ml-[60px]">
     <a href="/products">Shop Now →</a> 
    </button>
  </div>
</div>


  {/* Auto-sliding image row */}
 

   </div>
    )
    };


export default Home;


{/* <div className="w-full bg-blue-50 py-10 text-center border-black border-2px">
<p className="text-lg text-black px-4 max-w-2xl text-left text-center">
  <h1 className='text-center'>Vijay Nigam</h1>
  <h2>Sales Head</h2>
{/* <span w-20px><hr className='border-black'/></span> */}
{/* <h2>Mob- +91 7898745704</h2>
<h3>ADD: Alot 1/79 Ratlam (M.P.)</h3>
</p>
</div> */}
