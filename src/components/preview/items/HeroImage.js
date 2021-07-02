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
`;

const HeroImage = ({ heroImageUrl }) => {
  return <ImageContainer style={{ backgroundImage: `url("${heroImageUrl}")` }} />;
};

export default HeroImage;
