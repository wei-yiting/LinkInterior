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
`;

export const FullWidthParagraph = styled.p`
  width: 80%;
  white-space: pre-wrap;
  text-align: center;
  line-height: 2em;
  margin: 30px auto;
`;

export const SideImageWrapper = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('${(props) => props.url}');
`;

export const SideTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
`;

export const SideParagraph = styled.p`
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.75em;
`;
