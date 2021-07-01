import React, { useState } from 'react';
import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';

const ServiceIntroEdit = () => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <ToggleSwitch isEdit={isEdit} setIsEdit={setIsEdit} />
      <TemplateArea isEdit={isEdit} />
      <BlockArea isEdit={isEdit} />
    </div>
  );
};

export default ServiceIntroEdit;
