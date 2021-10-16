import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./service.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    <div className="">
      <div >
        <div className="d-flex flex-column align-items-start ps-5"> 
          <h1>Why you choose us </h1>
          <p>Barton waited twenty always repair is within we do an delighted offending curiosity <br /> my is dashwoods at.Bou prsperous increasing surrounded.</p>
        </div>
      </div>
      <div className="row">
        {services.map(service => <Service
          service={service}
          key={service.name}
        ></Service>)}
      </div>
    </div>
  );
};

export default Services;