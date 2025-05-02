import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './client/Components/Navbar';
import Home from './client/pages/Home';
import AboutUs from './client/pages/AboutUs';
import Products from './client/pages/Products';
import Contact from './client/pages/ContactUs';
import Footer from './client/Components/Footer';
import imgOne from './assets/Imges/farmTemp.webp'

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Products" element={<Products  />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
    <Footer />  
    <img src={imgOne} className='w-full h-[300px]'/>
    </Router>

  );
}

export default App;

