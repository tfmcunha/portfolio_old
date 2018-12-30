import React from 'react';
import { NavLink } from 'react-router-dom';
import './portfoliolist.css';

class PortfolioList extends React.Component {
  render() {
    return (
        <div className="pflist">
            <ul>
                <li><NavLink to='/about/portfolio/p1' activeClassName="selected">Real Estate Website</NavLink></li>
                <li><NavLink to='/about/portfolio/p2' activeClassName="selected">Film Festival</NavLink></li>
                <li><NavLink to='/about/portfolio/p3' activeClassName="selected">Portfolio</NavLink></li>
            </ul>
        </div>
    );
  }
}

export default PortfolioList;