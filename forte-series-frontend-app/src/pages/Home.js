import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/homeComponents/heroBanner';
import ShopBanner from '../components/homeComponents/shopBanner';
import FounderIntro from '../components/homeComponents/FounderIntro';
import BestSellersSection from '../components/homeComponents/BestSellersSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <ShopBanner />
      <BestSellersSection />
      <FounderIntro />
    </div>
  );
};

export default Home;
