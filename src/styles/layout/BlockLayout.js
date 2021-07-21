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
  padding-top: 30px;
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: space-around;
  flex-direction: column;
  border-top: 2px solid ${color.gray[200]};
`;
