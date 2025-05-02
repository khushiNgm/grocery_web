import vedioOne from '../../assets/vedio/video-transcode(2).mp4'
import Img1 from '../../assets/Imges/360_garlic_powder.jpg'
import Img2 from '../../assets/Imges/corn.webp'
// import Img3 from '../../assets/Imges/DJI0812.webp'
import Img4 from '../../assets/Imges/florWeet.webp'
import Img5 from '../../assets/Imges/product.jpg'
import Img6 from '../../assets/Imges/tuar-dal.webp'
import BgImg from '../../assets/Imges/bgFamilyFarmImg.webp'

function Home () {
  const images = [Img1, Img2, Img4, Img5, Img6];
    return(
        <div className='w-full h-full bg-blue-50'>
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
  {/* Video Background */}
  <video
    src={vedioOne}
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

          {/* Overlay Text */}
  <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center text-white px-4 text-center bg-black/40">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      “Your Trusted Source for Farm-Fresh Essentials – Grown with Love, Delivered with Care”
    </h1>
    <p className="text-lg md:text-xl mb-2">Naturally grown, sincerely delivered – because your health matters.</p>
    <p className="text-lg md:text-xl">Pure from the root, honest to the core.</p>
  </div>
</div> 

{/* 👇 New content section below video */}
<div className="w-full h-screen bg-blue-50 py-10 text-center">
  <h1 className="text-5xl font-bold text-green-700 mb-4">Welcome to Our Site</h1>
  <p className="text-lg text-gray-700 px-4 max-w-2xl mx-auto">
    Explore our range of farm-fresh fruits and vegetables grown naturally at Nigam Farm House. 
    From the soil to your home, we ensure every product carries the essence of purity and sustainability.
    <h1 className="text-xl font-bold text-green-700 mb-4 ">"Maa Durga agri Food's Product"</h1>
  </p>
  
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
<div className="w-full h-screen bg-red-400 relative">
  <img src={BgImg} alt="" className="w-full h-screen object-cover" />

  <button className="text-extrabold text-5xl ml-[150px] mb-[200px] absolute transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-10 rounded-full shadow-md hover:bg-gray-200 outline-none">
    Shop Now <span className=''>-</span>
  </button>
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
