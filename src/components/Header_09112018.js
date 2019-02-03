import React, { Component } from 'react';
import './Header_09112018.css';
import './materialize.css';
import {Link} from 'react-router-dom'
import image from './bank.png'

class Header extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper orange darken-3 ">
            <img src={image} alt="img" />
              <span className="brand-logo left">&nbsp; IRUMZAS-Bank</span>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/accounts">Accounts</Link></li>
                <li><Link to="transactions">Transactions</Link></li>
                <li><Link to="appInfo">App Info</Link></li>
              </ul>
            </div>
          </nav>        
        );
    }
}

export default Header;
