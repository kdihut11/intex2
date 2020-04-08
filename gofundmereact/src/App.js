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
import SearchBar from './search-bar.js';
import './index.css'
import Predict from './predict';
import { NavLink } from 'react-router-dom'

function App(props) {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{backgroundColor: "#14191d"}}>
            <HeaderContainer />
          </bs.Col>
        </bs.Row>      
        <bs.Row noGutters className="flex-grow-1" >
          <bs.Col md="2" className="ps-3 py-4 shadow" style={{backgroundColor: "#f8f9fb"}}>
            <LeftContainer />
          </bs.Col>
          <bs.Col md="10" className="px-5" style={{backgroundColor: "#e9e9e9"}}>

<<<<<<< HEAD
            
=======
            <bs.Row>
              <bs.Col className="pt-5">
                  <SearchBar />
              </bs.Col>
            </bs.Row>
>>>>>>> 5116d2b303ed7511f2d5bf0799fb47c113208a30

            <bs.Row>
              <bs.Col>
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
            </bs.Row>
           
          </bs.Col>
          {/* <bs.Col md="2" className="ps-3 py-4 shadow" style={{backgroundColor: "#f8f9fb"}}>
            <RightContainer />
          </bs.Col> */}
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#14191d" }}>
            <FooterContainer />
          </bs.Col>
        </bs.Row>
      </bs.Container>
    </Router>
  );
}

export default App;

