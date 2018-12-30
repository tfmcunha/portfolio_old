import React from 'react';
import {Row, Col} from 'react-bootstrap';
import AboutMenu from '../about/aboutmenu/aboutmenu'
import AboutMain from '../about/aboutmain/aboutmain'

class AboutMe extends React.Component {
  render() {
    return (
        <Row>
            <Col xs={12}>
                <AboutMenu />
            </Col>
        
            <Col xs={12}>
                <AboutMain />
            </Col>
       </Row>
    );
  }
}

export default AboutMe;