import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PublicRoute from './PublicRoute';
import { Location} from '../components/Location';
import { Statistics} from '../components/Statistics';
import {Range} from '../components/Range';
import Dashboard from '../components/Dashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />
      <Switch>
        <PublicRoute path="/" component={Dashboard} exact={true}  />
        <PublicRoute path="/location" component={Location} />
        <PublicRoute path="/range" component={Range}/>
        <PublicRoute path="/statistics" component={Statistics} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
