import React, { useState } from 'react';
import styled from 'styled-components';

import singleImageUpload from '../../../utils/firebase/singleImageUpload';

const ImageContainer = styled.div`
  position: relative;
  width: 800px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedHeroImage(evt.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    singleImageUpload(selectedHeroImage, setHeroImageUrl);
  };

  return (
    <div>
      <ImageContainer
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), center / cover no-repeat url("${heroImageUrl}")`,
        }}
      >
        <CompanyName>{serviceCompanyName}</CompanyName>
        <ButtonWrapper>
          <input type="file" onChange={handleImageSelected} />
          <button type="button" onClick={handleImageUpload}>
            上傳圖片
          </button>
        </ButtonWrapper>
      </ImageContainer>
    </div>
  );
};

export default HeroImageField;
