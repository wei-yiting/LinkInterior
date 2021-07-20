import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';

import EditBlockA from '../edit/EditBlockA';
import PreviewBlockA from '../preview/PreviewBlockA';

export default function BlockA({ blockIdx, blockContent }) {
  const { isEditMode } = useContext(IntroCompileContext);

  return isEditMode ? (
    <EditBlockA blockIdx={blockIdx} />
  ) : (
    <PreviewBlockA blockContent={blockContent} />
  );
}
