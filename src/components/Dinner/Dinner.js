import React from 'react';
import { Link } from 'react-router-dom';

const Dinner = (props) => {
  const { name, img, details, price,id } = props.dinner
  return (

    <div className="col-md-4 g-4 py-3 cart">
      <Link to={`/dinner/${id}`}>
        <img className="img-fluid w-50" src={img} alt="" />
        <br />
        <h2>{name}</h2>
        <p>{details}</p>
        <h1>{price}</h1>
      </Link>
    </div>

  );
};

export default Dinner;