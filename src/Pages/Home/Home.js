import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Reviews from './Reviews';
import Courses from './Courses';

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <Courses/>
      <Reviews/>
    </div>
  );
};

export default Home;