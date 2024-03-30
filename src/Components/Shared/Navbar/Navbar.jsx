import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Button } from "keep-react";
const Navbar = () => {
  return (
    <div className="z-10 absolute left-1/2 transform -translate-x-1/2 translate-y-10 container">
      <nav className="flex justify-between items-center px-8 py-4 rounded-2xl bg-white">
        <div className="">
          <img className="scale-110" src={logo} alt="" />
        </div>
        <ul className="lg:flex gap-6 text-xl">
          <li className="list-none">
            <NavLink className="no-underline text-theme-color-400" to="/">
              Home
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink className="no-underline text-theme-color-400" to="/about">
              About
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              className="no-underline text-theme-color-400"
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              className="no-underline text-theme-color-400"
              to="/reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-2">
          <Button className="bg-transparent py-4 px-8 text-xl duration-300 text-black hover:text-white hover:bg-black">Sign In</Button>
          <Button className="bg-black py-4 px-8 text-xl duration-300 hover:text-black hover:bg-theme-color-100">Free Trial</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
