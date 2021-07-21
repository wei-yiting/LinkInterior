import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import EditIntroTemplate2 from '../edit/EditIntroTemplate2';
import PreviewIntroTemplate2 from '../preview/PreviewIntroTemplate2';

export default function IntroTemplate2() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div style={{ marginTop: '80px' }}>
      {isEditMode ? <EditIntroTemplate2 /> : <PreviewIntroTemplate2 />}
    </div>
  );
}
