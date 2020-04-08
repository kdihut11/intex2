import React from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaign-card.js";
import AppContext from "./context.js";

function Results(props) {
  const context = React.useContext(AppContext);
  let campaigns = context.campaigns
  let campaignHearts = context.campaignHearts
  let numDonors = context.numDonors
  let isCharity = context.isCharity
  let title = context.title
  let description = context.description
  let firstName = context.firstName
  let lastName = context.lastName
  //const match = useRouteMatch('/campaign/:campaign_id')

  console.log( title, description,firstName,lastName, isCharity, campaignHearts, numDonors)
  const sortedDateCampaigns = campaigns.slice().sort((a, b) => a.launch_date - b.launch_date).reverse()
  const sortedCurrentAmtCampaigns = campaigns.slice().sort((a,b) => b.current_amount - a.current_amount)
  const sortedGoalCampaigns = campaigns.slice().sort((a,b) => b.goal - a.goal)

  // console.log('currentAmtSorted',sortedCurrentAmtCampaigns)
  // console.log('dateSorted',sortedDateCampaigns)
  // console.log('goalSorted', sortedGoalCampaigns)

  
  if(title || description || firstName || lastName || isCharity || campaignHearts > -2  || numDonors > -2 )
  {
   
    if(title != '')
        {
          campaigns = campaigns.filter(item =>
            {
                if(item.title.includes(title))
                  {
                    return item;
                  }        
            }
          )
        }
    if(description != '')
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.description.includes(description))
              {
                return item;
              }        
        }
      )
    }
    if(firstName != '')
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.user_first_name.includes(firstName))
              {
                return item;
              }        
        }
      )
    }
    if(lastName != '')
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.user_last_name.includes(lastName))
              {
                return item;
              }        
        }
      )
    }
    if(isCharity === true)
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.is_charity === true)
              {
                return item;
              }     
        }
      )
    }
    if(isCharity === false)
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.is_charity === false)
              {
                return item;
              }     
        }
      )
    }
    if(campaignHearts > -1)
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.campaign_hearts >= campaignHearts)
              {
                return item;
              }        
        }
      )
    }
    if(numDonors > -1)
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.donators >= numDonors)
              {
                return item;              
              }        
        }
      )
    }
  }
  
  let resultLength = campaigns.length
  console.log(resultLength)
  let plural = "campaigns"
  if (resultLength == 1)
  {
    plural = "campaign"
  }

if (context.readyToMap == true)
{
  context.setReadyToMapFalse()

  return (

    <bs.Container fluid className="p-0">
      <div><small><b>Search Results:</b><i> Your search returned {resultLength} {plural} </i></small></div>
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
else
{
  return(
    <div>Enter some search Parameters</div>
  )
}
  
}

export default Results;
