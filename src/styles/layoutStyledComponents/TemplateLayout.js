import styled from 'styled-components/macro';

import { color } from '../theme';

export const SectionWrapper = styled.section`
  margin: ${({ margin }) => margin || '50px auto 30px'};
  display: flex;
  flex: ${({ flex }) => flex || '1'};
  width: ${({ width }) => width || '80%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

export const RowWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '350px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  width: 100%;
  flex: 1;
  margin: ${({ margin }) => margin || '0'};
`;

export const ContactArea = styled.div`
  background-color: ${color.gray[100]};
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex: 1;
  justify-content: space-around;
`;

export const HeroImageCompanyName = styled.span`
  font-size: 3rem;
  z-index: 2;
  color: white;
  font-weight: 600;
  letter-spacing: 0.1em;
`;
