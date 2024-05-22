import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const reviews = [
    { name: "Jane Doe", date: "May 10, 2024", text: "The entire process was smooth and easy. I received a great offer and the pickup service was incredibly convenient!" },
    { name: "John Smith", date: "April 22, 2024", text: "I was impressed with the professionalism and the ease of the transaction. I highly recommend this service." },
    { name: "Sarah Johnson", date: "March 15, 2024", text: "Great service and fair pricing. The entire process was hassle-free and efficient. Five stars!" },
    { name: "Michael Brown", date: "February 20, 2024", text: "Excellent service from start to finish. They offered a fair price and quick pickup." },
    { name: "Emily Davis", date: "January 12, 2024", text: "Quick, easy, and efficient. The team was very professional and helpful." },
    { name: "David Wilson", date: "December 5, 2023", text: "I appreciated the convenience and the fair offer. Highly recommended!" },
    { name: "Anna Thompson", date: "November 25, 2023", text: "The service was fast and hassle-free. I got a good deal and the pickup was seamless." },
    { name: "James Anderson", date: "October 30, 2023", text: "Professional and easy to deal with. I was very satisfied with the offer and the process." },
    { name: "Laura Martinez", date: "September 18, 2023", text: "Great experience overall. The offer was fair and the process was quick and easy." },
    { name: "Robert Taylor", date: "August 14, 2023", text: "Very pleased with the service. It was straightforward and the team was very professional." },
    { name: "Linda Moore", date: "July 8, 2023", text: "The entire process was smooth and stress-free. I got a great deal and quick service." },
    { name: "Kevin White", date: "June 22, 2023", text: "Excellent service. They made the entire process easy and convenient." },
    { name: "Nancy Harris", date: "May 30, 2023", text: "Very efficient and professional service. I would definitely use them again." },
    { name: "Steven Clark", date: "April 15, 2023", text: "The process was simple and straightforward. Great customer service and fair pricing." },
    { name: "Jessica Lewis", date: "March 10, 2023", text: "Highly recommend this service. They offered a good price and the process was hassle-free." },
    { name: "Daniel Walker", date: "February 5, 2023", text: "Very professional and efficient. The entire process was quick and easy." },
    { name: "Mary Hall", date: "January 18, 2023", text: "Smooth and convenient process. I got a good offer and the pickup was timely." },
    { name: "Christopher Allen", date: "December 12, 2022", text: "Fantastic service. The team was professional and the process was seamless." }
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 mb-8">A hassle-free vehicle selling experience is our goal for our awesome customers!</p>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-2">
                  <p className="text-gray-900 font-bold mr-2">{review.name}</p>
                  <img src="./google_review_logo.png" alt="Google Review" className="w-4 h-4" />
                </div>
                <p className="text-gray-600 mb-2">{review.date}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((star, index) => (
                    <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927C9.324 2.174 10.676 2.174 10.951 2.927l1.286 3.958a1 1 0 00.95.69h4.161c.548 0 .78.748.364 1.09l-3.37 2.453a1 1 0 00-.364 1.118l1.287 3.957c.275.753-.683 1.376-1.235.916l-3.372-2.452a1 1 0 00-1.176 0l-3.371 2.452c-.552.46-1.51-.163-1.235-.916l1.286-3.957a1 1 0 00-.364-1.118L2.785 8.665c-.416-.342-.184-1.09.364-1.09h4.161a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
