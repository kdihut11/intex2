import React from "react";
import * as bs from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import CampaignCard from "./campaign-card.js";
// import AppContext from "./context.js";

function Home(props) {

  const history = useHistory()

  return (

      <bs.Container fluid className="p-0">
        <bs.Row className="mt-5 mb-3">
          <bs.Col>
          <h3>GoFundMe Analytics</h3>
          </bs.Col>
        </bs.Row>
        <bs.Row md="0" className="mt-3">
          <bs.Col>
          <bs.Button onClick={e=>{history.push('/search')}} variant="success" size="lg" block style={{height: '100px', width:'90%'}}>Quality Search</bs.Button><br></br>

            <h6 style={{ width:'90%'}}>Search through current and past GoFundMe campaigns based on their quality</h6>
          </bs.Col>
          
          <bs.Col>
          <bs.Button onClick={e=>{history.push('/predict')}} variant="warning" size="lg" block style={{height: '100px', width:'90%'}}>Predict Your Campaign</bs.Button><br></br>

            <h6 style={{ width:'90%'}}>Use our predictor to estimate the success of your campaign based on a few criteria</h6>
          </bs.Col>
        </bs.Row>
    </bs.Container>
 );
}

export default Home;
