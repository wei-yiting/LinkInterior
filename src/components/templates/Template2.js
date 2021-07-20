import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import EditTemplate2 from '../edit/EditTemplate2';
import PreviewTemplate2 from '../preview/PreviewTemplate2';

export default function Template2() {
  const { isEditMode } = useContext(IntroCompileContext);

  return (
    <div style={{ marginTop: '80px' }}>{isEditMode ? <EditTemplate2 /> : <PreviewTemplate2 />}</div>
  );
}
