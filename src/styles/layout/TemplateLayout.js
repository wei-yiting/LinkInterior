import styled from 'styled-components/macro';

import { color } from '../theme';

export const SectionWrapper = styled.section`
  margin: ${({ margin }) => margin || '30px auto'};
  display: flex;
  flex: ${({ flex }) => flex || '1'};
  width: ${({ width }) => width || '100%'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

export const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

export const ContactArea = styled.div`
  background-color: ${color.gray[100]};
  padding: 2rem;
`;
