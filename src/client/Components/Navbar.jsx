import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon lib. Lucide is light and clean.
import logo from '../../assets/Imges/logo2.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white px-6  shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-black">
         <img src={logo} alt="" className="w-40" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-black">
          <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-orange-300">Products</Link></li>
          <li><Link to="/AboutUs" className="hover:text-orange-300">AboutUs</Link></li>
          <li><Link to="/ContactUs" className="hover:text-orange-300">ContactUs</Link></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg font-medium text-black">
          <li><Link to="/" className="block hover:text-orange-300" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/products" className="block hover:text-orange-300" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/AboutUs" className="block hover:text-orange-300" onClick={toggleMenu}>AboutUs</Link></li>
          <li><Link to="/ContactUs" className="block hover:text-orange-300" onClick={toggleMenu}>ContactUs</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

