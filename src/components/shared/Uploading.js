import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { color } from '../../styles/theme';
import useIntroUpload from '../../hooks/useIntroUpload';

const LoaderBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${color.gray[50]};
  opacity: 0.8;
  z-index: 100;
`;

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: ${({ size }) => size || '15vw'};
  height: ${({ size }) => size || '15vw'};
  border-radius: 50%;
  border-width: ${({ borderWidth }) => borderWidth || '1.5vw'};
  border-color: ${color.gray[200]};
  border-top-color: ${color.main[400]};
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

const Uploading = ({ size, perSpin, borderWidth }) => {
  const history = useHistory();
  const { isUploading } = useIntroUpload(true);
  useEffect(() => {
    if (!isUploading) {
      history.push('/');
    }
    console.log(isUploading);
  }, [isUploading]);

  return (
    <LoaderBackground>
      <Spinner size={size} perSpin={perSpin} borderWidth={borderWidth} />
      {/* {uploadError && uploadError} */}
    </LoaderBackground>
  );
};

export default Uploading;
