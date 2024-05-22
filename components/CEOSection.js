import React from 'react';

const CEOSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-8">
          <img src="auto.png" alt="CEO" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our CEO</h2>
          <p className="text-lg text-gray-600 mb-8">Our CEO is a visionary leader with a passion for innovation and a proven track record in the automotive industry. With over two decades of experience, our CEO has propelled Texas Auto Buy to new heights through strategic guidance and expertise.</p>
          <p className="text-lg text-gray-600 mb-8">Under their leadership, Texas Auto Buy has become a trailblazer in the automotive sector, pioneering innovative solutions and setting new industry standards. Their forward-thinking approach has enabled the company to adapt to changing market dynamics and capitalize on emerging opportunities.</p>
          <p className="text-lg text-gray-600 mb-8">Our CEO's dedication to excellence is evident in every aspect of Texas Auto Buy's operations. Whether it's streamlining processes to enhance efficiency or investing in cutting-edge technology to improve customer experiences, their commitment to excellence permeates throughout the organization.</p>
          <p className="text-lg text-gray-600 mb-8">Moreover, their unwavering commitment to customer satisfaction has been instrumental in fostering long-term relationships and driving business growth. By prioritizing the needs of customers and delivering exceptional service, Texas Auto Buy has earned a reputation as a trusted partner in the automotive market.</p>



        </div>
      </div>
    </div>
  );
};

export default CEOSection;
