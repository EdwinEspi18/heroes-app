import React, { useContext } from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import authContext from '../auth/AuthContext';
import LoginScreen from '../components/LoginScreen';
import DashBoardRoutes from './DashBoardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { user } = useContext(authContext);
  return (
    <HashRouter>
      <div>
        <Switch>
          <PublicRoute
            exact
            isAuth={user.logged}
            path="/login"
            component={LoginScreen}
          />

          <PrivateRoute
            isAuth={user.logged}
            path="/"
            component={DashBoardRoutes}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
