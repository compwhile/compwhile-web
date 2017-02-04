import React from 'react';
import logo from './logo.svg'
import gitHubLogo from './github.png';
import './navigation.css';

const Navigation = () => (
<div>
  <nav className="navbar naviagion-navbar-top navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle"
            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img className="nav-logo navigation-brand-logo" src={logo} width="180" height="34" alt="compwhile" />
          </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navigation-top-links">
          <li>
            <a href="#">Editor</a>
          </li>
          <li>
            <a href="http://compwhile.readthedocs.io/en/latest/README/">Docs</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right navigation-top-links">
          <li><a href="https://github.com/compwhile">
            <img src={gitHubLogo} alt="compwhile at GitHub" height="20"/>
          </a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>
);

export default Navigation;
