import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const [vinTab, setVinTab] = useState(0);
  const [vin, setVin] = useState('');
  const [miles, setMiles] = useState('');
  const [zip, setZip] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [plateState, setPlateState] = useState('');
  const router = useRouter(); // Next.js router

  const handleTabChange = (value) => {
    setVinTab(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if plate number and VIN are empty
    if (!plateNumber && !vin) {
      // Redirect to the YearMakeForm page without changing the URL
      router.push({ pathname: '/InfoForm' }, undefined, { shallow: true });
    } else {
      // Construct query parameters
      const queryParams = {
        miles,
        zip
      };

      // Check if plate number is entered
      if (plateNumber && plateState) {
        // Add plate number and plate state to query parameters
        queryParams.plateNumber = plateNumber;
        queryParams.plateState = plateState;
      } else if (vin && miles && zip && vin.length === 17 && Number(miles) < 300000 && /^\d{5}$/.test(zip)) {
        // Add VIN to query parameters
        queryParams.vin = vin;
      } else {
        // Handle other form submission logic
        alert("Please enter a valid VIN (17 characters), miles under 300,000, and a valid US zip code.");
        return;
      }

      // Redirect to InfoForm and pass the query parameters
      router.push({
        pathname: '/InfoForm',
        query: queryParams
      });
    }
  };

  const usStates = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded shadow-lg">
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit} noValidate id="vin-form" data-gtm-form-interact-id="0">
              <input type="hidden" name="_token" value="DusMyDr2OT2Dn23bdjRn5dnEbDVlhA0LkTpaZDCw" />
              <input id="barcode" name="barcode" type="hidden" value="0" />
              <div className="mb-6 flex justify-center">
                <button
                  type="button"
                  className={`px-4 py-2 focus:outline-none ${vinTab === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                  onClick={() => handleTabChange(0)}
                  style={{ width: 'calc(50% - 4px)' }} // Adjusting width to match VIN input field
                >
                  Enter License Plate
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 focus:outline-none ${vinTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
                  onClick={() => handleTabChange(1)}
                  style={{ width: 'calc(50% - 4px)' }} // Adjusting width to match VIN input field
                >
                  Enter VIN
                </button>
              </div>
              {vinTab === 0 ? (
                <div className="mb-4 flex">
                  <div className="w-1/2 mr-2">
                    <label htmlFor="plateNumber" className="block text-gray-700 font-bold mb-2">Plate Number</label>
                    <input 
                      type="text" 
                      id="plateNumber" 
                      name="plateNumber" 
                      placeholder="Plate Number" 
                      value={plateNumber} 
                      className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                      aria-required="true" 
                      aria-invalid="false" 
                      onChange={(e) => setPlateNumber(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="plateState" className="block text-gray-700 font-bold mb-2">Plate State</label>
                    <select 
                      id="plateState" 
                      name="plateState" 
                      value={plateState} 
                      className="form-select w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700"
                      aria-required="true" 
                      aria-invalid="false" 
                      onChange={(e) => setPlateState(e.target.value)}
                    >
                      <option value="">Select State</option>
                      {usStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <label htmlFor="vin" className="block text-gray-700 font-bold mb-2">VIN</label>
                  <input 
                    type="text" 
                    id="vin" 
                    name="vin" 
                    placeholder="Enter 17 digit VIN" 
                    value={vin} 
                    maxLength="17" 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    aria-required="true" 
                    aria-invalid="false" 
                    onChange={(e) => setVin(e.target.value)}
                  />
                  <small className="block text-red-500"></small>
                </div>
              )}
              <div className="mb-4 flex">
                <div className="w-1/2 mr-2">
                  <label htmlFor="miles" className="block text-gray-700 font-bold mb-2">Miles</label>
                  <input 
                    type="text" 
                    id="miles" 
                    name="miles" 
                    value={miles} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    placeholder="Enter Miles"
                    aria-required="true" 
                    aria-invalid="false" 
                    onChange={(e) => setMiles(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">Zip</label>
                  <input 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    value={zip} 
                    maxLength="5" 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    placeholder="Enter Zip"
                    aria-required="true" 
                    aria-invalid="false" 
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Submit
              </button>
              <p className="mt-4 text-center">
                <a href="/InfoForm" className="text-blue-500" onClick={(e) => { e.preventDefault(); handleSubmit(e); }}>Submit without plate or vin</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
