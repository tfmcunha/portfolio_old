import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Project from './project';


const Project1 = {
    title: 'Real Estate Website',
    tags: 'wordpress',
    image: '/public/images/project1.png',
    description: 'An Openclassrooms course project',
    plink: 'http://dev-chaletsandcav.pantheonsite.io/'
}

const Project2 = {
    title: 'Film Festival',
    tags: 'html, css, bootstrap', 
    image: '/images/project2.png',
    description: 'An Openclassrooms course project'
}
const Project3 = {
    title: 'Portfolio',
    tags: 'react, react-router, react-bootstrap, css', 
    image: '/images/project3.png',
    description: 'This Website! Also an Openclassrooms course project'
}

class PortfolioMain extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/about/portfolio/p1' render={() => <Project {...Project1}/>} />
                <Route path='/about/portfolio/p2' render={() => <Project {...Project2}/>} />
                <Route path='/about/portfolio/p3' render={() => <Project {...Project3}/>} />
            </Switch>  
        );
    }
}

export default PortfolioMain;
