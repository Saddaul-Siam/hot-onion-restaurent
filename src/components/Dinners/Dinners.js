import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Dinner from '../Dinner/Dinner';
const Dinners = () => {
  const [dinners, setDinners] = useState([])
  useEffect(() => {
    fetch('./dinner.json')
      .then(rse => rse.json())
      .then(data => setDinners(data))
  }, [])
  return (
    <>
      <Banner></Banner>
      <div className="py-5">
        <Link to="/" className="text-black text-decoration-none px-3">Breakfast</Link>
        <Link to="/lunch" className="text-black text-decoration-none px-3">Lunch</Link>
        <Link to="/dinner" className="text-black text-decoration-none px-3">Dinner</Link>
      </div>
      <div className="container">
        <div className="row">
          {dinners.map(dinner => <Dinner key={dinner.id} dinner={dinner}></Dinner>)}
        </div>
      </div>
      <Services></Services>
    </>
  );
};

export default Dinners;