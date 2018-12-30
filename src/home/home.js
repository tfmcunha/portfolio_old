import React from "react";
import './home.css';
import {Row, Col} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
        <Row>
            <Col xs={12}>
                <div className="text-center main-content">
                    <i>Vini</i>
                    <i>Vidi</i>
                    <i id="iCodi">Codi</i>
                    <i>Vinci</i>
                </div>
            </Col>
        </Row>
    );    
  }
}

export default Home;