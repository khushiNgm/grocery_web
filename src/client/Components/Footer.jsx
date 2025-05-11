import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from '../../assets/Imges/logo2.jpeg'

function Footer() {
  return (
    <div className="bg-white text-white py-10 px-4 md:px-10 xl:px-28">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        
        {/* Logo + Social */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src={logo}
            alt="Organic Logo"
            className="max-w-[140px] sm:max-w-[160px]"
          />
          <div className="animate-pulse flex flex-wrap gap-2 justify-center sm:justify-start">
            {[
              { icon: "youtube", link: "https://youtube.com" },
              { icon: "whatsapp", link: "https://wa.me/7898745704" },
              { icon: "instagram", link: "https://www.instagram.com/invites/contact/?i=18rjinwohubdf&utm_content=y4b5rbi" },
              { icon: "linkedin-in", link: "https://www.linkedin.com/in/khushi-nigam-635763272/" },
              { icon: "telegram", link: "https://t.me/7898745704" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-200 w-9 h-9 flex items-center justify-center rounded-full hover:opacity-75"
              >
                <i className={`fab fa-${item.icon} text-black text-lg`} />
              </a>
            ))}
          </div>
        </div>

        {/* First Row: Our Products + About */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Our Products */}
          <div>
            <h3 className="text-green-800 font-semibold text-lg md:text-xl mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm text-black ">
              <li className="hover:text-orange-300"><a href="/products/fruits">Organic Fruits</a></li>
              <li className="hover:text-orange-300"><a href="/products/vegetables">Organic Vegetables</a></li>
              <li className="hover:text-orange-300"><a href="/products/garlic">Organic Garlic</a></li>
              <li className="hover:text-orange-300"><a href="/products/grains">Natural Grains</a></li>
              <li className="hover:text-orange-300"><a href="/products/spices">Herbal Spices</a></li>
              <li className="hover:text-orange-300"><a href="/products/honey">Raw Honey</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-green-800 font-semibold text-lg md:text-xl mb-3 mt-2">
              About
            </h3>
            <ul className="space-y-2 text-sm text-black">
              <li className="hover:text-orange-300"><a href="/about">Our Story</a></li>
              <li className="hover:text-orange-300"><a href="/farm">Visit Our Farm</a></li>
              <li className="hover:text-orange-300"><a href="/blog">Blog</a></li>
              <li className="hover:text-orange-300"><a href="/faq">FAQs</a></li>
              <li className="hover:text-orange-300"><a href="/ContactUs">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Second Row: Policies + Contact */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Policies */}
          <div>
            <h3 className="text-green-800 font-semibold text-lg md:text-xl mb-4">
              Policies
            </h3>
            <ul className="space-y-2 text-sm text-black">
              <li className="hover:text-orange-300"><a href="/terms">Terms & Conditions</a></li>
              <li className="hover:text-orange-300"><a href="/privacy">Privacy Policy</a></li>
              <li className="hover:text-orange-300"><a href="/shipping">Shipping Policy</a></li>
              <li className="hover:text-orange-300"><a href="/return">Return & Refund</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-green-800 font-semibold text-lg md:text-xl mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-black">
              <li className="flex gap-2 items-start hover:text-orange-300">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>Alot, 1/79 Ratlam (M.P.)</span>
              </li>
              <li className="flex gap-2 items-center hover:text-orange-300">
                <i className="fas fa-phone"></i>
                <span>+91-7898745704</span>
              </li>
              <li className="flex gap-2 items-center hover:text-orange-300">
                <i className="fas fa-envelope"></i>
                <span>ngmvijay@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-black">
        <p className="text-black hover:text-green-500">© 2025 Forganic Foods. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

