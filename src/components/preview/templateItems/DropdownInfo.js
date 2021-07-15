import React from 'react';

import { SectionWrapper, DropdownContainer } from '../../../styles/layout/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons';

const DropdownInfo = ({ city, profession, flexDirection }) => {
  return (
    <SectionWrapper flexDirection={flexDirection}>
      <DropdownContainer>
        <LocationIcon />
        <span className="text-xl">{city.name}</span>
      </DropdownContainer>
      <DropdownContainer>
        <ProfessionIcon />
        <span className="text-xl">{profession.name}</span>
      </DropdownContainer>
    </SectionWrapper>
  );
};

export default DropdownInfo;
