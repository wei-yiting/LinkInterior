import React from 'react';
import styled from 'styled-components';

import ImagePlaceholder from '../../edit/templateInputFields/ImagePlaceholder';

const ImageArea = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
`;

const UploadedImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('${(props) => props.url}');
`;

const SideImage = ({ imageUrl, randomBgIdx }) => {
  return (
    <ImageArea>
      {imageUrl ? (
        <UploadedImageContainer url={imageUrl} />
      ) : (
        <ImagePlaceholder idx={randomBgIdx} />
      )}
    </ImageArea>
  );
};

export default SideImage;
