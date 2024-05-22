import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="container mx-auto bg-white">
      <div className="relative h-64 w-full">
        <img
          src="/texas.png"
          alt="About Us Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white" data-aos="fade-down">About Texas Auto Buy</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <p className="text-gray-700 mb-4" data-aos="fade-up">
          Welcome to Texas Auto Buy! We are your premier destination for selling your car in Texas. Our mission is to provide a hassle-free, transparent, and fair process for individuals looking to sell their vehicles.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">Why Choose Texas Auto Buy?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4" data-aos="fade-up">
          <li><strong>Easy Process:</strong> We have streamlined the car selling process to make it as simple and quick as possible. Just bring in your car, and we'll take care of the rest.</li>
          <li><strong>Fair Offers:</strong> Our team of experts evaluates each vehicle thoroughly to provide you with the best possible offer based on current market values.</li>
          <li><strong>No Obligations:</strong> Get a free, no-obligation offer for your car. You decide if you want to sell your car to us.</li>
          <li><strong>Fast Payment:</strong> Once you accept our offer, we ensure prompt payment. No waiting around for your money.</li>
          <li><strong>Excellent Service:</strong> We prioritize integrity and commitment to provide excellent service to our customers.</li>
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority, and we strive to exceed your expectations in every interaction.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-up">How It Works</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4" data-aos="fade-up">
          <li><strong>Get a Quote:</strong> Contact us or visit our location to get a quick and accurate quote for your car.</li>
          <li><strong>Vehicle Inspection:</strong> Bring your car in for a professional inspection. We'll assess its condition and confirm our offer.</li>
          <li><strong>Accept the Offer:</strong> If you accept our offer, we'll handle all the paperwork and finalize the sale.</li>
          <li><strong>Get Paid:</strong> Receive your payment on the spot. It's that simple!</li>
        </ol>
        <p className="text-gray-700 mb-4" data-aos="fade-up">
          At Texas Auto Buy, we pride ourselves on our integrity and commitment to providing excellent service. Whether your car is almost new or has seen better days, we are interested in buying it from you. Contact us today to get started!
        </p>
      </div>
    </div>
  );
};

export default About;
