import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Home, Login, Register, Dashboard, Error } from './pages';
import authenticated from './helpers/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: {from: props.location} }} />
    )
  )} />
);

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route path="*" component={Error}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;