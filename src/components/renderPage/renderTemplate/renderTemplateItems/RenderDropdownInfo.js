import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import {
  SectionWrapper,
  DropdownContainer,
} from '../../../../styles/layoutStyledComponents/TemplateLayout';

import { LocationIcon, ProfessionIcon } from '../../../../utils/icons';

export default function RenderDropdownInfo({ flexDirection, margin, justifyContent, infoMargin }) {
  const { location, profession } = useContext(IntroRenderContext);

  return (
    <SectionWrapper flexDirection={flexDirection} margin={margin}>
      <DropdownContainer justifyContent={justifyContent} margin={infoMargin}>
        <LocationIcon />
        <span className="text-xl">{location}</span>
      </DropdownContainer>
      <DropdownContainer justifyContent={justifyContent} margin={infoMargin}>
        <ProfessionIcon />
        <span className="text-xl">{profession}</span>
      </DropdownContainer>
    </SectionWrapper>
  );
}
