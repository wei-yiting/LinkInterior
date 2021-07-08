import styled from 'styled-components/macro';

export const BlockContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  height: 250px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const BlockAreaContainer = styled.div`
  margin: 20px auto;
  padding-top: 30px;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
  border-top: 2px solid #eee;
`;
