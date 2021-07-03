import React, { useState } from 'react';
import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';
// import ImageWallField from '../components/edit/input/ImageWallField';

const ServiceIntroEdit = () => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div>
      <ToggleSwitch isEdit={isEdit} setIsEdit={setIsEdit} />
      {/* <ImageWallField /> */}
      <TemplateArea isEdit={isEdit} />
      <BlockArea isEdit={isEdit} />
    </div>
  );
};

export default ServiceIntroEdit;
