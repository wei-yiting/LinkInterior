import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IntroCompileContextProvider from './contexts/IntroCompileContext';

import GlobalStyles from './styles/GlobalStyle';
import ServicesOverview from './pages/ServicesOverview';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import IntroCompile from './pages/IntroCompile';
import ServiceIntro from './pages/ServiceIntro';
import Header from './components/Header/Header';
import { MainWrapper } from './styles/layoutStyledComponents/GeneralLayout';
import AuthContextProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoutes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <Switch>
            <MainWrapper>
              <Route path="/" exact component={ServicesOverview} />
              <Route path="/log-in" component={LogIn} />
              <Route path="/sign-up" component={SignUp} />
              <IntroCompileContextProvider>
                <PrivateRoute path="/intro-compile" component={IntroCompile} />
              </IntroCompileContextProvider>
              <Route path="/service/:pageId" component={ServiceIntro} />
            </MainWrapper>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
