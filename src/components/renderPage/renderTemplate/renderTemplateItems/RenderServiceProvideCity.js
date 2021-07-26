import React, { useContext } from 'react';

import { allCities } from '../../../../utils/constants/city';
import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import { SectionWrapper } from '../../../../styles/layoutStyledComponents/TemplateLayout';
import { Heading3 } from '../../../../styles/sharedStyledComponents/headings';

export default function RenderServiceProvideCity({ margin, width }) {
  const { serviceArea, templateType } = useContext(IntroRenderContext);
  const sortedCities = allCities.filter((city) => serviceArea.includes(city));

  return (
    <SectionWrapper width={width} margin={margin} flex="none">
      <Heading3>服務地區</Heading3>
      <p className={`text-lg ${templateType === 1 && 'border-t-2 border-gray-100 pt-3 px-3'}`}>
        {sortedCities.join('、')}
      </p>
    </SectionWrapper>
  );
}
