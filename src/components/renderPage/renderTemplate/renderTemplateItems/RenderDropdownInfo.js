import React, { useContext } from 'react';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import {
  SectionWrapper,
  DropdownContainer,
} from '../../../../styles/layoutStyledComponents/templateLayout';

import { LocationIcon, ProfessionIcon } from '../../../../utils/icons/fontAwesome';

export default function RenderDropdownInfo({
  flexDirection,
  margin,
  justifyContent,
  infoMargin,
  template2 = false,
}) {
  const { location, profession } = useContext(IntroRenderContext);

  return (
    <SectionWrapper
      flexDirection={flexDirection}
      margin={margin}
      type="dropdown"
      template2={template2}
    >
      <DropdownContainer justifyContent={justifyContent} margin={infoMargin} template2={template2}>
        <LocationIcon />
        <span className="text-xl">{location}</span>
      </DropdownContainer>
      <DropdownContainer justifyContent={justifyContent} margin={infoMargin} template2={template2}>
        <ProfessionIcon />
        <span className="text-xl">{profession}</span>
      </DropdownContainer>
    </SectionWrapper>
  );
}
