import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/macro';

import { useAuth } from '../../../contexts/AuthContext';
import { IntroCompileContext } from '../../../contexts/IntroCompileContext';

import { LightSelectImageInputButton } from '../../shared/SelectImageInputButton';
import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import { HeroImageContainer } from '../../../styles/layoutStyledComponents/TemplateLayout';

const CompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 1.5rem auto;
`;

export default function HeroImageField() {
  const { currentUser } = useAuth();
  const { selectedHeroImage, setSelectedHeroImage, heroImageUrl, setHeroImageUrl } =
    useContext(IntroCompileContext);
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedHeroImage(evt.target.files[0]);
      setHeroImageUrl(URL.createObjectURL(evt.target.files[0]));
      URL.revokeObjectURL(evt.target.files[0]);
    }
  };

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
    <div>
      <HeroImageContainer style={imageContainerStyle}>
        <CompanyName>{currentUser.username}</CompanyName>
        <LightSelectImageInputButton
          fieldName="heroImage"
          buttonText={selectedHeroImage ? ' 更換圖片' : '選擇圖片'}
          onSelectHandler={handleImageSelected}
        />
      </HeroImageContainer>
    </div>
  );
}
