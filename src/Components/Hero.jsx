import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getAssetPath } from "../utils/getAssetPath";


const Hero = () => {
  const location = useLocation(); // Get the current location
  const banner1 = getAssetPath("sydneycourt.jpg")
  const banner2 = getAssetPath("banner.png")

  if (location.pathname === "/contact" || location.pathname === "/services/criminal-law") {
    return null; // Don't render the Hero on the Contact page
  }

  return (
    <section className="w-full h-[700px] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          disableOnInteraction: false,
          delay: 5000,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={false}
        className="w-full h-full"
      >
        {[banner1, banner2, "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"].map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Conditional Overlay Content */}
      {location.pathname === "/" && (
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 lg:px-8 ">
          <div className="text-center max-w-3xl mt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-[#141d36]">
              Expert Legal Solutions <br />
              <span className="text-[#ededf0]">Tailored to Your Needs</span>
            </h1>
            <h2 className="text-lg md:text-xl text-[#ededf0] mb-8 max-w-2xl mx-auto font-strong">
              At Legal, we combine decades of experience with personalized
              attention to deliver exceptional results for our clients.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="border-2 bg-[#ededf0]/60 border-[#141d36] text-[#141d36] px-8 py-3 rounded-md font-medium hover:bg-[#141d36] hover:text-[#edeef0] transition duration-300 text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}

      {location.pathname === "/about" && (
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 lg:px-8">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-strong leading-tight mb-6 text-[#141d36]">
              About Our Firm
            </h1>
            <h3 className="text-xl text-[#ededf0] max-w-3xl mx-auto">
              Committed to excellence in legal representation since our founding.
            </h3>
          </div>
        </div>
      )}

        {location.pathname === "/services" && (
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 lg:px-8">
            <div className="text-center max-w-4xl ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#141d36]">
                 Our Services
              </h1>
              <h3 className="text-xl text-[#ededf0] max-w-3xl mx-auto ">
              Comprehensive legal solutions tailored to your unique needs
              </h3>
            </div>
          </div>
        )}
    </section>
  );
}




export default Hero;

// {location.pathname === "/" && ( 
//   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 lg:px-8">
//     <div className="text-center max-w-3xl">
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#141d36]">
//         Expert Legal Solutions <br />
//         <span className="text-[#c0c0c0]">Tailored to Your Needs</span>
//       </h1>
//       <p className="text-lg md:text-xl text-[#141d36] mb-8 max-w-2xl mx-auto t">
//         At Rabbah Legal, we combine decades of experience with personalized
//         attention to deliver exceptional results for our clients.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4 justify-center ">
//         <Link
//           to="/contact"
//           className="border-2 border-[#141d36] text-[#141d36] px-8 py-3 rounded-md font-medium hover:bg-[#ededf0] !important transition duration-300 text-center"
//         >
//           Schedule Consultation
//         </Link>
      
//       </div>
//     </div>
//   </div>
// )}