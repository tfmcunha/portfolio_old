import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faBriefcase, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import './aboutmenu.css';


library.add( faGraduationCap , faBriefcase ,  faFolderOpen )

class AboutMenu extends React.Component {
  render() {
    return (
        <Row>
            <Col xs={12}>
                <div  className="subMenu">
                    <ul>
                        <li>
                            <NavLink to="/portfolio/about/education">
                                <FontAwesomeIcon icon="graduation-cap" />
                                    <i>Education</i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio/about/experience">
                                <FontAwesomeIcon icon="briefcase" />
                                    <i>Experience</i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio/about/portfolio">
                                <FontAwesomeIcon icon="folder-open" />
                                    <i>Portfolio</i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    );
  }
}

export default AboutMenu;