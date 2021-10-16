import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, img, details } = service;
  return (
    <div className="col-md-4 g-4 py-3 ">
      <img className="img-fluid w-75" src={img} alt="" />
      <h2>{name}</h2>
      <p>{details}</p>
      <Link to="/" className="text-decoration-none">See more</Link>
    </div>
  );
};

export default Service;