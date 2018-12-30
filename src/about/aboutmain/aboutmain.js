import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Education from './education/education';
import Experience from './experience/experience';
import Portfolio from './portfolio/portfolio';


class AboutMain extends React.Component {
    render() {
        return (
            <Row style={{marginTop: 20}}>
                <Col xs={12}>
                    <Switch>
                        <Route path='/about/education' component = {Education} />
                        <Route path='/about/experience' component = {Experience} />
                        <Route path='/about/portfolio' component = {Portfolio} />
                    </Switch>            
                </Col>
            </Row>
        );
    }
}

export default AboutMain;