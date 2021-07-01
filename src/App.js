import React from 'react';
import styled from 'styled-components';

import ServiceIntroCompile from './pages/ServiceIntroCompile';

const MainContainer = styled.div`
  * {
    font-family: 'Noto Sans TC', sans-serif;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <MainContainer>
      <ServiceIntroCompile />
    </MainContainer>
  );
};

export default App;
