import React, { useState, useEffect } from 'react';
// import styled from 'styled-components/macro';

import singleImageUpload from '../../../utils/firebase/storage/singleImageUpload';
import { randomLinearGradient } from '../../../utils/constants/linearGradient';
import { SectionWrapper, HeroImageContainer } from '../../../styles/layout/TemplateLayout';

export default function ProfileImageField({ heroImageUrl, setHeroImageUrl }) {
  const [selectedHeroImage, setSelectedHeroImage] = useState(null);
  const [imageContainerStyle, setimageContainerStyle] = useState({});

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedHeroImage(evt.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    singleImageUpload(selectedHeroImage, setHeroImageUrl);
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
        <input type="file" onChange={handleImageSelected} />
        <button type="button" onClick={handleImageUpload}>
          上傳圖片
        </button>
      </HeroImageContainer>
    </SectionWrapper>
  );
}
