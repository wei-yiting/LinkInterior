import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import EditTemplate1 from '../edit/EditTemplate1';
import PreviewTemplate1 from '../preview/PreviewTemplate1';

export default function Template1() {
  const { isEditMode } = useContext(IntroCompileContext);
  return (
    <div style={{ marginTop: '80px' }}>{isEditMode ? <EditTemplate1 /> : <PreviewTemplate1 />}</div>
  );
}
