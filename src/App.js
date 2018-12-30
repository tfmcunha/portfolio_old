import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import Menu from './menu/menu';
import Main from './main/main';
import {Grid, Row, Col} from 'react-bootstrap';



class App extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Menu />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Main />
                </Col>
            </Row>
        </Grid>
            
    );
  }
}

export default App;
