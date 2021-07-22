import React, { useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import {
  SectionWrapper,
  DropdownContainer,
} from '../../../styles/layoutStyledComponents/TemplateLayout';
import { LocationIcon, ProfessionIcon } from '../../../utils/icons';

export default function DropdownInfo({ flexDirection, margin, justifyContent, infoMargin }) {
  const { city, profession } = useContext(IntroCompileContext);
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
}
