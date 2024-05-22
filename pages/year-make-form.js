import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link component from Next.js

const RegisterForm = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trim, setTrim] = useState('');
  const [miles, setMiles] = useState('');
  const [zip, setZip] = useState('');
  const router = useRouter(); // Next.js router

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Check if plate number and VIN are empty
    if (!plateNumber && !vin) {
      // Redirect to the YearMakeForm page
      router.push('/year-make-form');
    } else {
      // Handle form submission with plate number or VIN
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded shadow-lg">
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} noValidate id="vin-form" data-gtm-form-interact-id="0">
              {/* New Form Fields */}
              <div className="mb-4">
                <label htmlFor="vehicleType" className="block text-gray-700 font-bold mb-2">Vehicle Type</label>
                <input 
                  type="text" 
                  id="vehicleType" 
                  name="vehicleType" 
                  placeholder="Enter Vehicle Type" 
                  value={vehicleType} 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" 
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setVehicleType(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year</label>
                <input 
                  type="text" 
                  id="year" 
                  name="year" 
                  placeholder="Enter Year" 
                  value={year} 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" 
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="make" className="block text-gray-700 font-bold mb-2">Make</label>
                <input 
                  type="text" 
                  id="make" 
                  name="make" 
                  placeholder="Enter Make" 
                  value={make} 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" 
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="model" className="block text-gray-700 font-bold mb-2">Model</label>
                <input 
                  type="text" 
                  id="model" 
                  name="model" 
                  placeholder="Enter Model" 
                  value={model} 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" 
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="trim" className="block text-gray-700 font-bold mb-2">Trim</label>
                <input 
                  type="text" 
                  id="trim" 
                  name="trim" 
                  placeholder="Enter Trim" 
                  value={trim} 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" 
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setTrim(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="miles" className="block text-gray-700 font-bold mb-2">Miles</label>
                <input 
                  type="text" 
                  id="miles" 
                  name="miles" 
                  value={miles} 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" // Added text-black class
                  placeholder="Enter Miles"
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setMiles(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">Zip</label>
                <input 
                  type="text" 
                  id="zip" 
                  name="zip" 
                  value={zip} 
                  maxLength="5" 
                  className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black" // Added text-black class
                  placeholder="Enter Zip"
                  aria-required="true" 
                  aria-invalid="false" 
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              {/* End of New Form Fields */}
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Submit
              </button>
              <p className="mt-4 text-center">
                <Link href="/year-make-form">Submit without plate or vin</Link> {/* Use Link component for navigation */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
