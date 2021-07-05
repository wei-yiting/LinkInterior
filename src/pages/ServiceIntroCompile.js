import React, { useState } from 'react';
import styled from 'styled-components';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';

const serviceCompanyName = '二三設計 23Design';

const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 70px auto 100px;
  display: flex;
  flex-direction: column;
`;

const ServiceIntroEdit = () => {
  const [isEdit, setIsEdit] = useState(true);

  return (
    <MainContainer>
      <ToggleSwitch isEdit={isEdit} setIsEdit={setIsEdit} />
      <TemplateArea isEdit={isEdit} serviceCompanyName={serviceCompanyName} />
      <BlockArea isEdit={isEdit} serviceCompanyName={serviceCompanyName} />
    </MainContainer>
  );
};

export default ServiceIntroEdit;
