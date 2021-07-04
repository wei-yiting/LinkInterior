import React, { useState } from 'react';
import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';

const serviceCompanyName = '二三設計 23Design';

const ServiceIntroEdit = () => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <ToggleSwitch isEdit={isEdit} setIsEdit={setIsEdit} />
      <TemplateArea isEdit={isEdit} serviceCompanyName={serviceCompanyName} />
      <BlockArea isEdit={isEdit} serviceCompanyName={serviceCompanyName} />
    </div>
  );
};

export default ServiceIntroEdit;
