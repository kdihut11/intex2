import React from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaign-card.js";
import AppContext from "./context.js";

function Results(props) {
  const context = React.useContext(AppContext);
  let [boolean, setBoolean] = React.useState(false);
  let campaigns = context.campaigns
  let sortedDateCampaigns = []
  let sortedCurrentAmtCampaigns = []
  let sortedGoalCampaigns = []
  let ratingCampaigns = []
  let myGoal = 0
  let sortedBy =''
  let scores = context.scores
  let campaignHearts = context.campaignHearts
  let numDonors = context.numDonors
  let isCharity = context.isCharity
  let title = context.title
  let description = context.description
  let firstName = context.firstName
  let lastName = context.lastName
  let rating = context.rating
  let goal = context.goal

  const match = useRouteMatch('/search/sort/:label')
  
  if(title || description || firstName || lastName || isCharity || campaignHearts > -2  || numDonors > -2 || rating || goal)
  {
    if(rating != '' || rating == 'Select...')
    {
      scores = scores.filter(item =>
        {
            if(item.rating == rating)
              {               
                let campaign = campaigns.find((camp) => {
                  return camp.campaign_id == item.campaign_id
                })
                ratingCampaigns.push(campaign)
                return campaign;

              }        
        }
      )
      campaigns = ratingCampaigns
    }

    if(goal != -1)
    {
      campaigns = campaigns.filter(item =>
        {     
            myGoal = parseInt(item.category)
            if(myGoal >= goal)
              {
                return item;
              }        
        }
      )
    }

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
                console.log(item.goal)
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

  let campaignLength = (campaigns.length)/3
  campaigns = campaigns.slice(0,campaignLength)

  console.log('no sorting',campaigns)

  if(match)
  {
    if (match.params.label == 'date')
    {
      campaigns = campaigns.slice().sort((a, b) => a.launch_date - b.launch_date).reverse()
      console.log('sorted by date',campaigns)
      sortedBy = '(sorted by date: most to least recent)'
    }
    else if(match.params.label == 'currentAmount')
    {
      campaigns = campaigns.slice().sort((a,b) => b.current_amount - a.current_amount)
      console.log('sorted by amount',campaigns)
      sortedBy = '(sorted by current amount: highest --> lowest)'
    }
    else if(match.params.label == 'goal')
    {
      console.log('goal sort')
      campaigns = campaigns.slice().sort((a,b) => b.category - a.category)
      console.log('sorted by goal',campaigns)
      sortedBy = '(sorted by goal: highest --> lowest)'
    }
    else if(match.params.label == 'nosort')
    {
      campaigns = campaigns
      console.log('no sorting',campaigns)
      sortedBy = '(no sorting)'
    }
  }

  let resultLength = campaigns.length
  let plural = "campaigns"
  if (resultLength == 1)
  {
    plural = "campaign"
  }

  if (boolean == true)
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
    <div className="my-3"><small><b>Search Results:</b><i> Your search returned {resultLength} {plural} {sortedBy}</i></small></div>
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
    return(
      <bs.Container fluid className="m-2 mb-3">
         <bs.Row>
            <bs.Col sm={4}>
              <bs.Button className="mb-5" variant="success" block onClick={e=>{setBoolean(true)}}>
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
