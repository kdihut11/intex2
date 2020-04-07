import React from 'react';
import * as bs from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HeaderContainer from './header-container';
import LeftContainer from './left-container.js';
import RightContainer from './right-container';
import FooterContainer from './footer-container.js';
import Home from './home';
import About from './about';
import Help from './help';
import './index.css'
import Predict from './predict';

function App(props) {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{backgroundColor: "#73A59A" }}>
            <HeaderContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-1" style={{backgroundColor: "#D5E6E2"}}>
          <bs.Col md="2" className="ps-3 py-4 shadow" style={{}}>
            <LeftContainer />
          </bs.Col>
          <bs.Col md="8">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/predict">
                <Predict />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </bs.Col>
          <bs.Col md="2" className="ps-3 py-4 shadow" style={{}}>
            <RightContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#73A59A" }}>
            <FooterContainer />
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </Router>
  );
}

export default App;

