import React, { useState, useEffect, useContext } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components/macro';
import { TiDelete } from 'react-icons/ti';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import ImagePlaceholder from './ImagePlaceholder';
import { lightLinearGradients } from '../../../utils/constants/linearGradient';
import { SectionWrapper } from '../../../styles/layoutStyledComponents/TemplateLayout';
import { inputField, color } from '../../../styles/theme';
import { Heading4 } from '../../../styles/sharedStyledComponents/headings';
import { DarkSelectImageInputButton } from '../../shared/SelectImageInputButton';
// import { DeleteIcon } from '../../../utils/icons/fontAwesome';

const numberOfImages = 6;
const DEFAULT_IMAGE_PLACEHOLDER_RANDOM_COLOR_IDX = [...Array(numberOfImages)].map(() => {
  return Math.floor(Math.random() * lightLinearGradients.length);
});

const ImageUploadContainer = styled.div`
  width: 100%;
  height: 500px;
  border: ${inputField.border};
  border-radius: ${inputField.borderRadius};
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: calc(33.33% - 1rem);
  height: 45%;
  margin: 0.5rem;
  background-size: cover;
  background-position: center;
`;

const ImageOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: opacity 0.1s;
  transition: background-color 0.2s;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DeleteIconContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  opacity: 0.7;
  transition: opacity 0.1s;
  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
  :active {
    opacity: 1;
    top: 2.75px;
    right: 2.75px;
  }
`;

const deleteIconStyle = {
  fontSize: '2rem',
  color: color.gray[200],
};

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImagePlaceholderWrapper = styled.div`
  width: calc(33.3% - 1rem);
  height: 45%;
  margin: 0.5rem;
`;

export default function ImageWallField() {
  const {
    localImagesGalleryUrls,
    setLocalImagesGalleryUrls,
    selectedGalleryImages,
    setSelectedGalleryImages,
  } = useContext(IntroCompileContext);
  const [previewGalleryImages, setPreviewGalleryImages] = useState(null);
  const [randomIdxList, setRandomIdxList] = useState(DEFAULT_IMAGE_PLACEHOLDER_RANDOM_COLOR_IDX);
  const [isLoading, setIsLoading] = useState(true);

  const removeImage = (removeIdx) => {
    setLocalImagesGalleryUrls(localImagesGalleryUrls.filter((_, index) => index !== removeIdx));
    setSelectedGalleryImages(selectedGalleryImages.filter((_, index) => index !== removeIdx));
  };

  useEffect(() => {
    if (localImagesGalleryUrls) {
      const currentImages = localImagesGalleryUrls.map((imageUrl, index) => {
        return (
          <ImageContainer
            key={uuid()}
            style={{
              background: `linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.35)),
          center / cover no-repeat url("${imageUrl}")`,
            }}
          >
            <ImageOverlay>
              <DeleteIconContainer
                onClick={() => {
                  removeImage(index);
                }}
              >
                <TiDelete style={deleteIconStyle} />
              </DeleteIconContainer>
            </ImageOverlay>
          </ImageContainer>
        );
      });
      setPreviewGalleryImages(currentImages);
      setIsLoading(false);
    }
  }, [localImagesGalleryUrls]);

  useEffect(() => {
    setRandomIdxList(
      [...DEFAULT_IMAGE_PLACEHOLDER_RANDOM_COLOR_IDX].slice(selectedGalleryImages.length),
    );
  }, [selectedGalleryImages]);

  const handleImagesSelected = (evt) => {
    if (evt.target.files) {
      const imageArray = Array.from(evt.target.files).map((file) => URL.createObjectURL(file));
      setLocalImagesGalleryUrls((prevImages) => prevImages.concat(imageArray));
      Array.from(evt.target.files).map((file) => URL.revokeObjectURL(file));
      for (let i = 0; i < evt.target.files.length; i += 1) {
        const newImage = evt.target.files[i];
        newImage.id = uuid();
        setSelectedGalleryImages((prevState) => [...prevState, newImage]);
      }
    }
  };

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
        {previewGalleryImages}
        {!isLoading && imagePlaceholders}
        <ButtonWrapper>
          <DarkSelectImageInputButton
            fieldName="imageGallery"
            buttonText={selectedGalleryImages.length !== 0 ? '新增更多圖片' : '新增圖片'}
            onSelectHandler={handleImagesSelected}
            multiple
          />
        </ButtonWrapper>
      </ImageUploadContainer>
    </SectionWrapper>
  );
}
