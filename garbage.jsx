// import { useState } from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import AnimatedPage from '../Components/AnimatedPage';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic would go here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message. We will contact you shortly.');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <AnimatedPage>
//       <div className="bg-[#c0c0c0] text-[#050524]">
//         {/* Hero Section */}
//         <section className="bg-navy text-[#050524] py-10 px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
//             <div className="w-32 h-1 bg-[#c0c0c0] mx-auto mb-4"></div>
//             <p className="text-xl text-silver max-w-3xl mx-auto">
//               Get in touch with our legal team for a confidential consultation
//             </p>
//           </div>
//         </section>

//         {/* Contact Content */}
//         <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
//               <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder='Full Name'
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="email" className="block mb-2 font-medium">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder='Email'
//                       required
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       placeholder='Phone'
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
//                       value={formData.phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="service" className="block mb-2 font-medium">Service Needed</label>
//                   <select
//                     id="service"
//                     name="service"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
//                     value={formData.service}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select a service</option>
//                     <option value="criminal-defense">Criminal Defense</option>
//                     <option value="corporate-law">Corporate Law</option>
//                     <option value="family-law">Family Law</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     required
//                     placeholder='Please put a brief description so we may best help you.'
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-navy text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition w-full md:w-auto"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>

//             {/* Contact Info */}
//             <div className="lg:ml-auto lg:max-w-md"> 
//               <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//               <div className="space-y-8">

//                 <div className="flex items-start justify-center">
//                   <div className="text-silver ml-4 mt-1">
//                     <FaPhone size={20} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-1">Phone</h3>
//                     <p className="text-gray-700">(02) 1234 5678</p>
//                     <p className="text-sm text-silver">Mon-Fri, 9am-5pm EST</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start justify-center">
//                   <div className="text-silver ml-4 mt-1">
//                     <FaEnvelope size={20} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-1">Email</h3>
//                     <p className="text-gray-700">info@rabbahlegal.com</p>
//                     <p className="text-sm text-silver">Typically respond within 24 hours</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start justify-center">
//                   <div className="text-silver ml-4 mt-1">
//                     <FaMapMarkerAlt size={20} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-1">Office</h3>
//                     <p className="text-gray-700">123 Legal Avenue,</p>
//                     <p className="text-gray-700">Sydney, NSW</p>
//                     <p className="text-sm text-silver mt-2">By appointment only</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start justify-center">
//                   <div className="text-silver ml-4 mt-1">
//                     <FaClock size={20} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg mb-1">Hours</h3>
//                     <ul className="space-y-1 text-gray-700">
//                       <li className="flex justify-between max-w-xs">
//                         <span>Monday-Friday</span>
//                         <span>9:00 AM - 5:00 PM</span>
//                       </li>
//                       <li className="flex justify-between max-w-xs">
//                         <span>Saturday</span>
//                         <span>By appointment</span>
//                       </li>
//                       <li className="flex justify-between max-w-xs">
//                         <span>Sunday</span>
//                         <span>Closed</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-12 bg-navy text-white p-6 rounded-lg">
//                 <h3 className="text-xl font-bold mb-3">Emergency Legal Assistance?</h3>
//                 <p className="mb-4 text-silver">For urgent criminal defense matters, call our 24/7 emergency line:</p>st
//                 <p className="text-2xl font-bold">0412345678</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <h1 className="text-4xl md:text-5xl font-serif mb-6 text-[#050524]">Contact us for expert legal advice today.</h1>
//         <div className="h-96 w-full flex justify-center items-center pb-20" >
//           <div className="w-[600px] h-full rounded-xl overflow-hidden shadow-lg ">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.87549396267!2d150.60234949522558!3d-33.847805329796635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1744615802732!5m2!1sen!2sau"
//               className="w-full h-full border-0 filter grayscale-[20%] contrast-110"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Office Location Map"
//             ></iframe>
//             </div>
//         </div>
//       </div>
//     </AnimatedPage>  
//   );
// };

// export default Contact;

{/* <section
        className="relative text-white h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${contact1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
> */}


{/* <div className="absolute inset-0 bg-navy/80"></div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let’s Talk</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We’re here to help. Reach out today for personalized legal guidance.
          </p>
        </div>
      </section> */}



/* eslint-disable no-unused-vars */
// import { NavLink, Link } from "react-router-dom";
// import logo from "../assets/RabbahLogo.jpg";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import banner from "../assets/banner.png";
// import banner1 from "../assets/Downing_Centre.jpg"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//       <header
//         style={{ backgroundImage: `url(${banner1})` }}
//           className="sticky top-0 w-full shadow-sm z-50 opacity-100 rounded-sm bg-cover bg-center bg-no-repeat mb-10"
//       >
//         <div className="w-full mx-auto px-4 md:px-8 py-4 flex justify-between items-center ">
//         {/* Logo + Title */}
//         <div className="flex items-center gap-3 min-w-max">
//          <Link to='/'>
//           <img 
//             src={logo} 
//             alt="Rabbah Legal Logo" 
//             className="h-20 md:h-24 lg:h-32 w-auto"
//           />
//           </Link>
//           <Link to='/'>

//           </Link>
//         </div>

//         {/* Centered Title and Desktop Navigation */}
//         <div className="hidden md:flex justify-center flex-1">
//           <motion.span 
//           className="font-nav-text text-[#c0c0c0] text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer transition-all duration-300 hover:text-white hover:scale-105 shadow-lg hover:shadow-xl"
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           >
//             Rabbah Legal
//           </motion.span>
//         </div>
        
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-4 md:gap-6 lg:gap-12 xl:gap-20 mr-4">
//           {[ 
//             { label: "Home", path: "/" },
//             { label: "About", path: "/about" },
//             { label: "Services", path: "/services" },
//             { label: "Contact", path: "/contact" },
//           ].map((item) => (
//             <NavLink
//               key={item.label}
//               to={item.path}
//               className={({ isActive }) =>
//                 `font-nav font-strong text-[#c0c0c0] text-[18px] md:text-[20px] lg:text-[28px] xl:text-[36px] hover:text-white transition-colors ${
//                   isActive ? "font-medium underline" : "font-light"
//                 }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden text-[#050524] focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="md:hidden  bg-=opacity-40 w-full px-6 py-4 space-y-3"
//           >
//             {[ 
//               { label: "Home", path: "/" },
//               { label: "About", path: "/about" },
//               { label: "Services", path: "/services" },
//               { label: "Contact", path: "/contact" },
//             ].map((item) => (
//               <NavLink
//                 key={item.label}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={({ isActive }) =>
//                   `block text-white text-lg hover:text-silver ${
//                     isActive ? "font-semibold underline" : ""
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>  
//     </header>
//   );
// };

// export default Navbar;