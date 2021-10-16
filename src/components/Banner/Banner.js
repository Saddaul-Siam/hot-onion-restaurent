import React from 'react';

const Banner = () => {
  return (
    <div>
      <div id="banner" className='d-flex justify-content-center align-items-center'>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1>Best food waiting for your belly</h1>
          <div>
            <input className="border-0 p-2 rounded-pill" type="text" placeholder="Search food items" name="" id="" />
            <button className="btn btn-danger rounded-pill">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;