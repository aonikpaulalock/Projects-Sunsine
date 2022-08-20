import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <Reviews/>
    </div>
  );
};

export default Home;