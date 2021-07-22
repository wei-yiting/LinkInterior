import React, { useEffect, useState, useContext } from 'react';

import { useAuth } from '../../../contexts/AuthContext';
import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import {
  HeroImageContainer,
  HeroImageCompanyName,
} from '../../../styles/layoutStyledComponents/TemplateLayout';

export default function HeroImage() {
  const { currentUser } = useAuth();
  const { heroImageUrl } = useContext(IntroCompileContext);
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  useEffect(() => {
    const containerStyle = heroImageUrl
      ? {
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), center / cover no-repeat url("${heroImageUrl}")`,
        }
      : {
          background: `linear-gradient( 135deg, ${randomLinearGradient[0]}, ${randomLinearGradient[1]})`,
        };
    setimageContainerStyle(containerStyle);
  }, [heroImageUrl]);

  return (
    <HeroImageContainer style={imageContainerStyle}>
      <HeroImageCompanyName>{currentUser.username}</HeroImageCompanyName>
    </HeroImageContainer>
  );
}
