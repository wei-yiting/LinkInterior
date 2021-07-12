import React from 'react';

import GlobalStyles from './styles/GlobalStyle';
import Header from './components/Header/Header';
// import ServiceIntroCompile from './pages/ServiceIntroCompile';
import SignUpLogIn from './components/membership/LogIn';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <ServiceIntroCompile /> */}
      <SignUpLogIn />
    </>
  );
};

export default App;
