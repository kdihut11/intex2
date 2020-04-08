import React from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaign-card.js";
import AppContext from "./context.js";

function Results(props) {

  const context = React.useContext(AppContext);
  let campaigns = Object.values(context.campaigns);
  let searchParams= context.search

  const sortedDateCampaigns = campaigns.slice().sort((a, b) => a.launch_date - b.launch_date).reverse()
  const sortedCurrentAmtCampaigns = campaigns.slice().sort((a,b) => b.current_amount - a.current_amount)
  const sortedGoalCampaigns = campaigns.slice().sort((a,b) => b.goal - a.goal)

  console.log('currentAmtSorted',sortedCurrentAmtCampaigns)
  console.log('dateSorted',sortedDateCampaigns)
  console.log('goalSorted', sortedGoalCampaigns)

  console.log('searchParams',searchParams)
  
  const match = useRouteMatch('/campaign/:campaign_id')

  if(match || searchParams)
  {
    console.log("search params or math is not undefined")
      campaigns = campaigns.filter(item =>
              {
                if(item.title.includes(searchParams))
                {
                  return item;
                }
              }
      )
  }
  console.log(campaigns)

  return (

      <bs.Container fluid className="p-0">
        <div>Search Results: </div>
      {/* <bs.Row md="0">
        {campaigns.map((item) => (
          <bs.Col md="3">
            <CampaignCard item={item} />
          </bs.Col>
        ))}
      </bs.Row> */}
    </bs.Container>
 );
}

export default Results;
