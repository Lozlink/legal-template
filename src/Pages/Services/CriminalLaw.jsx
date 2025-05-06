import { Link } from 'react-router-dom';
import AnimatedPage from '../../Components/AnimatedPage';

import { useState } from 'react';
import { getAssetPath } from '../../utils/getAssetPath';
const CriminalLaw = () => {
  const criminalbanner = getAssetPath("criminalbanner.jpg")
  const assault = getAssetPath('Assault.png')
  const drugs = getAssetPath('drugs.jpg')
  const firearms = getAssetPath('firearms.jpg')
  //HERE IS WHERE THE ACTUAL CONTENT LIVES
  const offenses = [
    {
      name: "Common Assault",
      description: `It is a criminal offence under section 61 of the Crimes Act 1900 (NSW) to assault any person although not occasioning actual bodily harm. An assault is a physical act where a person intentionally or recklessly causes another person to apprehend immediate and unlawful violence without their consent.`,
      penalties: [
        "Section 10 dismissal (no conviction recorded)",
        "Conviction with no further penalty",
        "Fine",
        "Conditional release order without conviction",
        "Conditional release order with conviction",
        "Community corrections order",
        "Intensive corrections order",
        "Full-time imprisonment",
      ],
      defences: ["Self Defence", "Duress", "Necessity", "Lawful Correction"],
      background: `url('${assault}')`
    },
    {
      name: "Drug Offenses",
      description: `Drug offenses include possession, trafficking, and manufacturing of illegal substances. These offenses are taken seriously and can result in severe penalties depending on the quantity and type of drug involved.`,
      penalties: [
        "Fine",
        "Community corrections order",
        "Intensive corrections order",
        "Imprisonment",
      ],
      defences: ["Lack of Knowledge", "Duress", "Mistaken Identity"],
      background: `url('${drugs}')`
    },
    {
      name: "Firearms Offenses",
      description: `Firearms offenses involve the illegal possession, use, or trafficking of firearms. These offenses are governed by strict laws to ensure public safety.`,
      penalties: [
        "Fine",
        "Community corrections order",
        "Imprisonment",
      ],
      defences: ["Lawful Possession", "Duress", "Mistaken Identity"],
      background: `url('${firearms}')`
    },
  ];
  const [selectedOffense, setSelectedOffense] = useState(offenses[0]);

  return (
    <AnimatedPage>
      <div className="space-y-8">
        {/* Hero Section */}
        <section
          className="relative w-full h-[600px] sm:h-[300px] md:h-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${criminalbanner})` }}
        >
          <div className="absolute inset-0 bg-navy/70 flex flex-col items-center justify-center text-white text-center px-4 mt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ededf0]">Criminal Law</h1>
            <p className="text-lg md:text-xl text-[#ededf0] mt-4">
              Providing strong legal representation for criminal matters.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#ededf0] text-[#141d36] mt-5 px-8 py-3 rounded-md font-medium hover:bg-[#141d36]/70 hover:text-[#edeef0] "            >
              Contact Us Today
            </Link>
          </div>
        </section>
    

        {/* Services Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-[#141d36] text-center">Types of Criminal Offenses</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            {/* Sidebar with Offense Titles */}
            <div className="flex-shrink-0 w-full md:w-1/3 space-y-4">
              {offenses.map((offense, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffense(offense)}
                  className={`block w-full text-left px-4 py-2 rounded-md font-medium ${
                    selectedOffense.name === offense.name
                      ? "bg-[#141d36] text-white"
                      : "bg-[#ededf0] text-[#141d36] hover:bg-[#141d36] hover:text-white"
                  }`}
                >
                  {offense.name}
                </button>
              ))}
            </div>

            {/* Blurb Section */}
            <div className="flex-grow p-3 rounded-lg shadow-md bg-cover bg-center bg-no-repeat relative"
            style={{backgroundImage: selectedOffense.background}}            
            >
              <div className=" bg-cover">
                <h3 className="text-xl font-bold text-[edeef0] mb-3">{selectedOffense.name}</h3>
                <p className="text-sm text-[edeef0] mb-4">{selectedOffense.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[edeef0]">Penalties:</h4>
                  <ul className="list-disc list-inside text-sm text-[edeef0] pl-2">
                    {selectedOffense.penalties.map((penalty, index) => (
                      <li key={index}>{penalty}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 mt-4">
                  <h4 className="font-semibold text-[edeef0]">Defences:</h4>
                  <ul className="list-disc list-inside text-sm text-[edeef0] pl-2">
                    {selectedOffense.defences.map((defence, index) => (
                      <li key={index}>{defence}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-[#141d36] text-white py-10 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Criminal Law?</h2>
          <p className="text-lg mb-6">
            Contact us today for a free initial consultation with our experienced criminal law team.
          </p>
          <div className="space-y-4 ">
            <Link to="/contact" className="bg-white text-[#141d36] px-8 py-3 rounded-md font-medium hover:bg-gray-200">
              Enquire Online
            </Link>
            <p className="text-lg mt-5">Or call us at <strong>1300 000 000</strong></p>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default CriminalLaw;