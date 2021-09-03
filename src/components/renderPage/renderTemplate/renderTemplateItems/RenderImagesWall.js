import React, { useContext } from 'react';
import uuid from 'react-uuid';

import { IntroRenderContext } from '../../../../contexts/IntroRenderContext';
import {
  SectionWrapper,
  ImagesGalleryContainer,
  ImageContainer,
} from '../../../../styles/layoutStyledComponents/templateLayout';

export default function RenderImagesWall() {
  const { imageGalleryUrls } = useContext(IntroRenderContext);
  return imageGalleryUrls.length ? (
    <SectionWrapper width="90%" mobileWidth="95%">
      <ImagesGalleryContainer>
        {imageGalleryUrls.map((imageUrl) => (
          <ImageContainer key={uuid()} style={{ backgroundImage: `url("${imageUrl}")` }} />
        ))}
      </ImagesGalleryContainer>
    </SectionWrapper>
  ) : null;
}
