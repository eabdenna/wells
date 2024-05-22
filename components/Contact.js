import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', { name, email, subject, message });
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto bg-white">
      <div className="relative h-64 w-full">
        <img
          src="/texas.png"
          alt="Contact Us Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white" data-aos="fade-down">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
        <form onSubmit={handleSubmit} data-aos="fade-up">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
            />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
