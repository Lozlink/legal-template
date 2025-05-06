import { Link } from 'react-router-dom';
import { FaArrowUp, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#" },
    { icon: <FaFacebook />, name: "Facebook", url: "#" }
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8 relative">
       <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 bg-[#141d36] text-navy p-3 rounded-full shadow-lg hover:bg-white transition-all cursor-pointer"
      >
        <FaArrowUp className='hover:bg-[#141d36] rounded-lg' size={18} />
      </button>

      
      
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12 text-center">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#141d36]"></h3>
          <p className="mb- text-[#141d36]">
            Delivering exceptional legal services with integrity and personalized attention.
          </p>
          <div className="flex space-x-4 mt-6" >
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="text-[#141d36] hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="text-xl">{social.icon}</span> {/* Placeholder for icons */}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#141d36]">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <Link 
                  to={ link === 'Home' ? '/' : `${link.toLowerCase()}` } 
                  className="hover:text-silver transition-colors text-[#141d36]"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Practice Areas */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#141d36]">Practice Areas</h3>
          <ul className="space-y-2">
            {['Criminal Law', 'Traffic Law', 'Property Law', 'Civil Law'].map((area) => (
              <li key={area}>
                <Link 
                  to={`/services/${area.toLowerCase()}`} 
                  className="hover:text-silver transition-colors text-[#141d36]"
                >
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        {/* <div>
          <h3 className="text-xl font-bold  text-[#141d36] mb-4">Contact Us</h3>
          <address className="not-italic space-y-4">
            <a href = '#' className=" text-[#141d36]">123 Legal Avenue</a> <br />
            <a href = '#' className=" text-[#141d36]">Sydney, NSW 2176</a>
            <p className="">
              <a href="tel:+12125551234" className=" text-[#141d36]  hover:text-silver transition-colors">
                (02) 1234 5678
              </a>
            </p>
            <p>
              <a href="mailto:#" className=" text-[#141d36] hover:text-silver transition-colors ">
                info@legal.com
              </a>
            </p>
          </address>
        </div>
      </div> */}

        <div className='md:ml-8'>
          <h3 className="text-xl font-bold mb-4 text-[#141d36]">Contact Us</h3>
          <ul className="space-y-2">
            {['Address1', 'Address2', 'Phone', 'email'].map((link) => (
              <li key={link}>
                <Link 
                  to={ link === "Phone" ? `tel:/${link.toLowerCase()}`: `${link}` && link === "email" ? `mailto:/${link.toLowerCase()}`: `${link}`} 
                  className="hover:text-silver transition-colors text-[#141d36]"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Future use */}
      {/* Copyright */}
       <div className="border-t border-silver pt-8 text-center text-[#141d36] text-sm">
        <p>
          &copy; {new Date().getFullYear()} Mark Mekhayl. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <Link to="/#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div> 
    </div>
</footer>
  );
};

export default Footer;