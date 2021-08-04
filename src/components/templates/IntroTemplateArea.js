import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import ThumbnailTemplateMenu from './ThumbnailTemplateMenu';
import IntroTemplate1 from './IntroTemplate1';
import IntroTemplate2 from './IntroTemplate2';

export default function IntroTemplateArea() {
  const { templateType } = useContext(IntroCompileContext);

  let Template;
  if (templateType === 1) {
    Template = IntroTemplate1;
  } else if (templateType === 2) {
    Template = IntroTemplate2;
  }

  return (
    <>
      <ThumbnailTemplateMenu />
      <Template />
    </>
  );
}
