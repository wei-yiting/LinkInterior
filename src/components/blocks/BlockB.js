import React, { useState, useEffect, useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import EditBlockB from '../editPage/EditBlockB';
import PreviewBlockB from '../previewPage/PreviewBlockB';
import { lightLinearGradients } from '../../utils/constants/linearGradient';

export default function BlockB({ blockIdx, blockContent }) {
  const { isEditMode } = useContext(IntroCompileContext);

  const [randomBgIdx, setRandomBgIdx] = useState(0);

  useEffect(() => {
    setRandomBgIdx(Math.floor(Math.random() * lightLinearGradients.length));
  }, []);

  return isEditMode ? (
    <EditBlockB blockIdx={blockIdx} randomBgIdx={randomBgIdx} />
  ) : (
    <PreviewBlockB blockContent={blockContent} randomBgIdx={randomBgIdx} />
  );
}
