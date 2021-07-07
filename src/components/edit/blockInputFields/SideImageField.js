import React, { useState } from 'react';
import styled from 'styled-components';

import blockImageUpload from '../../../utils/firebase/blockImageUpload';
import ImagePlaceholder from '../templateInputFields/ImagePlaceholder';

const ImageArea = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
`;

const UploadedImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
    center / cover no-repeat url('${(props) => props.url}');
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SideImageField = ({ blockList, setBlockList, blockIdx, randomBgIdx }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelected = (evt) => {
    if (evt.target.files[0]) {
      setSelectedImage(evt.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    blockImageUpload(selectedImage, blockList, setBlockList, blockIdx);
  };

  return (
    <ImageArea>
      {blockList[blockIdx].imageUrl ? (
        <UploadedImageContainer url={blockList[blockIdx].imageUrl} />
      ) : (
        <ImagePlaceholder idx={randomBgIdx} />
      )}
      <ButtonWrapper>
        <input type="file" onChange={handleImageSelected} />
        <button type="button" onClick={handleImageUpload}>
          上傳
        </button>
      </ButtonWrapper>
    </ImageArea>
  );
};

export default SideImageField;