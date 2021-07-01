import React from 'react';
import styled from 'styled-components';

import Template from './components/templates/Template';

const MainContainer = styled.div`
  * {
    font-family: 'Noto Sans TC', sans-serif;
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
