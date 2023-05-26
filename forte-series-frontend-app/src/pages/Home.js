import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/homeComponents/heroBanner';
import ShopBanner from '../components/homeComponents/shopBanner';
import BestSellersSection from '../components/homeComponents/BestSellersSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <ShopBanner />
      <BestSellersSection />
    </div>
  );
};

export default Home;
