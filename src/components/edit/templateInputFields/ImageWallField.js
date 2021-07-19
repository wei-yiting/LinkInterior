import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components/macro';

import ImagePlaceholder from './ImagePlaceholder';
import multipleImagesUpload from '../../../utils/firebase/storage/multipleImageUpload';
import { lightLinearGradients } from '../../../utils/data/linearGradient';
import { SectionWrapper } from '../../../styles/layout/TemplateLayout';
import { inputField } from '../../../styles/theme';
import { Heading4 } from '../../../styles/sharedStyledComponents/headings';

const numberOfImages = 8;

const ImageUploadContainer = styled.div`
  width: 100%;
  height: 400px;
  border: ${inputField.border};
  border-radius: ${inputField.borderRadius};
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  position: relative;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: calc(25% - 1rem);
  height: 45%;
  margin: 0 0.5rem;
  background-size: cover;
  background-position: center;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImagePlaceholderWrapper = styled.div`
  width: calc(25% - 1rem);
  height: 45%;
  margin: 0 0.5rem;
`;

const ImageWallField = ({ imagesGalleryUrls, setImagesGalleryUrls }) => {
  const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);
  const [uploadedGalleryImages, setUploadedGalleryImages] = useState(null);
  const [numOfPlaceholders, setNumOfPlaceholders] = useState(numberOfImages);
  const [randomIdxList, setRandomIdxList] = useState([]);

  const handleImagesSelected = (evt) => {
    for (let i = 0; i < evt.target.files.length; i += 1) {
      const newImage = evt.target.files[i];
      newImage.id = uuid();
      setSelectedGalleryImages((prevState) => [...prevState, newImage]);
      setImagesGalleryUrls([]);
    }
  };

  const handleImagesUpload = () => {
    multipleImagesUpload(selectedGalleryImages, setImagesGalleryUrls);
  };

  useEffect(() => {
    if (imagesGalleryUrls) {
      const currentImages = imagesGalleryUrls.map((imageUrl) => {
        return <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />;
      });
      setUploadedGalleryImages(currentImages);
    }
  }, [imagesGalleryUrls]);

  useEffect(() => {
    setNumOfPlaceholders(numberOfImages - imagesGalleryUrls.length);
  }, [imagesGalleryUrls]);

  useEffect(() => {
    setRandomIdxList(
      [...Array(numOfPlaceholders)].map(() => {
        return Math.floor(Math.random() * lightLinearGradients.length);
      }),
    );
  }, [numOfPlaceholders]);

  const imagePlaceholders = randomIdxList.map((idx) => {
    return (
      <ImagePlaceholderWrapper key={uuid()}>
        <ImagePlaceholder idx={idx} />
      </ImagePlaceholderWrapper>
    );
  });

  return (
    <SectionWrapper width="90%">
      <Heading4>我的相簿</Heading4>
      <ImageUploadContainer>
        {uploadedGalleryImages}
        {imagePlaceholders}
        <ButtonWrapper>
          <input type="file" multiple onChange={handleImagesSelected} />
          <button type="button" onClick={handleImagesUpload}>
            上傳圖片
          </button>
        </ButtonWrapper>
      </ImageUploadContainer>
    </SectionWrapper>
  );
};

export default ImageWallField;
