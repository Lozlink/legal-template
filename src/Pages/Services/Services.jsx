import { Link } from 'react-router-dom';
import AnimatedPage from '../../Components/AnimatedPage';
import { HugeiconsIcon } from '@hugeicons/react'
import { LegalDocument01Icon, CourtHouseIcon, InvestigationIcon, JudgeIcon, ShieldIcon, JusticeScaleIconFreeIcons, LicenseIcon } from '@hugeicons/core-free-icons';

const Services = () => {
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

  return (
    <AnimatedPage>
      <div>
        {/* Hero Section */}
        {/* <section className=" px-6 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#141d36]">Our Services</h1>
            <div className="w-32 h-1 bg-[#c0c0c0] mx-auto mb-8"></div>
            <p className="text-xl text-[#141d36] max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to your unique needs
            </p>
          </div>
        </section> */}

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

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#050524]">Not sure which service you need?</h2>
            <p className="text-lg text-[#050524] mb-8">
              Our legal experts will help you identify the best solution for your situation.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-[#c0c0c0] text-[#050524] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </AnimatedPage>  
  );
};

export default Services;