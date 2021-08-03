import React from 'react';
import styled from 'styled-components/macro';

import { color } from '../../../styles/theme';

const serviceArea = ['臺北市', '新北市', '桃園市', '新竹市'];

const ServiceAreaContainer = styled.div`
  margin: 1.5rem 0 0.5rem;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${color.gray[500]};
  letter-spacing: 0.1em;
  border-bottom: 1px solid ${color.gray[200]};
  padding-right: 1.5rem;
`;

const ServiceCities = styled.p`
  font-size: 0.875rem;
  margin-top: 0.75rem;
`;

export default function IntroServiceArea() {
  return (
    <ServiceAreaContainer>
      <Title fontColor={color.gray[500]}>服務地區</Title>
      <ServiceCities>{serviceArea.join('、 ')}</ServiceCities>
    </ServiceAreaContainer>
  );
}
