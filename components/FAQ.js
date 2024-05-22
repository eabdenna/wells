import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const faqs = [
    {
      question: "What is Texas Auto Buy?",
      answer: "Texas Auto Buy is your premier destination for selling your car in Texas. We offer a hassle-free, transparent, and fair process for individuals looking to sell their vehicles."
    },
    {
      question: "How does the process work?",
      answer: "Contact us or visit our location to get a quick and accurate quote for your car. Bring your car in for a professional inspection. If you accept our offer, we handle all the paperwork and finalize the sale. You receive your payment on the spot."
    },
    {
      question: "Do I need an appointment?",
      answer: "While appointments are not required, they are recommended to ensure that we can serve you promptly."
    },
    {
      question: "What documents do I need to bring?",
      answer: "Please bring your vehicle's title, registration, and a valid ID. If you have any loan payoff information, bring that as well."
    },
    {
      question: "How quickly will I get paid?",
      answer: "Once you accept our offer, you will receive payment promptly. No waiting around for your money."
    },
    {
      question: "Can I sell a car that still has a loan on it?",
      answer: "Yes, you can sell a car that still has a loan on it. We will work with your lender to pay off the remaining balance, and any remaining equity will be paid to you."
    },
    {
      question: "What types of vehicles do you buy?",
      answer: "We buy all types of vehicles, including cars, trucks, SUVs, and vans. Whether your vehicle is nearly new or has seen better days, we are interested in buying it."
    },
    {
      question: "Do you buy cars in any condition?",
      answer: "Yes, we buy cars in any condition. Whether your car is running or not, has high mileage, or needs repairs, we will make you an offer."
    },
    {
      question: "How do you determine the value of my car?",
      answer: "Our team of experts evaluates each vehicle based on its condition, age, mileage, and current market value to provide you with a fair and competitive offer."
    },
    {
      question: "What if I have lost my car title?",
      answer: "If you have lost your car title, we can still help. We will guide you through the process of obtaining a duplicate title so that you can complete the sale."
    },
    {
      question: "Is there any obligation to accept the offer?",
      answer: "No, there is no obligation to accept our offer. You can receive a free, no-obligation quote for your car, and you are free to decide whether or not you want to sell it to us."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto bg-white">
      <div className="relative h-64 w-full mb-8">
        <img
          src="/texas.png"
          alt="FAQ Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white" data-aos="fade-down">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6" data-aos="fade-up">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left focus:outline-none"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{faq.question}</h2>
                </button>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="ml-4 text-2xl font-bold text-gray-800 focus:outline-none"
                >
                  {activeIndex === index ? '-' : '+'}
                </button>
              </div>
              {activeIndex === index && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
