import React from 'react';
import styled from 'styled-components';

import Template from './components/templates/Template';

const MainContainer = styled.div`
  * {
    font-family: 'Noto Sans TC', sans-serif;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <MainContainer>
      <Template />
    </MainContainer>
  );
};

export default App;
