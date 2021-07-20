import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components/macro';

import { useAuth } from '../../../contexts/AuthContext';
import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import { HeroImageContainer } from '../../../styles/layout/TemplateLayout';

const CompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

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
      <CompanyName>{currentUser.username}</CompanyName>
    </HeroImageContainer>
  );
}
