import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import "../index.css";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  function handleNavigation() {
    setNavigation(!navigation);
  }

  return (
    <div className="font-f flex w-full justify-between py-6 items-center max-h-24 shadow-md">
      <div className="text-4xl ml-10 md:ml-20 xm:ml-3">ChillVibe</div>

      <div className="hidden lg:flex gap-16 text-xl text-emphasis-grey">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-black font-bold" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "text-black font-bold" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-black font-bold" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/pages"
          className={({ isActive }) => (isActive ? "text-black font-bold" : "")}
        >
          Pages
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-black font-bold" : "")}
        >
          Contact
        </NavLink>
      </div>

      <div className="flex items-center gap-6 text-[1.3rem] text-emphasis-grey">
        <NavLink to="/wishlist" className="text-black hidden lg:block">
          <CiHeart />
        </NavLink>
        <NavLink to="/cart" className="text-black hidden lg:block">
          <MdOutlineShoppingCart />
        </NavLink>
        <button className="text-black hidden lg:block">
          <IoMdSearch />
        </button>

        <button
          className="burger-menu text-3xl lg:hidden"
          onClick={handleNavigation}
        >
          <MdMenu />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          navigation ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-black"
          onClick={handleNavigation}
        >
          <MdClose />
        </button>

        <ul className="flex flex-col items-center justify-center h-full text-2xl gap-6">
          <li onClick={handleNavigation}>
            <NavLink to="/" className="hover:text-black transition-colors">
              Home
            </NavLink>
          </li>
          <li onClick={handleNavigation}>
            <NavLink to="/shop" className="hover:text-black transition-colors">
              Shop
            </NavLink>
          </li>
          <li onClick={handleNavigation}>
            <NavLink to="/blog" className="hover:text-black transition-colors">
              Blog
            </NavLink>
          </li>
          <li onClick={handleNavigation}>
            <NavLink to="/pages" className="hover:text-black transition-colors">
              Pages
            </NavLink>
          </li>
          <li onClick={handleNavigation}>
            <NavLink
              to="/contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
