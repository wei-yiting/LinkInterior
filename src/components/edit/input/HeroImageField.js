import React, { useState } from 'react';
import styled from 'styled-components';

import imageUpload from '../../../utils/firebase/imageUpload';

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

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedHeroImage(evt.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    imageUpload(selectedHeroImage, setHeroImageUrl);
  };

  return (
    <div>
      <ImageContainer style={{ backgroundImage: `url("${heroImageUrl}")` }}>
        <input type="file" onChange={handleImageSelected} />
        <button type="button" onClick={handleImageUpload}>
          上傳圖片
        </button>
      </ImageContainer>
    </div>
  );
};

export default HeroImageField;
