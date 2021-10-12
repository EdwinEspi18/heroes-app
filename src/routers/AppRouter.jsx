import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashBoardRoutes} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
