import React, { useContext } from 'react';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import {
  SectionWrapper,
  ImagesGalleryContainer,
  ImageContainer,
} from '../../../styles/layoutStyledComponents/TemplateLayout';

export default function ImagesWall() {
  const { imagesGalleryUrls } = useContext(IntroCompileContext);
  return imagesGalleryUrls.length ? (
    <SectionWrapper width="90%">
      <ImagesGalleryContainer>
        {imagesGalleryUrls.map((imageUrl) => (
          <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />
        ))}
      </ImagesGalleryContainer>
    </SectionWrapper>
  ) : null;
}
