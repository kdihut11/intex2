import React from "react";
import { useRouteMatch } from "react-router-dom";
import AppContext from "./context";
//import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

function CampaignDetails(props) {
  const match = useRouteMatch("/CampaignDetails/:campaignID");
  const context = React.useContext(AppContext);
  const campaigns = context.campaigns;
  const scores = context.scores;
  let scoreColor = 'red'
  console.log(scores);

  let campaign = campaigns.find((campaign) => {
    return campaign.campaign_id === match.params.campaignID;
  });

  let score = scores.find((score) => {
    return score.campaign_id === match.params.campaignID;
  });


  console.log("Score: ", score);
  console.log(campaign);

  if (!campaign) {
    return <h3 className="p-5 align-center">Loading campaign...</h3>;
  }

  if(score){
    if(score.rating === "Excellent"){
      scoreColor = 'green'
    }
    if(score.rating === "Good"){
      scoreColor = 'orange'
    }
  }

  let city = campaign.location_city
  if (!campaign.location_city)
  {
      city = 'Not Listed'
  }

  let country = campaign.location_country
  if (!campaign.location_country)
  {
      country = 'Not Listed'
  }

  let charity = campaign.is_charity
  
  if (campaign.is_charity === false)
  {
      charity = 'No'
  }
  else if (campaign.is_charity === true)
  {
      charity = 'Yes'
  }
  else if (!campaign.is_charity)
  {
      charity = 'Not Listed'
  }

  let visible = campaign.visible_in_search
  
  if (campaign.visible_in_search === false)
  {
    visible = 'No'
  }
  else if (campaign.visible_in_search === true)
  {
    visible = 'Yes'
  }
  else if (!campaign.visible_in_search)
  {
    visible = 'Not Listed'
  }

  console.log(campaign.is_charity)


  //   let charity = ''
  //   if (campaign.is_charity == false)
  //   {
  //     let charity = 'No'
  //   }
  //   else if (campaign.is_charity == true)
  //   {
  //     let charity = 'Yes'
  //   }

  return (
    <div>
      <div className="card mt-5 mb-5">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item nav-link">Campaign Details</li>
          </ul>
        </div>
        <div className="card-body" id="description">
          <table className="text-center">
            <tbody>
              <tr>
                <td>
                  <h1 className="ml-4">{campaign.title}</h1>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    style={{ maxWidth: "500px" }}
                    src={campaign.campaign_image_url}
                    alt="img1"
                  ></img>
                </td>
                <td>
                  <p>
                    <strong>Owner: </strong> {campaign.user_first_name}{" "}
                    {campaign.user_last_name}
                  </p>
                  <p>
                    <strong>Days Active: </strong>
                    {campaign.days_active}
                  </p>
                  <p>
                    <strong>City: </strong>
                    {city}
                  </p>
                  <p>
                    <strong>Country: </strong>
                    {country}
                  </p>
                  <p>
                    <strong>Visible in Search? </strong>
                    {visible}
                  </p>
                  <p>
                    <strong>Quality Score: </strong>
                    <a style={{ color: scoreColor }}>{score.score}</a>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Current Amount: </strong>${campaign.current_amount}
                  </p>
                  <p>
                    <strong>Donators: </strong>
                    {campaign.donators}
                  </p>
                  <p>
                    <strong>Campaign Hearts: </strong>
                    {campaign.campaign_hearts}
                  </p>
                  <p>
                    <strong>Social Media Shares: </strong>
                    {campaign.social_share_total}
                  </p>
                  <p>
                    <strong>For Charity? </strong>
                    {charity}
                  </p>
                  <p >
                    <strong>Rating: </strong>
                    <a style={{ color: scoreColor }}>{score.rating}</a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="mt-3">
            <tbody>
              <tr>
                <td>
                  <h5 className="ml-3">Description:</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{campaign.description} </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table align="center">
            <tbody>
              <tr>
                <td >
                <Link to="/search" className="float-left btn btn-primary m-4">Return to Search</Link>
                  <a href={campaign.url} target="blank" className="btn btn-primary m-4">
                    See on GoFundMe.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default CampaignDetails;
