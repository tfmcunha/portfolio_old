import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faPhone, faEnvelope, faLinkedin)

class Contact extends React.Component {
  render() {
    return (
        <Row>
            <Col xs={12}>
                <div className="cont">
                    <a href="mailto:tcunha_lp@hotmail.com" className="contactIcon"><FontAwesomeIcon icon="envelope" /></a>
                    <a href="tel:+351911166326" className="contactIcon"><FontAwesomeIcon icon="phone" /></a>
                    <a href="https://www.linkedin.com/in/otiago-cunha/" className="contactIcon"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>                    
                </div>
            </Col>
        </Row>
       
    );
  }
}

export default Contact;