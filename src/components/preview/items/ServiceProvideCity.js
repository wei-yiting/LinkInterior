import React from 'react';
import { allCities } from '../../../utils/data/city';

const ServiceProvideCity = ({ selectedServiceCities }) => {
  const sortedCities = [];

  allCities.forEach((city) => {
    if (selectedServiceCities.includes(city)) {
      sortedCities.push(city);
    }
  });

  return (
    <div>
      <h5>服務地區</h5>
      <p>{sortedCities.join('、')}</p>
    </div>
  );
};

export default ServiceProvideCity;
