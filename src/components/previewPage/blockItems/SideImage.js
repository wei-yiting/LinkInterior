import React from 'react';

import {
  SideImageWrapper,
  SideImageContainer,
} from '../../../styles/layoutStyledComponents/blockLayout';
import ImagePlaceholder from '../../editPage/templateInputFields/ImagePlaceholder';

export default function SideImage({ imageUrl, randomBgIdx }) {
  return (
    <SideImageWrapper>
      {imageUrl ? <SideImageContainer url={imageUrl} /> : <ImagePlaceholder idx={randomBgIdx} />}
    </SideImageWrapper>
  );
}
