import React from 'react';
import { allCities } from '../../../utils/data/city';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { Heading3 } from '../../../styles/sharedStyledComponents/headings';

const ServiceProvideCity = ({ selectedServiceCities }) => {
  const sortedCities = allCities.filter((city) => selectedServiceCities.includes(city));

  return (
    <SectionWrapper width="40%" flex="none" margin="30px 0">
      <Heading3>服務地區</Heading3>
      <p>{sortedCities.join('、')}</p>
    </SectionWrapper>
  );
};

export default ServiceProvideCity;
