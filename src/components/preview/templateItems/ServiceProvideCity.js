import React from 'react';
import { allCities } from '../../../utils/data/city';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { Header3 } from '../../../styles/sharedStyledComponents/headers';

const ServiceProvideCity = ({ selectedServiceCities }) => {
  const sortedCities = allCities.filter((city) => selectedServiceCities.includes(city));

  return (
    <SectionWrapper width="40%" flex="none" margin="30px 0">
      <Header3>服務地區</Header3>
      <p>{sortedCities.join('、')}</p>
    </SectionWrapper>
  );
};

export default ServiceProvideCity;
