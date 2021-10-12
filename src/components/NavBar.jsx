import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import { types } from '../types/types';

const Navbar = () => {
  const history = useHistory();
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: types.logout });
    history.replace('/login');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        HeroesApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </ul>
      </div>

      <div className="navbar-collapse w-100 order-xl-5 dual-collapse">
        <ul className="navbar-nav m-xl-auto">
          <span className="nav-item nav-link text-info">
            {name ? name : ''}
          </span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
