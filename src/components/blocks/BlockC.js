import React, { useState, useEffect, useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import EditBlockC from '../editPage/EditBlockC';
import PreviewBlockC from '../previewPage/PreviewBlockC';
import { lightLinearGradients } from '../../utils/constants/linearGradient';

const BlockC = ({ blockIdx, blockContent }) => {
  const { isEditMode } = useContext(IntroCompileContext);
  const [randomBgIdx, setRandomBgIdx] = useState(0);

  useEffect(() => {
    setRandomBgIdx(Math.floor(Math.random() * lightLinearGradients.length));
  }, []);

  return isEditMode ? (
    <EditBlockC blockIdx={blockIdx} randomBgIdx={randomBgIdx} />
  ) : (
    <PreviewBlockC blockContent={blockContent} randomBgIdx={randomBgIdx} />
  );
};

export default BlockC;
