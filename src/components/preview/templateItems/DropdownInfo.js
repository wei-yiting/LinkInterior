import React from 'react';

import { SectionWrapper, DropdownContainer } from '../../../styles/layout/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons';

const DropdownInfo = ({ city, profession, flexDirection, margin, justifyContent, infoMargin }) => {
  return (
    <SectionWrapper flexDirection={flexDirection} margin={margin}>
      <DropdownContainer justifyContent={justifyContent} margin={infoMargin}>
        <LocationIcon />
        <span className="text-xl">{city.name}</span>
      </DropdownContainer>
      <DropdownContainer justifyContent={justifyContent} margin={infoMargin}>
        <ProfessionIcon />
        <span className="text-xl">{profession.name}</span>
      </DropdownContainer>
    </SectionWrapper>
  );
};

export default DropdownInfo;
