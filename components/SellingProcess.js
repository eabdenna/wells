import React from 'react';

const SellingProcess = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Selling Your Car Online Works</h2>
          <p className="text-lg text-gray-600 mb-8">Get ready to be amazed. Selling your car online has never been simpler and more stress-free!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img src="/images/1.png" alt="Make the Deal" style={{ width: '17rem', height: '17rem' }} className="rounded-full mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1.Make the Deal</h3>
          </div>
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img src="/images/2.png" alt="Free Pick-up or Drop-off" style={{ width: '17rem', height: '17rem' }} className="rounded-full mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2.Drop-off</h3>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/3.png" alt="Get Paid & Done" style={{ width: '17rem', height: '17rem' }} className="rounded-full mb-2" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.Get Paid & Done</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProcess;
