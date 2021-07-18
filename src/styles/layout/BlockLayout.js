import styled from 'styled-components/macro';

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
  margin: 20px auto;
  padding-top: 30px;
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: space-around;
  flex-direction: column;
  border-top: 2px solid #eee;
  margin: 0 auto;
`;
