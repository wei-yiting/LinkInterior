import React, { useState, useEffect, useContext } from 'react';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import { LightSelectImageInputButton } from '../../shared/SelectImageInputButton';
import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import {
  SectionWrapper,
  HeroImageContainer,
} from '../../../styles/layoutStyledComponents/TemplateLayout';

export default function ProfileImageField() {
  const { selectedHeroImage, setSelectedHeroImage, heroImageUrl, setHeroImageUrl } =
    useContext(IntroCompileContext);
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedHeroImage(evt.target.files[0]);
      setHeroImageUrl(URL.createObjectURL(evt.target.files[0]));
    }
  };

  useEffect(() => {
    const containerStyle = heroImageUrl
      ? {
          background: `center / cover no-repeat url("${heroImageUrl}")`,
        }
      : {
          background: `linear-gradient( 135deg, ${randomLinearGradient[0]}, ${randomLinearGradient[1]})`,
        };
    setimageContainerStyle(containerStyle);
  }, [heroImageUrl]);

  return (
    <SectionWrapper>
      <HeroImageContainer width="400px" height="350px" style={imageContainerStyle}>
        <LightSelectImageInputButton
          fieldName="heroImage"
          buttonText={selectedHeroImage ? ' 更換圖片' : '新增圖片'}
          onSelectHandler={handleImageSelected}
        />
      </HeroImageContainer>
    </SectionWrapper>
  );
}
