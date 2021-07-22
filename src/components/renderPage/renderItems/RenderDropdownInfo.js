import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../contexts/IntroRenderContext';
import {
  SectionWrapper,
  DropdownContainer,
} from '../../../styles/layoutStyledComponents/TemplateLayout';

import { LocationIcon, ProfessionIcon } from '../../../utils/icons';

export default function RenderDropdownInfo(flexDirection, margin, infoMargin, infoJustifyContent) {
  const { location, profession } = useContext(IntroRenderContext);

  return (
    <SectionWrapper flexDirection={flexDirection} margin={margin}>
      <DropdownContainer justifyContent={infoJustifyContent} margin={infoMargin}>
        <LocationIcon />
        <span className="text-xl">{location}</span>
      </DropdownContainer>
      <DropdownContainer justifyContent={infoJustifyContent} margin={infoMargin}>
        <ProfessionIcon />
        <span className="text-xl">{profession}</span>
      </DropdownContainer>
    </SectionWrapper>
  );
}
