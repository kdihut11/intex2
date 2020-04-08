import React from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaign-card.js";
import AppContext from "./context.js";

function Home(props) {

  const context = React.useContext(AppContext);
  let campaigns = Object.values(context.campaigns);

    const match = useRouteMatch('/category/:campaign_id')
    if(match)
    {
        campaigns = campaigns.filter(item =>
                item.campaign_id == match.params.campaign_id
        )
    }
 
  return (
      
    <bs.Container fluid className="p-0">
      <bs.Container>
        <bs.Row className='pt-5 pb-5'>
        <bs.Form controlId="formBasicPassword" inline>
          <bs.Form.Control
            style={{ width: "100%", height: "50px" }}
            type="text"
            placeholder="Search by category, title, country..."
            className="mr-sm-2"
            value={context.search} 
            onChange={e => {
                context.updateSearch();
              }}
          ></bs.Form.Control>
          <bs.Button style={{ width:'100px', height:'50px'}} variant="secondary"  type="submit" >
        Search
      </bs.Button>
        </bs.Form>
      </bs.Row>
      </bs.Container>
      <bs.Row md="0">
        {campaigns.map((item) => (
          <bs.Col md="3">
            <CampaignCard item={item} />
          </bs.Col>
        ))}
      </bs.Row>
    </bs.Container>
  );
}

export default Home;
