/* eslint-disable no-unused-vars */
import {React, useState} from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaExclamationCircle } from 'react-icons/fa';
import AnimatedPage from '../Components/AnimatedPage';
import { getAssetPath } from '../utils/getAssetPath';

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const contact = getAssetPath("chbanner.png")
    const logo = getAssetPath("lnbgf.png")
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TBC
      console.log('Form submitted:', formData);
      alert('Thank you for your message. We will contact you shortly.');
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
    
  return (
    <AnimatedPage>
    <main className="space-y-8">
      {/* Hero Section */}
      <section
        className="relative w-full h-[600px] sm:h-[300px] md:h-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-navy/70 flex flex-col items-center justify-center text-white text-center px-4 mt-10">
          
          {/* <div className="w-28 sm:w-36 mb-4">
            <img
              src={logo}
              alt="Rabbah Legal Logo"
              className="w-full h-auto p-2"
            />
          </div> */}

          {/* Headline and Text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-strong font-serif">
            LET’S TALK
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl font-serif wrap-anywhere">
            We’re here to help. Reach out today for personalized legal guidance.
          </p>
        </div>
      </section>


      {/* Form & Info Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#050524] mb-6">Send Us a Message</h2>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:border-navy focus:ring focus:ring-navy/20 text-[#050524]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:border-navy focus:ring focus:ring-navy/20 text-[#050524]"
                />
              </div>
              <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
                className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:border-navy focus:ring focus:ring-navy/20 text-[#050524]"
              />
            </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="mt-2 block w-full border border-gray-300 rounded-lg p-3 focus:border-navy focus:ring focus:ring-navy/2 text-[#050524]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer py-3 rounded-full border border-gray-300 bg-navy text-[#141d36] font-medium hover:shadow-xl transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information Panel */}
          <div className="space-y-8">
            <div className="bg-silver rounded-2xl p-10 shadow-lg space-y-6">
              <h2 className="text-2xl font-semibold text-[#141d36]">Contact Information</h2>
              <div className="flex items-center space-x-4 ">
                <FaPhone className="text-navy" size={24} color={'#141d36'} />
                <span className="text-gray-700">1300 000 000</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-navy" size={24} color={'#141d36'} />
                <span className="text-gray-700">contact@legal.com.au</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-navy" size={24} color={'#141d36'}/>
                <span className="text-gray-700">Suite 5, 10 Legal Ave, Sydney NSW</span>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-navy text-[#141d36] rounded-xl p-6 flex items-center space-x-4 shadow-md">
              <FaExclamationCircle size={28} />
              <p className="font-medium">
                For urgent assistance, please call our 24/7 hotline: <strong>1800 123 456</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & CTA Footer */}
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-[#141d36] text-center">Contact us for expert legal advice today.</h1>
      <div className="w-32 h-1 bg-[#c0c0c0] mx-auto "></div>
        <div className="h-84 max-w-[1280px] flex justify-center items-center xl:bg-[#141d36]/85 mx-auto" >
          <div className="w-[600px] h-full rounded-xl overflow-hidden shadow-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.87549396267!2d150.60234949522558!3d-33.847805329796635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1744615802732!5m2!1sen!2sau"
              className="w-full h-full border-0 filter grayscale-[20%] contrast-110"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
            </div>
        </div>
    </main>
    </AnimatedPage>
  );
}