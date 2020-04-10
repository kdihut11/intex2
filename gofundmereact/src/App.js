import React from 'react';
import * as bs from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HeaderContainer from './header-container';
import LeftContainer from './left-container.js';
import FooterContainer from './footer-container.js';
//import SearchBar from './search-bar.js';
import Home from './home';
import About from './about';
import Help from './help';
import CampaignDetails from './campaign-details.js';
import './index.css'
import Predict from './predict';
import Results from './results.js';

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

            <bs.Row>
              <bs.Col>
                <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/help">
                  <Help />
                </Route>
                <Route path="/CampaignDetails/">
                  <CampaignDetails/>
                </Route>
                <Route path="/predict">
                  <Predict />
                </Route>

                <Route path="/search">

                  <bs.Row>
                    <bs.Col>
                      <Results/>
                    </bs.Col>
                  </bs.Row>
                </Route>

                <Route path="/">
                  <Home />
                </Route>

              </Switch>
              </bs.Col>
            </bs.Row>
           
          </bs.Col>
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

