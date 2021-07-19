import React from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { SectionWrapper } from '../../../styles/layout/TemplateLayout';

const ImageUploadContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
  position: relative;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: calc(25% - 1rem);
  height: 175px;
  margin: 0.5rem;
  background-size: cover;
  background-position: center;
`;

const ImagesWall = ({ imagesGalleryUrls }) => {
  return (
    <SectionWrapper width="90%">
      <ImageUploadContainer>
        {imagesGalleryUrls.map((imageUrl) => (
          <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />
        ))}
      </ImageUploadContainer>
    </SectionWrapper>
  );
};

export default ImagesWall;
