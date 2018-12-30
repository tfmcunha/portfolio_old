import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PortfolioList from './portfoliolist/portfoliolist';
import PortfolioMain from './portfoliomain/portfoliomain';

class Portfolio extends React.Component {
  render() {
    return (
        <Row>
            <Col xs={12} md={3}>
                <PortfolioList />   
            </Col>
            <Col xs={12} md={9}>
                <PortfolioMain />
            </Col>
       </Row>
    );
  }
}

export default Portfolio;