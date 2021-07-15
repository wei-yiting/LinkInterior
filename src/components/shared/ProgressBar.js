import React from 'react';
import styled from 'styled-components/macro';

import useStorage from '../../hooks/useStorage';
import { color } from '../../styles/theme';

const Bar = styled.div`
  width: ${({ progress }) => progress}%;
  height: 5px;
  background-color: ${color.main[500]};
  margin-top: 20px;
`;

const ProgressBar = ({ image, setImage, setUrl }) => {
  const { progress } = useStorage(image, setUrl, setImage);

  return <Bar progress={progress} />;
};

export default ProgressBar;
