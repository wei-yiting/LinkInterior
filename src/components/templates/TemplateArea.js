import React, { useContext } from 'react';

import { IntroCompileContext } from '../../contexts/IntroCompileContext';
import TemplateMenu from './TemplateMenu';
import Template1 from './Template1';
import Template2 from './Template2';

export default function TemplateArea() {
  const { templateType } = useContext(IntroCompileContext);

  let Template;
  if (templateType === 1) {
    Template = Template1;
  } else if (templateType === 2) {
    Template = Template2;
  }

  return (
    <div>
      <TemplateMenu />
      <Template />
    </div>
  );
}
