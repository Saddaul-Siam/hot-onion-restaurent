import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import BreakFasts from '../BreakFasts/BreakFasts';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="py-5">
        <Link to="/" className="text-black text-decoration-none px-3">Breakfast</Link>
        <Link to="/lunch" className="text-black text-decoration-none px-3">Lunch</Link>
        <Link to="/" className="text-black text-decoration-none px-3">Dinner</Link>
      </div>
      <div>
        <BreakFasts></BreakFasts>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;