import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/logo-fitness.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to close the menu
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="relative z-30">
      <div className="text-black duration-300">
        <div className="shadow-md">
          <div className="container px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div>
                <img alt="logo" src={logo} className="w-32" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden ml-auto md:block">
                <ul className="flex items-center gap-8 text-center">
                  <li>
                    <a
                      className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                      href="#home"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                      href="#about"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                      href="#service"
                    >
                      SERVICES
                    </a>
                  </li>
                  <li>
                    <a
                      className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                      href="#testimonial"
                    >
                      TESTIMONIAL
                    </a>
                  </li>
                  <li>
                    <a
                      className="py-2 text-lg font-medium transition-colors duration-500 hover:text-primary hover:border-b-2 hover:border-primary"
                      href="#contact"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hamburger Menu Icon */}
              <div>
                {showMenu ? (
                  <HiMenuAlt1
                    className="transition-all cursor-pointer md:hidden"
                    onClick={toggleMenu}
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    className="transition-all cursor-pointer md:hidden"
                    onClick={toggleMenu}
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Responsive Menu */}
          {showMenu && (
            <ResponsiveMenu
              showMenu={showMenu}
              setShowMenu={setShowMenu} // Pass the setShowMenu function to control the menu
              closeMenu={closeMenu} // Add a closeMenu function for external close
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
