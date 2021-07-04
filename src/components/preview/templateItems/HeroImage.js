import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 800px;
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  backgoround: linear-gradient(#eeeeeeee, #eeeeeeeee);
`;

const CompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const HeroImage = ({ serviceCompanyName, heroImageUrl }) => {
  return (
    <ImageContainer
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), center / cover no-repeat url("${heroImageUrl}")`,
      }}
    >
      <CompanyName>{serviceCompanyName}</CompanyName>
    </ImageContainer>
  );
};

export default HeroImage;
