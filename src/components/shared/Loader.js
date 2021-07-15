import React from 'react';
import styled from 'styled-components/macro';

import { color } from '../../styles/theme';

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: ${({ size }) => size || '30%'};
  height: ${({ size }) => size || '30%'};
  border-radius: 50%;
  border-width: ${({ borderWidth }) => borderWidth || '0.25rem'};
  border-color: ${color.gray[100]};
  border-top-color: ${color.main[200]};
  animation: spin ${({ perSpin }) => perSpin || '2s'} linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ size, perSpin, borderWidth }) => {
  return <Spinner size={size} perSpin={perSpin} borderWidth={borderWidth} />;
};

export default Loader;
