import logo from "../../../assets/images/footerLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-theme-color-300">
      <div className="container mx-auto px-6 lg:px-0 lg:py-12 py-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div data-aos="fade-right" data-aos-duration="700" className="">
            <img className="md:w-32 w-24" src={logo} alt="" />
            <p className="text-gray-500 py-6">
              This is a big one and i consider it one of the most important
              things for a business.
            </p>
            <button className="text-gray-500 md:text-xl border-2 border-gray-500 p-2 rounded-full me-3 hover:border-theme-color-100 hover:text-theme-color-100 duration-500 hover:scale-105">
              <FaFacebookF />
            </button>
            <button className="text-gray-500 md:text-xl border-2 border-gray-500 p-2 rounded-full me-3 hover:border-theme-color-100 hover:text-theme-color-100 duration-500 hover:scale-105">
              <FaInstagram />
            </button>
            <button className="text-gray-500 md:text-xl border-2 border-gray-500 p-2 rounded-full me-3 hover:border-theme-color-100 hover:text-theme-color-100 duration-500 hover:scale-105">
              <FaSquareXTwitter />
            </button>
            <button className="text-gray-500 md:text-xl border-2 border-gray-500 p-2 rounded-full me-3 hover:border-theme-color-100 hover:text-theme-color-100 duration-500 hover:scale-105">
              <FaLinkedinIn />
            </button>
          </div>
          <div data-aos="fade-up" data-aos-duration="700" className="">
            <p className="text-white font-semibold md:text-xl text-lg py-2">Quick Links</p>
            <ul className="text-gray-500 md:text-lg">
              <li>Home</li>
              <li>About</li>
              <li>Appointment</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div data-aos="fade-down" data-aos-duration="700" className="">
            <p className="text-white font-semibold md:text-xl text-lg py-2">Company</p>
            <ul className="text-gray-500 md:text-lg">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-duration="700" className="">
            <p className="text-white font-semibold md:text-xl text-lg py-2">Information</p>
            <ul className="text-gray-500 md:text-lg">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-5">
        <div className="container md:text-lg mx-auto px-6 lg:px-0 text-white flex justify-between">
          <p>Copyright © 2024 <span className="text-theme-color-100">B</span>izpro</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
