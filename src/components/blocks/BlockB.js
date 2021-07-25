import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import EditBlockB from '../editPage/EditBlockB';
import PreviewBlockB from '../previewPage/PreviewBlockB';
import { lightLinearGradients } from '../../utils/constants/linearGradient';

const DEFAULT_RANDOM_BG_IDX = Math.floor(Math.random() * lightLinearGradients.length);

export default function BlockB({ blockIdx, blockContent }) {
  const { isEditMode } = useContext(IntroCompileContext);

  return isEditMode ? (
    <EditBlockB blockIdx={blockIdx} randomBgIdx={DEFAULT_RANDOM_BG_IDX} />
  ) : (
    <PreviewBlockB blockContent={blockContent} randomBgIdx={DEFAULT_RANDOM_BG_IDX} />
  );
}
