import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactUsSection = () => {
  const phoneNumber = "551-5290954";

  return (
    <div className="bg-banner py-12" style={{ backgroundImage: "url('./back3.jpeg')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We always love to hear from you</h2>
        <p className="text-lg text-white mb-4">Have questions or need assistance?</p>
        <p className="text-2xl text-white mb-8">
          <FaPhoneAlt className="inline-block align-middle mr-2" />
          <span className="inline-block align-middle">{phoneNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUsSection;
