import React from 'react';
import './City.css'
const CityInfo = () => {
  const city = 'London';
  const country = 'United Kingdom';
  const foundationYear = 43; // Замените это значение на год основания вашего города

  return (
    <div className="city-info" id='City'>
      <h1>{city}</h1>
      <h2>{country}</h2>
      <p>Foundation Year: {foundationYear}</p>
      <div className="card-container">
        <div className="card">
          <img src="first.jpg" alt="Landmark 1" />
          <p>Big Ben</p>
        </div>
        <div className="card">
          <img src="path_to_image2.jpg" alt="Landmark 2" />
          <p>Landmark 2</p>
        </div>
        <div className="card">
          <img src="path_to_image3.jpg" alt="Landmark 3" />
          <p>Landmark 3</p>
        </div>
      </div>
    </div>
  );
};



export default CityInfo;
