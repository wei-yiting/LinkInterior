import React from 'react';
import { allCities } from '../../../utils/data/city';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';

const ServiceProvideCity = ({ selectedServiceCities }) => {
  const sortedCities = allCities.filter((city) => selectedServiceCities.includes(city));

  return (
    <SectionWrapper width="40%" flex="none" margin="30px 0">
      <h5>服務地區</h5>
      <p>{sortedCities.join('、')}</p>
    </SectionWrapper>
  );
};

export default ServiceProvideCity;
