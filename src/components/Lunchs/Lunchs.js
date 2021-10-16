import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Lunch from '../Lunch/Lunch';
import Services from '../Services/Services';

const Lunchs = () => {
  const [lunchs, setLunchs] = useState([])
  useEffect(() => {
    fetch('./lunch.json')
      .then(rse => rse.json())
      .then(data => setLunchs(data))
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
          {lunchs.map(lunch => <Lunch key={lunch.id} lunch={lunch}></Lunch>)}
        </div>
      </div>
      <Services></Services>
    </>
  );
};

export default Lunchs;