import React from 'react';
import './BreakFast.css'

const BreakFast = (props) => {
  const { img, name, details, price } = props.food;
  return (
    <div className="col-md-4 g-4 py-3 cart">
      <img className="img-fluid w-50" src={img} alt="" />
      <br />
      <h2>{name}</h2>
      <p>{details}</p>
      <h1>{price}</h1>
    </div>
  );
};

export default BreakFast;