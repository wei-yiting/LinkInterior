import styled from 'styled-components/macro';

export const MainWrapper = styled.div`
  min-height: calc(100vh - 4rem);
  width: 100%;
  padding-top: 4rem;
`;

export const IntroPageMainContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0 100px;
  }
`;
