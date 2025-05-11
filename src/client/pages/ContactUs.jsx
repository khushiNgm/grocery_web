import React, { useState} from "react";
import ContactImg from '../../assets/Imges/ContactImg.jpg';
import axios from "axios";


function ContactUs() {
  //Inside ContactUs component
const [formData, setFormData] = useState({

  name: "",
  contact: "",
  email: "",
  message: "",

});
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/contact`, formData);
    setFormData({ name: "", contact: "", email: "", message: "" });
    alert("Our team will contact you soon. Wishing you a wonderful day! 🌼");
  } catch (error) {
    console.error("Submission Error:", error.response || error.message);
    alert("Something went wrong");
  }
};

  return (
    <div className="w-full flex flex-col">
      
      {/* Top Section with Image and Form */}
      <div className="relative w-full flex flex-col md:flex-row">
        
        {/* Background Image */}
        <img
          src={ContactImg}
          alt="Contact"
          className="w-full h-[550px] md:h-screen object-cover"
        />

        {/* Form */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end p-4 mt-10 sm:mt-[40px] md:mt-[-90px]">
           <div className="bg-[rgb(65,65,65)] p-5 sm:p-6 rounded-lg shadow-lg w-full max-w-md mx-auto md:mx-0 opacity-90">

            <label className="block text-white text-sm sm:text-lg mb-2">
              Enter Your Name
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 border rounded text-black outline-none"
              />
            </label>

            <label className="block text-white text-sm sm:text-lg mb-2">
              Enter Your Contact No.
              <input
                type="text"
                placeholder="Contact No."
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 border rounded text-black outline-none"
              />
            </label>

            <label className="block text-white text-sm sm:text-lg mb-2">
              Enter Your Email
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 border rounded text-black outline-none"
              />
            </label>

            <label className="block text-white text-sm sm:text-lg mb-2">
              Enter Your Message
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mt-1 mb-4 border rounded text-black outline-none"
              ></textarea>
            </label>

            <button className="bg-white px-4 py-2 rounded font-semibold text-lg sm:text-xl mx-auto block" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="w-full bg-[rgb(65,65,65)] text-white text-center text-base sm:text-xl md:text-2xl font-semibold p-4">
        Your journey to fresh and organic living starts here. Reach out to
        <span className="text-green-500 font-extrabold"> Maa DURGA AGRI FOOD's PRODUCT</span><br />
        From our <span className="text-yellow-500">soil</span> to your <span className="text-yellow-500">soul</span>
      </div>
    </div>
  );
}

export default ContactUs;

