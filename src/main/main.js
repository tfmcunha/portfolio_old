import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import Home from '../home/home';
import AboutMe from '../about/about';
import Contact from '../contact/contact';


class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={AboutMe}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                </Col>
            </Row>  
        );
    }
}

export default Main;