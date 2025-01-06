import React, { useState } from "react";

const FAQPage = () => {
  const faqData = [
    {
      question: "What is Kaal Bhairav Puja?",
      answer:
        "Kaal Bhairav Puja is a spiritual ritual performed to remove sins and negative energies from the past lifetimes, bringing peace and blessings.",
    },
    {
      question: "When is the next puja ceremony?",
      answer:
        "The next puja ceremony is scheduled for Monday, 18 January 2025. Please register to participate.",
    },
    {
      question: "How do I participate in the puja?",
      answer:
        "You can participate by clicking the 'Participate' button on our website or contacting us for more details.",
    },
    {
      question: "What are the benefits of this puja?",
      answer:
        "The puja offers blessings, relief from negative karma, protection from harm, and spiritual growth.",
    },
    {
      question: "How long does the puja ceremony last?",
      answer:
        "The ceremony typically lasts for 3-4 hours, depending on the specific rituals and participation of devotees.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h1>

      {faqData.map((faq, index) => (
        <div key={index} className="border-b-2 border-gray-200 py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left text-xl font-medium text-gray-700 focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span>{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
          </button>

          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
