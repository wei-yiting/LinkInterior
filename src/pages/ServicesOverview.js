import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { MainWrapper } from '../styles/layoutStyledComponents/generalLayout';
import { servicesOverviewCollection } from '../utils/firebase';
import ServiceInfoCard from '../components/overview/ServiceInfoCard';
import firestoreLooper from '../utils/firebase/tools/firestoreLooper';
import { Heading1 } from '../styles/sharedStyledComponents/headings';
import { SmallerDesktopShowWrapper } from '../styles/layoutStyledComponents/responsiveLayout';
import { color } from '../styles/theme';

const TitleContainer = styled.div`
  margin: 3.5rem auto 0;
  width: fit-content;
  border-bottom: 2px solid ${color.gray[400]};
  padding: 0 1em;
`;

const ServiceCardsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1260px;
  height: fit-content;
  margin: 80px auto 100px;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1024px) {
    margin: 1rem auto 10rem;
  }
`;

export default function ServicesOverview() {
  const [error, setError] = useState('');
  const [servicesData, setServicesData] = useState(null);

  const getAllServicesData = () => {
    servicesOverviewCollection
      .where('isPublished', '==', true)
      .get()
      .then((snapshot) => {
        const data = firestoreLooper(snapshot);
        setServicesData(data);
      })
      .catch(() => {
        setError('很抱歉，載入頁面時發生錯誤');
      });
  };

  useEffect(() => {
    getAllServicesData();
  }, []);

  const renderedServiceCards = servicesData
    ? servicesData.map((service) => <ServiceInfoCard key={service.id} data={service} />)
    : null;

  return (
    <MainWrapper>
      <div className="flex flex-0 justify-center min-h-screen bg-gray-50 flex-col">
        <SmallerDesktopShowWrapper>
          <TitleContainer>
            <Heading1 textAlign="center" size="1.75rem" lineHeight="1.05em">
              服務業者總覽
            </Heading1>
          </TitleContainer>
        </SmallerDesktopShowWrapper>
        <ServiceCardsContainer>
          {renderedServiceCards}
          {error && <div>{error}</div>}
        </ServiceCardsContainer>
      </div>
    </MainWrapper>
  );
}
