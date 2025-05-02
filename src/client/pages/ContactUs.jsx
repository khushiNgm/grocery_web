import React from "react";
import ContactImg from '../../assets/Imges/ContactImg.jpg'

function ContactUs () {
    return(

        <div className="w-full h-screen overflow-hidden flex flex-col">
       <div className="w-full h-screen relative">
     <img src={ContactImg} className="absolute top-0 left-0 w-full h-full object-cover" />

    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[rgb(65,65,65)] p-6 rounded-lg shadow-lg w-96 opacity-80 ">
      <label htmlFor="" className="text-xl text-white text-bold">Enter Your Name
     <input type="text" name="Name" placeholder="Name" className="w-full mb-4 p-2 border border-gray-300 rounded outline-none text-black" />
     </label>  
     <label htmlFor="" className="text-xl text-white text-bold">Enter Your Contact No.
    <input type="text" name="ContactNo" placeholder="Contact No." className="w-full mb-4 p-2 border border-gray-300 rounded outline-none text-black" />
    </label>
    <label htmlFor="" className="text-xl text-white text-bold">Enter Your Email
    <input type="text" name="Email" id="" placeholder="Email"  className="w-full mb-4 p-2 border border-gray-300 rounded outline-none text-black" />
    </label>
    <label className="text-xl text-white text-bold">
      Enter Your Message for us
      <textarea type="text" name="Message" placeholder="Message" className="w-full mt-1 p-2 border border-gray-300 rounded outline-none text-black" />
    </label>
    <button className="bg-white p-2 rounded text-center ml-[130px] font-semibold text-xl">Submit</button>
  </div>
</div>

          <div className="w-full h-[120px] bg-[rgb(65,65,65)] text-white text-center text-4xl text-bold p-3"> Your journey to fresh and organic living starts here. Reach out to <span className="text-green-500 font-extrabold">Nigam Farm House</span><br/>
          From our <span className="text-yellow-500">soil</span> to your <span className="text-yellow-500">soul</span></div>
      </div>
    )
    };


export default ContactUs;