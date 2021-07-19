import React from 'react';
import { allCities } from '../../../utils/constants/city';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { Heading3 } from '../../../styles/sharedStyledComponents/headings';

const ServiceProvideCity = ({ selectedServiceCities, margin, width }) => {
  const sortedCities = allCities.filter((city) => selectedServiceCities.includes(city));

  return (
    <SectionWrapper width={width} margin={margin} flex="none">
      <Heading3>服務地區</Heading3>
      <p className="text-lg">{sortedCities.join('、')}</p>
    </SectionWrapper>
  );
};

export default ServiceProvideCity;
