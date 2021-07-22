import React from 'react';
import styled from 'styled-components/macro';

import ImagePlaceholder from '../../editPage/templateInputFields/ImagePlaceholder';

const ImageArea = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
`;

const UploadedImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('${(props) => props.url}');
`;

export default function SideImage({ imageUrl, randomBgIdx }) {
  return (
    <ImageArea>
      {imageUrl ? (
        <UploadedImageContainer url={imageUrl} />
      ) : (
        <ImagePlaceholder idx={randomBgIdx} />
      )}
    </ImageArea>
  );
}