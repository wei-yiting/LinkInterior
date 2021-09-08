import styled from 'styled-components/macro';

import { color } from '../theme';

export const BlockContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 250px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 30px auto 50px;

  @media (max-width: 768px) {
    flex-direction: ${({ type }) => (type === 'blockB' ? 'column-reverse' : 'column')};
    height: fit-content;
  }
`;

export const BlocksAreaContainer = styled.div`
  margin: 35px auto 30px;
  padding-top: 50px;
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: space-around;
  flex-direction: column;
  border-top: 2px solid ${color.gray[200]};

  @media (max-width: 768px) {
    width: 90%;
    margin: 30px auto 25px;
    padding-top: 30px;
  }
`;

export const FullWidthParagraph = styled.p`
  width: 80%;
  white-space: pre-wrap;
  text-align: center;
  line-height: 2em;
  margin: 30px auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0 5vw;
  }
`;

export const SideImageWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const SideImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('${(props) => props.url}');
  box-shadow: 2px 2px 4px ${color.gray[100]};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5vw;
    height: 50vw;
  }
`;

export const SideTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 0 5vw;
  }
`;

export const SideParagraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.75em;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
