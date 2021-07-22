import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import EditBlockA from '../editPage/EditBlockA';
import PreviewBlockA from '../previewPage/PreviewBlockA';

export default function BlockA({ blockIdx, blockContent }) {
  const { isEditMode } = useContext(IntroCompileContext);

  return isEditMode ? (
    <EditBlockA blockIdx={blockIdx} />
  ) : (
    <PreviewBlockA blockContent={blockContent} />
  );
}
