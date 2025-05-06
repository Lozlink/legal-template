// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import banner1 from "../assets/Downing_Centre.jpg"; // Replace with your images
// import banner2 from "../assets/banner.jpg";
// import banner3 from "../assets/banner3.jpg";

// const Hero = () => {
//   return (
//     <section className="relative text-[#c0c0c0] min-h-[40vh] flex items-center">
//       {/* Swiper for background images */}
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         pagination={{ clickable: true }}
//         navigation={true}
//         className="absolute inset-0 w-full h-full"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${banner1})` }}
//           />
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${banner2})` }}
//           />
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop' }}
//           />
//         </SwiperSlide>
//       </Swiper>

//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 w-full">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-left">
//             Expert Legal Solutions <br />
//             <span className="text-white">Tailored to Your Needs</span>
//           </h1>
//           <p className="text-lg md:text-xl text-[#c0c0c0] ml-5 mb-8 max-w-2xl text-left">
//             At Rabbah Legal, we combine decades of experience with personalized
//             attention to deliver exceptional results for our clients.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-end">
//             <Link
//               to="/contact"
//               className="border-2 border-silver text-[#c0c0c0] px-8 py-3 rounded-md font-medium hover:bg-silver/10 transition duration-300 text-center"
//             >
//               Schedule Consultation
//             </Link>
//             <Link
//               to="/services"
//               className="border-2 border-silver text-[#c0c0c0] px-8 py-3 rounded-md font-medium hover:bg-silver/10 transition duration-300 text-center"
//             >
//               Our Services
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

/* eslint-disable no-unused-vars */
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/RabbahLogo.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import banner1 from "../assets/Downing_Centre.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="w-full mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-max">
          <Link to="/">
            <img 
              src={logo} 
              alt="Rabbah Legal Logo" 
              className="h-20 md:h-24 lg:h-32 w-auto"
            />
          </Link>
        </div>

        {/* Centered Title */}
        <div className="hidden md:flex justify-center flex-1">
          <motion.span 
            className="font-nav-text text-[#c0c0c0] text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Rabbah Legal
          </motion.span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-12 xl:gap-20 mr-4">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `font-nav font-strong text-[#c0c0c0] text-[18px] md:text-[20px] lg:text-[28px] xl:text-[36px] hover:text-white transition-colors ${
                  isActive ? "font-medium underline" : "font-light"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#050524] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 w-full px-6 py-4 space-y-3"
          >
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-800 text-lg hover:text-blue-600 ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;