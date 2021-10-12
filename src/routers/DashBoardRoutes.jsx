import { Redirect, Route, Switch } from 'react-router';
import NavBar from '../components/NavBar';
import MarvelScreen from '../components/MarvelScreen';
import HeroScreen from '../components/HeroScreen';
import DcScreen from '../components/DcScreen';
import SearchScreen from '../components/SearchScreen';

const DashBoardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashBoardRoutes;
