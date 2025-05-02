import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-white px-6 py-8 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide text-black">
          Nigam Farm House
        </Link>
        <ul className="flex space-x-6 text-lg font-medium text-black">
          <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-orange-300">Products</Link></li>
          <li><Link to="/AboutUs" className="hover:text-orange-300">AboutUs</Link></li>
          <li><Link to="/ContactUs" className="hover:text-orange-300">ContactUs</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
