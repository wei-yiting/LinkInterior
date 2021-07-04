import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { randomLinearGradient } from '../../../utils/data/linearGradient';

const ImageContainer = styled.div`
  width: 800px;
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  backgoround: linear-gradient(#eeeeeeee, #eeeeeeeee);
`;

const CompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const HeroImage = ({ serviceCompanyName, heroImageUrl }) => {
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  useEffect(() => {
    console.log(heroImageUrl);
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
    <ImageContainer style={imageContainerStyle}>
      <CompanyName>{serviceCompanyName}</CompanyName>
    </ImageContainer>
  );
};

export default HeroImage;
