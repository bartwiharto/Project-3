import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


import SignOut from '../signout/SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <nav className="navbar" id="header">
    Dancer Inspo Board

        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
        Menu <span className="caret"></span>
        </button>

        <ul id="drop" className="dropdown-menu dropdown-menu-right">
            <li><Link to={routes.HOME}>Home</Link></li>
            <li>Songs</li>
            <li><Link to={routes.CHOREO}>Choreographers</Link></li>
            <li>Teams</li>
            <li><SignOut /></li>
        </ul>                    
  </nav>

const NavigationNonAuth = () =>
  <nav className="navbar" id="header">
    Dancer Inspo Board
          <Link to={routes.LANDING}>Landing</Link>
          <Link to={routes.SIGN_IN}>Sign In</Link>
          <Link to={routes.SIGN_UP}>Sign Up</Link>
  </nav>

export default Navigation;