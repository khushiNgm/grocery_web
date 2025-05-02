
import imgFarm from '../../assets/Imges/DJI0812.webp'
import { motion } from "framer-motion";


const words = "WELCOME TO THE NIGAM FARMHOUSE".split(" ");

function AboutUs () {
    return(

        <div className='w-full h-full bg-blue-50'>
            <div className="w-full h-full flex mt-[150px]  ">  
                           {/* left Div */}
                <div className="w-1/2 h-full">
                 <p><h1 className="text-5xl font-semibold text-center">WELCOME TO THE NIGAM FARMHOUR</h1>
                  <div className="p-8 w-[70%] mx-auto text-xl">
                  <span className="">Where Nature Meets Nurture.... </span><br/> 
                Rooted in tradition and grown with care,<br/> <span className="font-bold">Nigam Farm House </span>is more than just a farm — 
               it’s a promise of purity. We cultivate fresh, chemical-free fruits and vegetables using
             <span className="font-bold"> sustainable </span> farming practices, ensuring every bite is healthy and wholesome.
            <br/> <span className="font-bold">Our mission is simple:</span>  to bring farm-fresh goodness directly to your doorstep.
              Every seed we sow and every crop we harvest is done with love, integrity, and a
              deep respect for the earth.<br/><span className="font-bold"> Join us</span> in embracing a healthier lifestyle — one harvest at a time.
            </div>
           </p>
            </div>
                  {/* Right div */}
                <div className="w-1/2 h-full"><img src={imgFarm} alt="" className="w-full h-full"/></div>
                </div>
                               {/* For page Sec */}
                 <div className="w-full h-full flex mt-[150px] p-9 bg-blue-50">  
                           {/* left Div */}
                <div className="w-1/2 h-full mt-20 ml-10 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2us!4v1708586315798!5m2!1sen!2us" className="w-full h-full sm:h-80 md:h-96 max-w-[600px] border-none rounded-md"allowFullScreen></iframe>
                </div>
                                    {/* Right div */}
                <div className="w-1/2 h-full ">
                    <p><h1 className="text-5xl font-semibold text-center">Location</h1>
                    <div className="p-8 w-[70%] mx-auto text-xl">
                    Tucked away in the heart of nature, Nigam Farm House is located in the tranquil surroundings of [Insert Location], far from the hustle and bustle of urban life.
                    Here, the air is fresher, the soil is richer, and life moves in harmony with nature. Our farm isn’t just a piece of land — it's a sanctuary where the earth is respected, crops are grown with care, and every sunrise brings new hope for a healthier tomorrow.
                    Whether you're seeking peace, purity, or just a connection to the roots, Nigam Farm House welcomes you with open arms.
                    We pride ourselves on our location — easily accessible yet untouched by pollution, it’s the perfect escape into a world where sustainability and tradition walk hand in hand.
            </div>
           </p>
           </div> 
            </div>
       
        </div>
    )
    };


export default AboutUs;
