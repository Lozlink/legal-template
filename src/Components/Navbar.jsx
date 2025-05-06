/* eslint-disable no-unused-vars */
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems, Transition} from "@headlessui/react";
import { getAssetPath } from "../utils/getAssetPath";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const showBackdrop = scrolled || isOpen;

  const navLinkClass = ({ isActive }) => {
    return ` ${
      location.pathname === '/contact' || location.pathname  === '/services/criminal-law' ? "text-[#ededf0]" : "text-[#141d36]"
    } text-[24px] md:text-[24px] lg:text-[24px] xl:text-[24px] hover:text-white transition-colors ${
      isActive ? "font-medium underline" : "font-strong"
    }`;
  };

  
  

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-screen z-50 transition-all duration-300 ${
        showBackdrop ? "backdrop-blur-md bg-[#141d36]/70 shadow-md " : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-4 md:px-8 py-4 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-max">
          <Link to="/">
           <h1>LOGO</h1>
          </Link>
        </div> 

        {/* Centered Title */}
        {/* <div className="hidden md:flex justify-center flex-1 ">
          <motion.span 
            className="font-cinzel text text-[#050524] text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Rabbah Legal
          </motion.span>
        </div> */}

        {/* Desktop Navigation */}
        
        
          <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-12 xl:gap-20 mr-4">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          

          <Menu as="div" className="relative">
            <MenuButton 
              className={`font-cinzel font-strong ${location.pathname === '/contact' || location.pathname  === '/services/criminal-law' ? "text-[#ededf0]" : "text-[#141d36]"} text-[24px] md:text-[24px] lg:text-[24px] xl:text-[24px] hover:text-white cursor-pointer`}
              aria-haspopup="true" 
              aria-expanded={isOpen ? "true" : "false"}
            >
              <Link to="/services" className="block">
                Services
              </Link>
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems 
                  className="absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-white/70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-labelledby="services-dropdown"
                >
                  {[
                    { name: "Criminal Law", to: "/services/criminal-law" },
                    { name: "Traffic Law", to: "/services/traffic-law" },
                    { name: "Property Law", to: "/services/property-law" },
                    { name: "Civil Law", to: "/services/civil-law" },
                  ].map(({ name, to }) => (
                    <MenuItem key={to}>
                      {({ active }) => (
                        <Link
                          to={to}
                          className={`block px-4 py-2 text-sm ${
                            active ? "bg-gray-100 text-blue-500" : "text-gray-700"
                          }`}
                        >
                          {name}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
            </Transition>
          </Menu>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink> 
        </nav> 
      
                

        <button
          className="md:hidden text-[#141d36] focus:outline-none mr-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden w-screen px-6 py-4 space-y-3 flex flex-col items-center backdrop-blur-md bg-[#141d36]/29 text-white"
          >
            <NavLink to="/" onClick={() => setIsOpen(false)} className="block text-lg hover:text-blue-400">Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className="block text-lg hover:text-blue-400">About</NavLink>

            {/* Dropdown inside mobile */}
            <details className="w-full">
              {/* Services link to overarching page */}
              <summary 
                className="cursor-pointer text-lg hover:text-blue-400 text-center"
                aria-haspopup="true" 
                aria-expanded={isOpen ? "true" : "false"}
              >
                <NavLink to="/services" className="">Services</NavLink>
              </summary>
              <div className="mt-2 space-y-2 text-center">
                {/* Dropdown Items */}
                <NavLink 
                  to="/services/criminal-law" 
                  onClick={() => setIsOpen(false)} 
                  className="block text-sm hover:text-blue-300"
                  role="menuitem"
                >
                  Criminal Law
                </NavLink>
                <NavLink 
                  to="/services/traffic-law" 
                  onClick={() => setIsOpen(false)} 
                  className="block text-sm hover:text-blue-300"
                  role="menuitem"
                >
                  Traffic Law
                </NavLink>
                <NavLink 
                  to="/services/property-law" 
                  onClick={() => setIsOpen(false)} 
                  className="block text-sm hover:text-blue-300"
                  role="menuitem"
                >
                  Property Law
                </NavLink>
                <NavLink 
                  to="/services/Civil-law" 
                  onClick={() => setIsOpen(false)} 
                  className="block text-sm hover:text-blue-300"
                  role="menuitem"
                >
                  Civil Law
                </NavLink>
              </div>
            </details>

            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block text-lg hover:text-blue-400">Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
