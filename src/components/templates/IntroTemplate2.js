import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import EditIntroTemplate2 from '../editPage/EditIntroTemplate2';
import PreviewIntroTemplate2 from '../previewPage/PreviewIntroTemplate2';

export default function IntroTemplate2() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div style={{ marginTop: '80px' }}>
      {isEditMode ? <EditIntroTemplate2 /> : <PreviewIntroTemplate2 />}
    </div>
  );
}
