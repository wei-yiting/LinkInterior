import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IntroCompileContextProvider from './contexts/IntroCompileContext';

import GlobalStyles from './styles/GlobalStyle';
import ServicesOverview from './pages/ServicesOverview';
import Landing from './pages/Landing';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import IntroCompile from './pages/IntroCompile';
import IntroCompileTrial from './pages/IntroCompileTrial';
import ServiceIntro from './pages/ServiceIntro';
import Header from './components/Header/Header';
import AuthContextProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoutes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route component={Header} />
          </Switch>
          <Route path="/services" component={ServicesOverview} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/sign-up" component={SignUp} />
          <IntroCompileContextProvider>
            <PrivateRoute path="/intro-compile" component={IntroCompile} />
            <Route path="/compile-trial" component={IntroCompileTrial} />
          </IntroCompileContextProvider>
          <Route path="/service/:pageId" component={ServiceIntro} />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
