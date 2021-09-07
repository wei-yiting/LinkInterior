import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { MainWrapper } from '../styles/layoutStyledComponents/generalLayout';
import { servicesOverviewCollection } from '../utils/firebase';
import ServiceInfoCard from '../components/overview/ServiceInfoCard';
import firestoreLooper from '../utils/firebase/tools/firestoreLooper';
import { Heading1 } from '../styles/sharedStyledComponents/headings';
import { color } from '../styles/theme';

const TitleContainer = styled.div`
  margin: 3.5rem 0 0 calc((100vw - 1260px) / 2);
  width: fit-content;
  border-bottom: 2px solid ${color.gray[400]};
  padding: 0 1em;

  @media (max-width: 1400px) {
    margin: 3.5rem auto 0;
  }
  @media (max-width: 768px) {
    margin: 2rem auto 0;
  }
`;

const ServiceCardsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1260px;
  height: fit-content;
  margin: 50px auto 100px;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1024px) {
    margin: 1rem auto 10rem;
  }

  @media (max-width: 768px) {
    margin: 2rem auto 7.5rem;
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
        <TitleContainer>
          <Heading1 textAlign="center" size="1.75rem" lineHeight="1.05em">
            服務業者總覽
          </Heading1>
        </TitleContainer>
        <ServiceCardsContainer>
          {renderedServiceCards}
          {error && <div>{error}</div>}
        </ServiceCardsContainer>
      </div>
    </MainWrapper>
  );
}
