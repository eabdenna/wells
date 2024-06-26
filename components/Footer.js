import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Texas Auto Buy</h3>
            <p className="text-gray-400">
              Your premier destination for selling your car in Texas. We provide a hassle-free, transparent, and fair process for selling your vehicle.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Main St, Dallas, TX</li>
              <li>Email: info@texasautobuy.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.326C.594 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.326 24H12.82v-9.294H9.691v-3.622h3.129V8.411c0-3.1 1.893-4.785 4.658-4.785 1.324 0 2.463.099 2.794.143v3.24h-1.918c-1.503 0-1.793.715-1.793 1.762v2.312h3.584l-.467 3.622h-3.117V24h6.116C23.405 24 24 23.406 24 22.675V1.326C24 .594 23.406 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.385-1.833.646-2.828.764 1.014-.611 1.794-1.574 2.163-2.724-.949.561-2.005.965-3.127 1.184-.896-.959-2.173-1.557-3.591-1.557-2.717 0-4.924 2.208-4.924 4.924 0 .386.045.762.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.423.724-.666 1.562-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.025-1.566-.248-2.228-.616v.061c0 2.385 1.697 4.374 3.946 4.827-.414.111-.852.171-1.303.171-.318 0-.627-.031-.928-.088.631 1.953 2.463 3.377 4.631 3.417-1.7 1.333-3.839 2.127-6.166 2.127-.399 0-.79-.023-1.175-.067 2.197 1.409 4.805 2.228 7.609 2.228 9.142 0 14.307-7.721 14.307-14.414 0-.219-.004-.436-.015-.653.984-.712 1.834-1.601 2.508-2.614z" />
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.248 2.608.415.71.182 1.31.41 1.903.88.593.47 1.108 1.084 1.58 1.648.472.563.699 1.162.88 1.873.167.638.36 1.438.415 2.609.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.248 1.97-.415 2.608-.182.71-.41 1.31-.88 1.903-.47.593-1.084 1.108-1.648 1.58-.563.472-1.162.699-1.873.88-.638.167-1.438.36-2.609.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.248-2.608-.415-.71-.182-1.31-.41-1.903-.88-.593-.47-1.108-1.084-1.58-1.648-.472-.563-.699-1.162-.88-1.873-.167-.638-.36-1.438-.415-2.609-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.248-1.97.415-2.608.182-.71.41-1.31.88-1.903.47-.593 1.084-1.108 1.648-1.58.563-.472 1.162-.699 1.873-.88.638-.167 1.438-.36 2.609-.415 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.013 7.052.07 5.773.127 4.706.36 3.785.757 2.829 1.167 2.024 1.801 1.353 2.47c-.67.67-1.303 1.476-1.713 2.432-.397.921-.63 1.988-.687 3.267C.013 8.332 0 8.741 0 12s.013 3.668.07 4.948c.057 1.279.29 2.346.687 3.267.41.956 1.043 1.762 1.713 2.432.67.67 1.476 1.303 2.432 1.713.921.397 1.988.63 3.267.687 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.279-.057 2.346-.29 3.267-.687.956-.41 1.762-1.043 2.432-1.713.67-.67 1.303-1.476 1.713-2.432.397-.921.63-1.988.687-3.267.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.057-1.279-.29-2.346-.687-3.267-.41-.956-1.043-1.762-1.713-2.432-.67-.67-1.476-1.303-2.432-1.713-.921-.397-1.988-.63-3.267-.687-1.28-.057-1.689-.07-4.948-.07s-3.668.013-4.948.07c-1.279.057-2.346.29-3.267.687-.956.41-1.762 1.043-2.432 1.713-.67.67-1.303 1.476-1.713 2.432-.397.921-.63 1.988-.687 3.267C.013 8.332 0 8.741 0 12s.013 3.668.07 4.948c.057 1.279.29 2.346.687 3.267.41.956 1.043 1.762 1.713 2.432.67.67 1.476 1.303 2.432 1.713.921.397 1.988.63 3.267.687 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.279-.057 2.346-.29 3.267-.687.956-.41 1.762-1.043 2.432-1.713.67-.67 1.303-1.476 1.713-2.432.397-.921.63-1.988.687-3.267.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.057-1.279-.29-2.346-.687-3.267-.41-.956-1.043-1.762-1.713-2.432-.67-.67-1.476-1.303-2.432-1.713-.921-.397-1.988-.63-3.267-.687-1.28-.057-1.689-.07-4.948-.07zm0 5.838c-3.406 0-6.162 2.755-6.162 6.162S8.594 18.162 12 18.162 18.162 15.406 18.162 12 15.406 5.838 12 5.838zm0 1.845c2.38 0 4.316 1.935 4.316 4.317S14.38 16.316 12 16.316 7.684 14.38 7.684 12 9.62 7.683 12 7.683zm6.406-2.633c0 .797-.646 1.443-1.443 1.443-.797 0-1.443-.646-1.443-1.443 0-.797.646-1.443 1.443-1.443.797 0 1.443.646 1.443 1.443z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.25 20.5h-2.5v-9h2.5v9zm-1.25-10.297c-.828 0-1.5-.674-1.5-1.503 0-.828.672-1.5 1.5-1.5.829 0 1.5.672 1.5 1.5 0 .829-.671 1.503-1.5 1.503zm12.25 10.297h-2.5v-4.951c0-1.171-.021-2.679-1.631-2.679-1.633 0-1.883 1.278-1.883 2.593v5.037h-2.5v-9h2.402v1.235h.033c.334-.631 1.149-1.297 2.363-1.297 2.526 0 2.994 1.664 2.994 3.831v5.231z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Texas Auto Buy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
