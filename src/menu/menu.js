import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import {Row, Col} from 'react-bootstrap';


class Menu extends React.Component {
  render() {
    return (
        <Row>
            <Col xs={12}>
                <ul className="barMenu">
                    <li><NavLink exact to="/" activeClassName="selected">HOME</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">ABOUT ME</NavLink></li>
                    <li><NavLink exact to="/contact" activeClassName="selected">CONTACT</NavLink></li>
                </ul>
            </Col>
        </Row>
    );
  }
}

export default Menu;