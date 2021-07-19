import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ToggleSwitch from '../components/templates/ToggleSwitch';
import TemplateArea from '../components/templates/TemplateArea';
import BlockArea from '../components/blocks/BlockArea';
import { useAuth } from '../contexts/AuthContext';

const MainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 100px;
  display: flex;
  flex-direction: column;
`;

const ServiceIntrCompile = () => {
  const [isEdit, setIsEdit] = useState(true);
  const { currentUser } = useAuth();
  const serviceCompanyName = currentUser.username;

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
