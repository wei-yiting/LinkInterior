import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';

const ImageUploadContainer = styled.div`
  width: 1200px;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  position: relative;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: calc(20vw - 0.5rem);
  height: 15vw;
  margin: 0 0.25rem;
  background-size: cover;
  background-position: center;
`;

const ImagesWall = ({ imagesGalleryUrls }) => {
  const [uploadedGalleryImages, setUploadedGalleryImages] = useState(null);

  useEffect(() => {
    if (imagesGalleryUrls) {
      const currentImages = imagesGalleryUrls.map((imageUrl) => {
        return <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />;
      });
      setUploadedGalleryImages(currentImages);
    }
  }, [imagesGalleryUrls]);

  return (
    <SectionWrapper>
      <ImageUploadContainer>{uploadedGalleryImages}</ImageUploadContainer>
    </SectionWrapper>
  );
};

export default ImagesWall;
