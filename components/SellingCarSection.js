import React from 'react';

const SellingCarSection = () => {
  return (
    <div className="bg-red-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 p-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selling your car has never been easier!</h2>
          <p className="text-lg text-white mb-8">THE SIMPLE WAY TO SELL YOUR CAR ONLINE</p>
        </div>
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src="./feed.png" alt="Car" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default SellingCarSection;
