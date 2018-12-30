import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import './project.css';

library.add (faTags)

class Project extends React.Component {
    render() {
        return (
            <Row>
                <Col md={4}>
                    <div className="pfDetails">
                        <h4>{this.props.description}</h4>
                        <FontAwesomeIcon icon="tags" /><i>{this.props.tags}</i>
                    </div> 
                </Col>
                <Col md={8}>
                    <div>
                        <a href={this.props.plink} target="_blank" rel="noopener noreferrer"><Image src={this.props.image} thumbnail responsive/></a>
                    </div>
                </Col>
            </Row>
        );          
    }
}

export default Project;