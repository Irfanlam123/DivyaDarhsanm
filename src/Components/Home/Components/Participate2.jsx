import React from "react";
import FAQPage from "./FAQs";
import { useParams } from "react-router-dom";
import { Benifits } from "../../Puja/components/benifits";
import About from "../../About/About";

const App = () => {
  const participateData = [
    {
      id: 1,
      title: "About Puja",
      heading: "About-Puja",
      benifits: [
        { id: 1, name: "sdmnadja" },
        { id: 1, name: "sdmnadja" },
        { id: 1, name: "sdmnadja" },
      ],
      descriptio:
        "Kaal Bhairav Abhishek Puja, Sringar Sewa, Khappar Sewa and Bhog sewa to Remove 7 Past Lifetimes’ Sins and Negativity",
      content1:
        "Kaal Bhairav Jayanti, also known as Bhairava Ashtami is celebrated with deep reverence as it honours Kaal Bhairav, a fierce manifestation of Lord Shiva...",
      content2:
        "Performing 4 Prahar Kaal Bhairav Abhishek Puja, which involves Sringar Sewa, Khappar Sewa, and Bhog Sewa is believed to invoke Kaal Bhairav’s blessings...",
    },
    {
      id: 2,
      title: "Benefits2",
      benifits: "benifits2",
      heading: "Puja Benefits",
      descriptio:
        "Kaal Bhairav Abhishek Puja, Sringar Sewa, Khappar Sewa and Bhog sewa to Remove 7 Past Lifetimes’ Sins and Negativity",
      content1:
        "Kaal Bhairav Jayanti, also known as Bhairava Ashtami is celebrated with deep reverence as it honours Kaal Bhairav, a fierce manifestation of Lord Shiva...",
      content2:
        "Performing 4 fdkgdjg;dfjg;dfjgd;fjgdf;gjPrahar Kaal Bhairav Abhishek Puja, which involves Sringar Sewa, Khappar Sewa, and Bhog Sewa...",
    },
  ];

  const { id } = useParams();
  const filteredData = participateData.filter((item) => item.id == id);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-montserrat">
      <div className="flex justify-center space-x-8 p-4 sticky top-0 z-10 bg-white w-full shadow-md">
        {filteredData.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-black font-extrabold hover:underline hover:text-orange-600 py-2 px-4 rounded-md transition-all"
          >
            {section.title}
            {id}
          </button>
        ))}
      </div>

      <div>
        {filteredData.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen p-6 bg-white border-b-2 border-gray-300 mt-4"
          >
            <h1 className="text-[19px] font-bold ml-5">{section.heading}</h1>
            <div className="p-4">
              <p className="text-gray-900 text-xl font-bold">
                {section.descriptio}
              </p>
            </div>
            <div className="p-5">
              <p className="text-gray-600 text-[15px]">{section.content1}</p>
              <p className="text-gray-600 text-[15px] py-10">
                {section.content2}
              </p>
            </div>
            {/* <About /> */}
            <Benifits section={section} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
