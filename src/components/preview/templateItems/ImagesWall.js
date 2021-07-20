import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
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

export default function ImagesWall() {
  const { imagesGalleryUrls } = useContext(IntroCompileContext);
  return (
    <SectionWrapper width="90%">
      <ImageUploadContainer>
        {imagesGalleryUrls.map((imageUrl) => (
          <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />
        ))}
      </ImageUploadContainer>
    </SectionWrapper>
  );
}
