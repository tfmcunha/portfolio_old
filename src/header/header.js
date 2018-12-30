import React from "react";
import './header.css';
import {Row, Col} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
            <Row className="headerWrap">
                <Col xs={12}>           
                    <h1 className="headElem" id="name">TIAGO CUNHA</h1>
                </Col>                          
                <Col xs={12}>        
                    <h2 className="headElem" id="role">FULLSTACK DEVELOPER</h2>
                </Col>
            </Row>        
        );
    }
}

export default Header;