import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import AppContext from "./context";
import { Button } from "react-bootstrap";

function CampaignDetails(props) {
  const match = useRouteMatch("/CampaignDetails/:campaignID");
  const context = React.useContext(AppContext);
  const campaigns = context.campaigns;

  console.log(match);

  let campaign = campaigns.find((campaign) => {
    return campaign.campaign_id == match.params.campaignID;
  });

  //console.log(campaign);

  if (!campaign) {
    return <h1 className="p-5 align-center">Error - campaign not found</h1>;
  }

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
                    {campaign.location_city}
                  </p>
                  <p>
                    <strong>Country: </strong>
                    {campaign.location_country}
                  </p>
                  <p style={{ color: "red" }}>
                    <strong>Charity Campaign: </strong>
                    {campaign.is_charity}
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
                  <p style={{ color: "red" }}>
                    <strong>Visible in Search: </strong>
                    {campaign.visible_in_search}
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
          <table align='center'>
            <tbody>
              <tr>
                <td className='mb-5'>
                  <a href={campaign.url} class="btn btn-primary">
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
