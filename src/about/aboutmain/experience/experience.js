import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './experience.css'

class Experience extends React.Component {    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <div className="boxCont">
                        <p className="boxtext">My professional experience has been outside the Web Developement area. My objective is to finish my current course and make a career change!</p>
                    </div>
                </Col>
            </Row>  
        );
    }
}

export default Experience;