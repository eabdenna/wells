// pages/index.js

import RegisterForm from '../components/RegisterForm';
import BackgroundVideo from '../components/BackgroundVideo';
import SellingProcess from '../components/SellingProcess';
import CEOSection from '../components/CEOSection';
import CustomerTestimonials from '../components/CustomerTestimonials';
import SellingCarSection from '../components/SellingCarSection';
import ContactUsSection from '../components/ContactUsSection';


const Home = () => {
  return (
    <div>
      <BackgroundVideo />
      <RegisterForm />
      <SellingProcess />
      <CEOSection />
      <CustomerTestimonials />
      <SellingCarSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
