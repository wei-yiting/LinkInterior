import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { servicesOverviewCollection } from '../utils/firebase';
import ServiceInfoCard from '../components/overview/ServiceInfoCard';
import firestoreLooper from '../utils/firebase/tools/firestoreLooper';

const ServiceCardsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1280px;
  height: fit-content;
  margin: 0 auto;
  padding: 80px 0 100px;
  justify-content: flex-start;
  align-items: stretch;
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
    <div className="flex flex-0 justify-center min-h-screen bg-gray-50">
      <ServiceCardsContainer>
        {renderedServiceCards}
        {error && <div>{error}</div>}
      </ServiceCardsContainer>
    </div>
  );
}
