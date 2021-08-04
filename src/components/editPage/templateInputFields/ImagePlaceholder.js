import React from 'react';
import styled from 'styled-components/macro';

import { ImageIcon } from '../../../utils/icons/fontAwesome';
import { lightLinearGradients } from '../../../utils/constants/linearGradient';

// const randomIdx = Math.floor(Math.random() * lightLinearGradients.length);

const ImageplaceholderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    ${(props) => lightLinearGradients[props.idx][0]},
    ${(props) => lightLinearGradients[props.idx][1]}
  );
`;

const ImagePlaceholder = ({ idx }) => {
  return (
    <ImageplaceholderContainer idx={idx || Math.floor(Math.random() * lightLinearGradients.length)}>
      <ImageIcon />
    </ImageplaceholderContainer>
  );
};

export default ImagePlaceholder;
