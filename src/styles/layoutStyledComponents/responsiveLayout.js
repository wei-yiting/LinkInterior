import styled from 'styled-components/macro';

export const MobileHiddenWrapper = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileShowWrapper = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;
