import React, { useContext } from 'react';

import {
  HeroImageContainer,
  HeroImageCompanyName,
} from '../../../styles/layoutStyledComponents/TemplateLayout';
import { IntroRenderContext } from '../../../contexts/IntroRenderContext';

export default function RenderHeroImage() {
  const { companyName, heroImageUrl } = useContext(IntroRenderContext);

  const imageContainerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), center / cover no-repeat url(${heroImageUrl})`,
  };

  return (
    <HeroImageContainer style={imageContainerStyle}>
      <HeroImageCompanyName>{companyName}</HeroImageCompanyName>
    </HeroImageContainer>
  );
}
