import React, { useContext } from 'react';
import uuid from 'react-uuid';

import { IntroCompileContext } from '../../../contexts/IntroCompileContext';
import {
  SectionWrapper,
  ImagesGalleryContainer,
  ImageContainer,
} from '../../../styles/layoutStyledComponents/templateLayout';

export default function ImagesWall() {
  const { localImagesGalleryUrls } = useContext(IntroCompileContext);
  return localImagesGalleryUrls.length ? (
    <SectionWrapper width="90%">
      <ImagesGalleryContainer>
        {localImagesGalleryUrls.map((imageUrl) => (
          <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />
        ))}
      </ImagesGalleryContainer>
    </SectionWrapper>
  ) : null;
}
