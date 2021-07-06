import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import singleImageUpload from '../../../utils/firebase/singleImageUpload';
import { randomLinearGradient } from '../../../utils/data/linearGradient';
import { HeroImageContainer } from '../../../styles/TemplateLayout';

const CompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroImageField = ({ serviceCompanyName, heroImageUrl, setHeroImageUrl }) => {
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
        <CompanyName>{serviceCompanyName}</CompanyName>
        <ButtonWrapper>
          <input type="file" onChange={handleImageSelected} />
          <button type="button" onClick={handleImageUpload}>
            上傳圖片
          </button>
        </ButtonWrapper>
      </HeroImageContainer>
    </div>
  );
};

export default HeroImageField;
