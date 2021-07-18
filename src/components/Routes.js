import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyle';
import ServicesOverview from '../pages/ServicesOverview';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import ServiceIntroCompile from '../pages/ServiceIntroCompile';
import Header from './Header/Header';
import Main from '../styles/layout/GeneralLayout';

const Routes = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Main>
            <Route path="/" exact component={ServicesOverview} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/introCompile" exact component={ServiceIntroCompile} />
          </Main>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
