import React from 'react';

import { SectionWrapper, DropdownContainer } from '../../../styles/layout/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons';
import InfoSpan from './InfoSpan';

const DropdownInfo = ({ city, profession, flexDirection }) => {
  return (
    <SectionWrapper flexDirection={flexDirection}>
      <DropdownContainer>
        <LocationIcon />
        <InfoSpan>{city.name}</InfoSpan>
      </DropdownContainer>
      <DropdownContainer>
        <ProfessionIcon />
        <InfoSpan>{profession.name}</InfoSpan>
      </DropdownContainer>
    </SectionWrapper>
  );
};

export default DropdownInfo;
