import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import EditBlockC from '../editPage/EditBlockC';
import PreviewBlockC from '../previewPage/PreviewBlockC';
import { lightLinearGradients } from '../../utils/constants/linearGradient';

const DEFAULT_RANDOM_BG_IDX = Math.floor(Math.random() * lightLinearGradients.length);

const BlockC = ({ blockIdx, blockContent }) => {
  const { isEditMode } = useContext(IntroCompileContext);

  return isEditMode ? (
    <EditBlockC blockIdx={blockIdx} randomBgIdx={DEFAULT_RANDOM_BG_IDX} />
  ) : (
    <PreviewBlockC blockContent={blockContent} randomBgIdx={DEFAULT_RANDOM_BG_IDX} />
  );
};

export default BlockC;
