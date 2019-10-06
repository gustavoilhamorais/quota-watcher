import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Home, Login, Register, Error, Stock, Crypto } from './pages';
import authenticated from './helpers/auth';
import logout from './helpers/logout';
import Navbar from './components/Navbar';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated() 
      ? (
      <>
      <Navbar />
      <Component {...props} />
      </>
      )
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
  )} />
);

const Logout = () => {
  logout();
  return <Redirect to={{ pathname: '/login'}} />
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/logout" component={Logout}/>
        <PrivateRoute exact path="/stocks" component={Stock}/>
        <PrivateRoute exact path="/crypto" component={Crypto}/>
        <Route path="*" component={Error}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;