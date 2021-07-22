import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import EditIntroTemplate1 from '../editPage/EditIntroTemplate1';
import PreviewIntroTemplate1 from '../previewPage/PreviewIntroTemplate1';

export default function IntroTemplate1() {
  const { isEditMode } = useContext(IntroCompileContext);
  return (
    <div style={{ marginTop: '80px' }}>
      {isEditMode ? <EditIntroTemplate1 /> : <PreviewIntroTemplate1 />}
    </div>
  );
}
