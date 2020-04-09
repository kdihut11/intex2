import React from "react";
import * as bs from "react-bootstrap";
//import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaign-card.js";
import AppContext from "./context.js";

function Results(props) {
  const context = React.useContext(AppContext);
  let [boolean, setBoolean] = React.useState(false);
  let campaigns = context.campaigns
  let campaignHearts = context.campaignHearts
  let numDonors = context.numDonors
  let isCharity = context.isCharity
  let title = context.title
  let description = context.description
  let firstName = context.firstName
  let lastName = context.lastName
  //const match = useRouteMatch('/campaign/:campaign_id')

  //console.log( title, description,firstName,lastName, isCharity, campaignHearts, numDonors)
  // const sortedDateCampaigns = campaigns.slice().sort((a, b) => a.launch_date - b.launch_date).reverse()
  // const sortedCurrentAmtCampaigns = campaigns.slice().sort((a,b) => b.current_amount - a.current_amount)
  // const sortedGoalCampaigns = campaigns.slice().sort((a,b) => b.goal - a.goal)

  // console.log('currentAmtSorted',sortedCurrentAmtCampaigns)
  // console.log('dateSorted',sortedDateCampaigns)
  // console.log('goalSorted', sortedGoalCampaigns)

  
  if(title || description || firstName || lastName || isCharity || campaignHearts > -2  || numDonors > -2 )
  {
   
    if(title !== '')
        {
          campaigns = campaigns.filter(item =>
            {
                if(item.title.includes(title))
                  {
                    return item;
                  }    
                return ''    
            }
          )
        }
    if(description !== '')
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.description.includes(description))
              {
                console.log(item.goal)
                return item;
              } 
              return ''      
        }
      )
    }
    if(firstName !== '')
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.user_first_name.includes(firstName))
              {
                return item;
              }    
            return ''   
        }
        
      )
    }
    if(lastName !== '')
    {
      campaigns = campaigns.filter(item =>
        {
            if(item.user_last_name.includes(lastName))
              {
                return item;
              }
            return ''        
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
            return ''   
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
            return ''    
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
            return ''     
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
            return ''     
        }
      )
    }
  }
  
  let campaignLength = (campaigns.length)/3

  campaigns = campaigns.slice(0,campaignLength)

  let resultLength = campaigns.length
  let plural = "campaigns"
  if (resultLength === 1)
  {
    plural = "campaign"
  }

  if (boolean === true)
  {
    return (

      <bs.Container fluid className="m-2 mb-3">
          <bs.Row className="mt-2">
            <bs.Col sm={4}>
              <bs.Button variant="success" block>
                  Search
              </bs.Button>
            </bs.Col>
            <bs.Col sm={8}/>
        </bs.Row>
        <div className="my-3"><small><b>Search Results:</b><i> Your search returned {resultLength} {plural} </i></small></div>
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
  else
  {
    console.log(boolean)
    return(
      <bs.Container fluid className="m-2 mb-3">
         <bs.Row>
            <bs.Col sm={4}>
              <bs.Button variant="success" block onClick={e=>{setBoolean(true)}}>
                  Search
              </bs.Button>
            </bs.Col>
            <bs.Col sm={8}/>
        </bs.Row>
      </bs.Container>

    )
  }
    
}

export default Results;
