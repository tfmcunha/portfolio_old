import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './education.css'

class Education extends React.Component {    
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <div className="boxCont">
                        <p className="boxtext">Currently enrolled in Fullstack Developer Course (lvl 6 Diploma) @ Open Classrooms</p>
                    </div>
                </Col>
            </Row>  
        );
    }
}

export default Education;