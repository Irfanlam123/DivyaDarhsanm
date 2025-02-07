import  { useState } from "react";

const FAQPage = () => {
  const faqData = [
    {
      question: "Why should I choose Divya Darshanm for performing Puja?",
      answer:
        "Experience the sacred rituals with Divyadarshanm simply book tour spiritual journey, Take part in Sevas, Poojas, Annadanam, Gau Poojas and more, All from your Home. Experience the sacred rituals with Divyadarshanm simply book tour spiritual journey, Take part in Sevas, Poojas, Annadanam, Gau Poojas and more, All from your Home.",
    },
    {
      question: "I don’t know my Gotra, what should I do?",
      answer:
        "We would first suggest you to consult elders in your family to gather more information about your Gotra. If at all, no one in your family remembers the Gotra information, you can follow the guidance of the Shastras. As per the Shastras, if someone doesn’t know their Gotra they can consider their Gotra as Kashyap Gotra. So you can mention Kashyap Gotra in your Sankalpa form while completing the booking and proceed with your booking. Hari Aum.",
    },
    {
      question: "Who will perform the Puja?",
      answer:
        "Divya Dasrhanm is trusted by 1 Cr+ Hindus worldwide. We believe that it is our responsibility and Dharma to do justice to the trust put by our users in our services. Consequently, we conduct every puja with proper rituals as defined in the shastras of that deity. All the pandit ji’s who conduct pujas for SriMandir have experience ranging from 10-30 years. The families of our pandit ji’s have been working at the temple for generations and all of them revere the deity immensely. Not just the process and rituals, our pandit ji’s also have the right ‘bhava’ or emotion while doing your pujas and praying for your well-being.",
    },
    {
      question: "What will be done in this Puja?",
      answer:
        "Our pandit ji’s conducting pujas at the famous temples have exceptional knowledge and experience in Vedic rituals. Every puja through Divya Darshanm is always conducted in your name and gotra, as mentioned in our Vedas. Our pandit ji will perform your puja with the right ‘bhava’ and rituals mentioned in the ancient scriptures. After completing the puja, pandit ji will pray for the well-being of your family and your success. Hari Aum.",
    },
    {
      question: "How will I know the Puja has been done in my name?",
      answer:
        "Divya Darshanm is a trusted devotional brand where we perform every puja as per the Hindu shastras. Our experienced pandits of the temple will meticulously perform the Vedic rituals in your name and gotra and pray for your happiness and success. After the completion of the rituals, we will share all the puja updates to your Whatsapp number and a video of the puja will also be shared with you. Additionally, the prasad from the puja will be delivered to your home. Hari Aum.",
    },
    {
      question: "What will I get after the Puja is done?",
      answer:
        "Divya Dasrshanm understands your concern, therefore once the puja is completed, we will send the puja video to your Whatsapp within 4 days, capturing the sacred moments of the ritual in your name and gotra. Additionally, the divine prasad from the puja will be carefully packaged and delivered right to your doorstep. This way, you will not only experience the divine energy of the puja through the personalised video but also receive the prasad, bringing the sanctity of the ritual directly to your home. Hari Aum",
    },
    {
      question: "What are the other services offered by Divya Darshanm?",
      answer:
        "Divya Darshanm  understands your concern, therefore once the puja is completed, we will send the puja video to your Whatsapp within 4 days, capturing the sacred moments of the ritual in your name and gotra. Additionally, the divine prasad from the puja will be carefully packaged and delivered right to your doorstep. This way, you will not only experience the divine energy of the puja through the personalised video but also receive the prasad, bringing the sanctity of the ritual directly to your home. Hari Aum",
    },

    {
      question: "Where can I contact for more information?",
      answer:
        "Divya Darshanm always keeps in mind that even if you are unable to visit the pilgrimages, your devotion and faith will always reach there through us. And to make this happen, we are always available to you. If you require any information or support, please contact us at +91 7991522694. Hari Aum.",
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
    <div className="p-0">
      <div className="w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 py-2">
          Frequently Asked Questions
        </h1>

        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-xl font-medium text-gray-700 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <span className="text-[17px] font-montserrat font-bold">
                  {faq.question}
                </span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-600 px-2 text-[16px] ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
