import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const VehicleInformation = () => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [series, setSeries] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [cylinders, setCylinders] = useState('');
  const [transmission, setTransmission] = useState('');
  const [color, setColor] = useState('');
  const [odometer, setOdometer] = useState('');
  const [accidentHistory, setAccidentHistory] = useState('');
  const [vehicleCondition, setVehicleCondition] = useState('');
  const [payoff, setPayoff] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedPhotos, setUploadedPhotos] = useState([]); // State to store uploaded photo URLs
  const [vin, setVin] = useState(''); // New state for VIN
  const router = useRouter();

  useEffect(() => {
    // Extract VIN from query parameters
    const { query } = router;
    const vinFromURL = query.vin;

    if (vinFromURL) {
      setVin(vinFromURL); // Set the VIN state
    }
  }, [router]);

  useEffect(() => {
    if (vin) {
      fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`)
        .then(response => response.json())
        .then(data => {
          const result = data.Results[0]; // Extracting the first result
          setYear(result.ModelYear);
          setMake(result.Make);
          setModel(result.Model);
          setSeries(result.Series);
          setFuelType(result.FuelTypePrimary);
          setCylinders(result.EngineCylinders);
          setTransmission(result.TransmissionStyle);
          // Add more fields as needed
        })
        .catch(error => console.error('Error fetching VIN data:', error));
    }
  }, [vin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', { year, make, model, series, fuelType, cylinders, transmission, color, odometer, accidentHistory, vehicleCondition, payoff });
    console.log('Contact Information:', { firstName, lastName, email, phone });
    console.log('Selected files:', selectedFiles);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);

    // Read the selected files as URLs and store them
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setUploadedPhotos(fileURLs);
  };

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById('photoUpload');
    fileInput.click();
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded shadow-lg">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Vehicle Information</h1>
            <form onSubmit={handleSubmit} noValidate id="new-form" data-gtm-form-interact-id="0">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year</label>
                  <input 
                    type="text" 
                    id="year" 
                    name="year" 
                    placeholder="Enter Year" 
                    value={year} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setYear(e.target.value)}
                    disabled={!!year} // Disabling if year is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="make" className="block text-gray-700 font-bold mb-2">Make</label>
                  <input 
                    type="text" 
                    id="make" 
                    name="make" 
                    placeholder="Enter Make" 
                    value={make} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setMake(e.target.value)}
                    disabled={!!make} // Disabling if make is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="model" className="block text-gray-700 font-bold mb-2">Model</label>
                  <input 
                    type="text" 
                    id="model" 
                    name="model" 
                    placeholder="Enter Model" 
                    value={model} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setModel(e.target.value)}
                    disabled={!!model} // Disabling if model is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="series" className="block text-gray-700 font-bold mb-2">Series</label>
                  <input 
                    type="text" 
                    id="series" 
                    name="series" 
                    placeholder="Enter Series" 
                    value={series} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setSeries(e.target.value)}
                    disabled={!!series} // Disabling if series is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="fuelType" className="block text-gray-700 font-bold mb-2">Fuel Type</label>
                  <input 
                    type="text" 
                    id="fuelType" 
                    name="fuelType" 
                    placeholder="Enter Fuel Type" 
                    value={fuelType} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setFuelType(e.target.value)}
                    disabled={!!fuelType} // Disabling if fuelType is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="cylinders" className="block text-gray-700 font-bold mb-2">Cylinders</label>
                  <input 
                    type="text" 
                    id="cylinders" 
                    name="cylinders" 
                    placeholder="Enter Cylinders" 
                    value={cylinders} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setCylinders(e.target.value)}
                    disabled={!!cylinders} // Disabling if cylinders is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="transmission" className="block text-gray-700 font-bold mb-2">Transmission</label>
                  <input 
                    type="text" 
                    id="transmission" 
                    name="transmission" 
                    placeholder="Enter Transmission" 
                    value={transmission} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setTransmission(e.target.value)}
                    disabled={!!transmission} // Disabling if transmission is filled
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="color" className="block text-gray-700 font-bold mb-2">Color</label>
                  <input 
                    type="text" 
                    id="color" 
                    name="color" 
                    placeholder="Enter Color" 
                    value={color} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="odometer" className="block text-gray-700 font-bold mb-2">Odometer</label>
                  <input 
                    type="text" 
                    id="odometer" 
                    name="odometer" 
                    placeholder="Enter Odometer" 
                    value={odometer} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setOdometer(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="accidentHistory" className="block text-gray-700 font-bold mb-2">Accident History</label>
                  <input 
                    type="text" 
                    id="accidentHistory" 
                    name="accidentHistory" 
                    placeholder="Enter Accident History" 
                    value={accidentHistory} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setAccidentHistory(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="vehicleCondition" className="block text-gray-700 font-bold mb-2">Vehicle Condition</label>
                  <input 
                    type="text" 
                    id="vehicleCondition" 
                    name="vehicleCondition" 
                    placeholder="Enter Vehicle Condition" 
                    value={vehicleCondition} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setVehicleCondition(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="payoff" className="block text-gray-700 font-bold mb-2">Payoff Information</label>
                  <input 
                    type="text" 
                    id="payoff" 
                    name="payoff" 
                    placeholder="Does your car have a payoff?" 
                    value={payoff} 
                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                    onChange={(e) => setPayoff(e.target.value)}
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <label htmlFor="photoUpload" className="block text-gray-700 font-bold mb-2 cursor-pointer">Upload Photos:</label>
                  <div className="relative border border-gray-300 rounded-md px-4 py-6 flex flex-col items-center justify-center bg-gray-100" onClick={handleUploadButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-400 mb-2 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <input 
                      type="file" 
                      id="photoUpload" 
                      name="photoUpload" 
                      accept="image/*" 
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <p className="text-gray-500">Click here to upload files or drag and drop them</p>
                  </div>
                  {/* Display uploaded photos */}
                  <div className="flex mt-4">
                    {uploadedPhotos.map((photoURL, index) => (
                      <div key={index} className="w-20 h-20 mr-4">
                        <img src={photoURL} alt={`Uploaded photo ${index}`} className="w-full h-full object-cover rounded-md" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full px-4 mb-4">
                  <h1 className="text-2xl font-bold mb-4 text-black">Contact Information</h1>
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="Enter First Name" 
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Enter Last Name" 
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter Email" 
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                      <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        placeholder="Enter Phone" 
                        className="form-input w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
