import styled from 'styled-components/macro';

import theme from '../theme';

export const SectionWrapper = styled.div`
  margin: 30px auto;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

export const RowWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
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
  background-color: ${theme.color.gray[100]};
  padding: 2rem;
`;
