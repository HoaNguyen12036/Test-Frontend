import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top desktop">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-circle-arrow-left"></span> Back</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span></a></li>
              <li><a href="#"><span className="glyphicon glyphicon-briefcase"></span></a></li>
            </ul>
          </div>
        </nav>

        <div className="navbar-default navbar-fixed-top mobile">
          <div className="container-fluid">
            <div className="navbar-left">
              <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-circle-arrow-left"></span></a>
            </div>
            <ul style={{listStyleType: 'none'}}>
              <li className='navbar-brand displayInlineBlock floatRight'><a href="#" className="aBlack"><span className="glyphicon glyphicon-user"></span></a></li>
              <li className='navbar-brand displayInlineBlock floatRight'><a href="#" className="aBlack"><span className="glyphicon glyphicon-briefcase"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
