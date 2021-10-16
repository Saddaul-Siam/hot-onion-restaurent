import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BreakFast from '../BreakFast/BreakFast';
const BreakFasts = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])
  return (
    <div className="container">
      <div className="row">
        <h1>this is BreakFast</h1>
        {
          foods?.map(food => <BreakFast 
            key={food.id}
            food={food}></BreakFast>)
        }
      </div>
    </div>
  );
};

export default BreakFasts;