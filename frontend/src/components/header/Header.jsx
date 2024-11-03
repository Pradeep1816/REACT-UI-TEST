import React, { useState } from "react";
import Layout from "./Layout";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = ["Home", "Services", "About", "Blogs"];

  return (
    <Layout>
      <header className="flex flex-wrap items-center justify-between py-3 px-4 bg-white shadow-md md:py-5">
        <div className="flex items-center">
          <figure>
            <img
              src="/images/brand.jpeg"
              alt="Brand Logo"
              className="h-12 object-cover object-center"
            />
          </figure>
        </div>
        {/* Hamburger Icon for Mobile */}
        <GiHamburgerMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        />

        {/* Main Navigation */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:gap-5 mt-3 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
            {menu.map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <span className="text-black">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
            {/* Dropdown toggle */}
            <li
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative cursor-pointer"
            >
              More
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg transform transition-all duration-300 origin-top scale-95">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <div className="mt-3 md:mt-0">
            <button className="border px-5 py-1 rounded-full bg-stone-900 text-white transition-transform duration-300 hover:bg-blue-700 hover:scale-105">
              Login
            </button>
          </div>
        </nav>
      </header>
    </Layout>
  );
}

export default Header;
