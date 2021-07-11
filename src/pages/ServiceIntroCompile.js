import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';

const serviceCompanyName = '二三設計 23Design';

const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 70px 0 100px;
  display: flex;
  flex-direction: column;
`;

const ServiceIntrCompile = () => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className={isEdit ? 'bg-gray-50' : ''}>
      <MainContainer>
        <ToggleSwitch isEdit={isEdit} setIsEdit={setIsEdit} />
        <TemplateArea isEdit={isEdit} serviceCompanyName={serviceCompanyName} />
        <BlockArea isEdit={isEdit} serviceCompanyName={serviceCompanyName} />
      </MainContainer>
    </div>
  );
};

export default ServiceIntrCompile;
