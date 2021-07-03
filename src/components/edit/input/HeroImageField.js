import React, { useState } from 'react';
import styled from 'styled-components';

import singleImageUpload from '../../../utils/firebase/singleImageUpload';

const ImageContainer = styled.div`
  width: 800px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImageField = ({ heroImageUrl, setHeroImageUrl }) => {
  const [selectedHeroImage, setSelectedHeroImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedHeroImage(evt.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    singleImageUpload(selectedHeroImage, setHeroImageUrl, setProgress);
  };

  return (
    <div>
      <ImageContainer style={{ backgroundImage: `url("${heroImageUrl}")` }}>
        <input type="file" onChange={handleImageSelected} />
        <span>{progress} %</span>
        <button type="button" onClick={handleImageUpload}>
          上傳圖片
        </button>
      </ImageContainer>
    </div>
  );
};

export default HeroImageField;
