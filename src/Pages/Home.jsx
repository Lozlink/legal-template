import { Link } from 'react-router-dom';
import AnimatedPage from '../Components/AnimatedPage';
import { HugeiconsIcon } from '@hugeicons/react'
import { LegalDocument01Icon, CourtHouseIcon, InvestigationIcon, JudgeIcon, ShieldIcon, JusticeScaleIconFreeIcons, LicenseIcon } from '@hugeicons/core-free-icons';
import { getAssetPath } from '../utils/getAssetPath';
const Home = () => {
  
  const practiceAreas = [
    {
      icon: 
      <HugeiconsIcon
        icon={LegalDocument01Icon}
        size={36}
        color="#000000"
        strokeWidth={1.5}
      />,
      title: "Bail Applications",
      description: "We provide prompt, strategic representation to help you or a loved one secure bail. Rabbah Legal ensures your application is strong, clear, and focused on getting you released as soon as possible.",
    },
    {
      icon: 
        <HugeiconsIcon
          icon={JusticeScaleIconFreeIcons}
          size={36}
          color="#000000"
          strokeWidth={1.5}
        />,
      title: "Sentencing",
      description: "We advocate for fair and lenient outcomes during sentencing, presenting compelling arguments and mitigating factors to support your case.",
    },
    {
      icon: 
        <HugeiconsIcon
        icon={InvestigationIcon}
        size={36}
        color="#000000"
        strokeWidth={1.5}
      />,
      title: "Criminal Appeals",
      description: "If you've been unfairly convicted or received an excessive sentence, we can help. Our team reviews your case, identifies legal errors, and represents you through the appeals process to seek a just outcome.",
    },
    {
      icon: 
        <HugeiconsIcon
          icon={JudgeIcon}
          size={36}
          color="#000000"
          strokeWidth={1.5}
        />,
      title: "Parole Hearings",
      description: "We guide and represent clients through parole hearings, advocating for early release by presenting strong evidence of rehabilitation and readiness to reintegrate into the community.",
    },
    {
      icon: 
        <HugeiconsIcon
          icon={ShieldIcon}
          size={36}
          color="#000000"
          strokeWidth={1.5}
        />,
      title: "Defended Hearings",
      description: "In defended hearings, we thoroughly challenge the prosecution's case, cross-examine witnesses, and present strong evidence to protect your rights.",
    },
    {
      icon: 
        <HugeiconsIcon
          icon={LicenseIcon}
          size={36}
          color="#000000"
          strokeWidth={1.5}
        />,
      title: "License Appeals",
      description: "Lost your licence? We can help you appeal the suspension or disqualification and work toward getting you back on the road legally.",
    },
  ];

  const why = getAssetPath("why.jpg")

  return (
    <AnimatedPage>
      <div>
        {/* Hero Section */}
        <section className=" pt-10 px-6 ">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#141d36]">Our Services</h1>
            <div className="w-32 h-1 bg-[#c0c0c0] mx-auto mb-8"></div>
            <p className="text-xl text-[#141d36] max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your unique needs
            </p>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="group p-8 border-4 border-[#141d36] rounded-lg hover:shadow-xl hover:scale-105 transition-all flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-4 flex items-center justify-center">{area.icon}</div>
                <h2 className="text-2xl font-bold text-[#141d36] mb-3 text-center">{area.title}</h2>
                <p className="text-gray-700 mb-6 text-center">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Why Choose Us */}
        <section
          style={{ backgroundImage: `url(${why})` }}
          className="py-16 lg:py-24 opacity-100 rounded-sm bg-cover"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#141d36]">
              Why?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center font-bold space">
              <div>
                <ul className="space-y-6">
                  {[
                    "✓ 10+ years combined experience",
                    "✓ Client-focused approach",
                    "✓ Proven track record",
                    "✓ Transparent pricing",
                  ].map((item, i) => (
                    <li key={i} className="flex justify-center">
                      <span className="text- mr-3 mt-1">•</span>
                      <span className="text-lg text-[#ededf0] md:text-[#ededf0] xl:text-[#141d36] lg:text[#ededf0]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-bold mb-6 lg:ml-40 md:text-[#ededf0] xl:text-[#141d36] lg:text[#ededf0] text-center">
                <h3 className="text-2xl font-bold mb-4 md: sm:text-center">Our Philosophy</h3>
                <p className="mb-6">
                  We believe in delivering exceptional legal services with integrity and
                  personalized attention to every client.
                </p>
                <Link
                  to="/about"
                  className="inline-block bg-[#c0c0c0] text-[#141d36] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* testimonials/recent successes */}
        {/* <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Recent Successes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          </div>
        </section>
        */}
      </div> 
    </AnimatedPage>      
  );
};

export default Home;