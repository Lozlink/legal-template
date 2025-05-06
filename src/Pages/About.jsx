import { Link } from 'react-router-dom';
import AnimatedPage from '../Components/AnimatedPage';
import { getAssetPath } from '../utils/getAssetPath';

const About = () => {
  const values = getAssetPath("values.jpg")
  return (
    <AnimatedPage>
      <div>
       
        {/* Main Content */}
        <div className=" mx-auto px-6 py-16 lg:py-24 space-y-24">
          {/* Philosophy Section */}
          <section className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#141d36]">Our Philosophy</h2>
              <div className="space-y-4 text-lg text-[#141d36]">
                <p>
                  At our core, we believe legal services should be accessible, transparent, 
                  and tailored to each client's unique needs.
                </p>
                <p>
                  We combine decades of collective experience with a modern approach to 
                  deliver exceptional results.
                </p>
                <p className="font-semibold">
                  Your success is our success — we measure ours by yours.
                </p>
              </div>
            </div>
            <div className="bg-[#141d36]/70 p-8 rounded-lg h-full">
              <div className="aspect-video rounded-lg flex items-center justify-center">
                <span className="text-silver text-lg ">
                  <img src="/src/assets/image.png" alt="" />
                </span>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section
            style={{ backgroundImage: `url(${values})` }}
            className="bg-cover bg-center py-16 px-6 rounded-lg max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ededf0]">Our Values</h2>
              <div className="w-24 h-1  mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  description: "We provide honest counsel and maintain the highest ethical standards in all matters."
                },
                {
                  title: "Diligence",
                  description: "Meticulous attention to detail in every case we handle."
                },
                {
                  title: "Innovation",
                  description: "Adapting legal strategies to our clients' evolving needs."
                }
              ].map((value, index) => (
                <div key={index} className=" p-8 rounded-lg border border-[#141d36]/20 bg-[#ededf0]/30 hover:bg-white/70">
                  <h3 className="text-xl font-bold mb-3 text-[#141d36] text-center">{value.title}</h3>
                  <p className="text-[#141d36] font-strong text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="w-32 h-1 bg-[#c0c0c0] mx-auto mb-8"></div>

          {/* CTA Section */}
          <section className=" text-[#141d36] rounded-lg  text-center bg-[#141d36]/70 py-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to discuss your legal needs?</h2>
            <p className="text-silver max-w-2xl mx-auto mb-8">
              Schedule a confidential consultation with our experienced team.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-[#ededf0] text-[#141d36] px-8 py-3 rounded-md font-medium hover:bg-[#141d36]/70"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;