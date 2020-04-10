import React from "react";
import * as bs from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import CampaignCard from "./campaign-card.js";
import AppContext from "./context.js";

function Results(props) {
  const context = React.useContext(AppContext);
  let [sortedBy, updateSortedBy] = React.useState('')
  let [campaignHearts, updateCampaignHearts] = React.useState(-1)
  let [numDonors, updateNumDonors] = React.useState(-1)
  let [isCharity, updateIsCharity] = React.useState('')
  let [title, updateTitle] = React.useState('')
  let [description, updateDescription] = React.useState('')
  let [firstName, updateFirstName] = React.useState('')
  let [lastName, updateLastName] = React.useState('')
  let [rating, updateRating] = React.useState('')
  let [goal, updateGoal]= React.useState(-1)
  let [filteringdone, updateFilteringDone] = React.useState(false)
  let [resultCampaigns, updateResultCampaigns] = React.useState([])
  let [resultLength, updateResultLength] = React.useState(0)
  let [bigMessage, updateBigMessage] = React.useState('')

  const match = useRouteMatch('/search/sort/:label')

  const filter = () => {
    let campaigns = context.campaigns
    updateFilteringDone(false)
    if(match)
    {
      if (match.params.label === 'date')
      {
        updateResultCampaigns(campaigns.slice().sort((a, b) => a.launch_date - b.launch_date).reverse())
        updateSortedBy('(sorted by date: most to least recent)')
      }
      else if(match.params.label === 'currentAmount')
      {
        updateResultCampaigns(campaigns.slice().sort((a,b) => b.current_amount - a.current_amount))
        updateSortedBy('(sorted by current amount: highest --> lowest)')
      }
      else if(match.params.label === 'goal')
      {
        updateResultCampaigns(campaigns.slice().sort((a,b) => b.category - a.category))
        updateSortedBy('(sorted by goal: highest --> lowest)')
      }
      else if(match.params.label === 'nosort')
      {
        updateResultCampaigns(campaigns)
        updateSortedBy('(no sorting)')
      }
    }
    if(title || description || firstName || lastName || isCharity || campaignHearts > -2  || numDonors > -2 || rating || goal)
    {
      if(rating !== '')
      {
        campaigns = campaigns.filter(item => {return item.days_created === rating})
      }
      if(goal !== -1)
      {
        campaigns = campaigns.filter(item => {return parseInt(item.category) >= goal})
      }
      if(title !== '')
      {
        campaigns = campaigns.filter(item => {return item.title.includes(title)})
      }
      if(description !== '')
      {
        campaigns = campaigns.filter(item => {return item.description.includes(description)})
      }
      if(firstName !== '')
      {
        campaigns = campaigns.filter(item => {return item.user_first_name.includes(firstName)})
      }
      if(lastName !== '')
      {
        campaigns = campaigns.filter(item => {return item.user_last_name.includes(lastName)})
      }
      if(isCharity === true)
      {
        campaigns = campaigns.filter(item => {return item.is_charity === true})
      }
      if(isCharity === false)
      {
        campaigns = campaigns.filter(item => {return item.is_charity === false})
      }
      if(campaignHearts > -1)
      {
        campaigns = campaigns.filter(item => {return item.campaign_hearts >= campaignHearts})
      }
      if(numDonors > -1)
      {
        campaigns = campaigns.filter(item => {return item.donators >= numDonors})
      }
    }
    updateResultLength(campaigns.length)
    if(campaigns.length > 100){
      updateBigMessage('Displaying top 100 results')
      updateResultCampaigns(campaigns.slice(0,100))
    }
    else{
      updateBigMessage('')
      updateResultCampaigns(campaigns)
    }
    updateFilteringDone(true)
  }

  let plural = "campaigns."
  if (resultLength === 1)
  {
    plural = "campaign."
  }

  if (filteringdone === true)
  {
    return (
      <>
        <bs.Container className="m-2 mb-3">
            <h3 className="py-4">Campaign Quality Search</h3>
            <bs.Form >

              <bs.Form.Row>
                  <bs.Col>
                    <bs.Form.Group  controlId="formGridRating">
                      <bs.Form.Label>Rating</bs.Form.Label>
                      <bs.Form.Control as="select" value={rating} onChange={e=>{updateRating(e.target.value)}}>
                      <option value="">Select...</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Poor">Poor</option>

                      </bs.Form.Control>
                    </bs.Form.Group>
                  </bs.Col>
                  <bs.Col>
                    <bs.Form.Group  controlId="formGridCampaignHearts">
                      <bs.Form.Label>Goal</bs.Form.Label>
                      <bs.Form.Control as="select" value={goal} onChange={e=>{updateGoal(e.target.value)}}>
                        <option value="-1">Select...</option>
                        <option value="10000">$10,000+</option>
                        <option value="100000">$100,000</option>
                        <option value="500000">$500,000+</option>
                        <option value="1000000">$1,000,000+</option>
                        <option value="5000000">$5,000,000+</option>
                        <option value="50000000">$50,000,000+</option>
                        <option value="1000000000">$100,000,000+</option>

                      </bs.Form.Control>
                    </bs.Form.Group>
                  </bs.Col>
                  <bs.Col/>
                </bs.Form.Row>

                <bs.Form.Row>
                  <bs.Col>
                    <bs.Form.Group  controlId="formGridDescription">
                      <bs.Form.Label>Number of Donors</bs.Form.Label>
                      <bs.Form.Control as="select" value={numDonors} onChange={e=>{updateNumDonors(e.target.value)}}>
                      <option value="select">Select...</option>
                        <option value="5">5+</option>
                        <option value="10">10+</option>
                        <option value="50">50+</option>
                        <option value="100">100+</option>
                        <option value="500">500+</option>
                        <option value="1000">1000+</option>
                        <option value="1500">1500+</option>
                      </bs.Form.Control>
                    </bs.Form.Group>
                  </bs.Col>
                  <bs.Col>
                    <bs.Form.Group  controlId="formGridCampaignHearts">
                      <bs.Form.Label>Campaign Hearts</bs.Form.Label>
                      <bs.Form.Control as="select" value={campaignHearts} onChange={e=>{updateCampaignHearts(e.target.value)}}>
                        <option value="select">Select...</option>
                        <option value="5">5+</option>
                        <option value="10">10+</option>
                        <option value="50">50+</option>
                        <option value="100">100+</option>
                        <option value="500">500+</option>
                        <option value="1000">1000+</option>
                        <option value="1500">1500+</option>
                      </bs.Form.Control>
                    </bs.Form.Group>
                  </bs.Col>
                <bs.Col>
                  <bs.Form.Group  controlId="formGridCampaignHearts" className="ml-3">
                      <bs.Form.Label>Is the Campaign for Charity?</bs.Form.Label>
                      <div style={{textAlign:"left"}} className="mt-1">
                        <bs.Form.Check
                        custom
                        inline
                        name="for-charity"
                        label="Yes"
                        type="radio"
                        id="radio-yes"
                        onChange={()=>{updateIsCharity(true)}}
                      />
                        <bs.Form.Check
                          custom
                          inline
                          name="for-charity"
                          label="No"
                          type="radio"
                          id="radio-no"
                          onChange={()=>{updateIsCharity(false)}}
                        />
                        <bs.Form.Check
                        custom
                        inline
                        name="for-charity"
                        label="Include both"
                        type="radio"
                        id="radio-both"
                        onChange={()=>{updateIsCharity('')}}
                      />
                        </div>
                      </bs.Form.Group>
                    </bs.Col>
                  </bs.Form.Row>
            <bs.Form.Row>
                  <bs.Col sm={4}>
                    <bs.Form.Group controlId="formGridTitle">
                        <bs.Form.Label>Campaign Title</bs.Form.Label>
                        <bs.Form.Control onChange={e=>{updateTitle(e.target.value)}} placeholder="Search by campaign titles" />
                      </bs.Form.Group>
                  </bs.Col>
                    <bs.Col sm={8}>
                      <bs.Form.Group  controlId="formGridDescription">
                        <bs.Form.Label>Campaign Description</bs.Form.Label>
                        <bs.Form.Control onChange={e=>{updateDescription(e.target.value)}} placeholder="Enter any word or phrase in the description"/>
                      </bs.Form.Group>
                    </bs.Col>
                </bs.Form.Row> 
                <bs.Form.Row>
                  <bs.Col>
                      <bs.Form.Group  controlId="formGridFirstName">
                        <bs.Form.Label>Creator First Name</bs.Form.Label>
                        <bs.Form.Control onChange={e=>{updateFirstName(e.target.value)}} placeholder="Search by First Name" />
                      </bs.Form.Group>
                  </bs.Col>
                  <bs.Col>
                      <bs.Form.Group  controlId="formGridLastName">
                        <bs.Form.Label>Creator Last Name</bs.Form.Label>
                        <bs.Form.Control onChange={e=>{updateLastName(e.target.value)}} placeholder="Search by Last Name" />
                      </bs.Form.Group>
                  </bs.Col>
                  <bs.Col/>
                </bs.Form.Row>
              </bs.Form>
            </bs.Container>
            <bs.Container fluid className="m-2 mb-3">
              <bs.Row className="mt-2">
                <bs.Col sm={4}>
                  <bs.Button variant="warning" block onClick={e=>{filter()}}>
                      Search
                  </bs.Button>
                </bs.Col>
                <bs.Col sm={8}/>
            </bs.Row>
            <div className="my-3"><small><b>Search Results:</b><i> Your search returned {resultLength} {plural} {bigMessage} {sortedBy}</i></small></div>
            <bs.Row md="0">
              {resultCampaigns.map((item, i) => (
                <bs.Col md="3" key={i}>
                  <CampaignCard item={item} />
                </bs.Col>
              ))}
            </bs.Row> 
        </bs.Container>
      </>
  );

  }
  else
  {
    return(
      <>
      <bs.Container className="m-2 mb-3">
      <h3 className="py-4">Campaign Quality Search</h3>
      <bs.Form >

        <bs.Form.Row>
            <bs.Col>
              <bs.Form.Group  controlId="formGridRating">
                <bs.Form.Label>Rating</bs.Form.Label>
                <bs.Form.Control as="select" value={rating} onChange={e=>{updateRating(e.target.value)}}>
                <option value="">Select...</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Poor">Poor</option>

                </bs.Form.Control>
              </bs.Form.Group>
            </bs.Col>
            <bs.Col>
              <bs.Form.Group  controlId="formGridCampaignHearts">
                <bs.Form.Label>Goal</bs.Form.Label>
                <bs.Form.Control as="select" value={goal} onChange={e=>{updateGoal(e.target.value)}}>
                  <option value="-1">Select...</option>
                  <option value="10000">$10,000+</option>
                  <option value="100000">$100,000</option>
                  <option value="500000">$500,000+</option>
                  <option value="1000000">$1,000,000+</option>
                  <option value="5000000">$5,000,000+</option>
                  <option value="50000000">$50,000,000+</option>
                  <option value="1000000000">$100,000,000+</option>

                </bs.Form.Control>
              </bs.Form.Group>
            </bs.Col>
            <bs.Col/>
          </bs.Form.Row>

          <bs.Form.Row>
            <bs.Col>
              <bs.Form.Group  controlId="formGridDescription">
                <bs.Form.Label>Number of Donors</bs.Form.Label>
                <bs.Form.Control as="select" value={numDonors} onChange={e=>{updateNumDonors(e.target.value)}}>
                <option value="select">Select...</option>
                  <option value="5">5+</option>
                  <option value="10">10+</option>
                  <option value="50">50+</option>
                  <option value="100">100+</option>
                  <option value="500">500+</option>
                  <option value="1000">1000+</option>
                  <option value="1500">1500+</option>
                </bs.Form.Control>
              </bs.Form.Group>
            </bs.Col>
            <bs.Col>
              <bs.Form.Group  controlId="formGridCampaignHearts">
                <bs.Form.Label>Campaign Hearts</bs.Form.Label>
                <bs.Form.Control as="select" value={campaignHearts} onChange={e=>{updateCampaignHearts(e.target.value)}}>
                  <option value="select">Select...</option>
                  <option value="5">5+</option>
                  <option value="10">10+</option>
                  <option value="50">50+</option>
                  <option value="100">100+</option>
                  <option value="500">500+</option>
                  <option value="1000">1000+</option>
                  <option value="1500">1500+</option>
                </bs.Form.Control>
              </bs.Form.Group>
            </bs.Col>
          <bs.Col>
            <bs.Form.Group  controlId="formGridCampaignHearts" className="ml-3">
                <bs.Form.Label>Is the Campaign for Charity?</bs.Form.Label>
                <div style={{textAlign:"left"}} className="mt-1">
                  <bs.Form.Check
                  custom
                  inline
                  name="for-charity"
                  label="Yes"
                  type="radio"
                  id="radio-yes"
                  onChange={()=>{updateIsCharity(true)}}
                />
                  <bs.Form.Check
                    custom
                    inline
                    name="for-charity"
                    label="No"
                    type="radio"
                    id="radio-no"
                    onChange={()=>{updateIsCharity(false)}}
                  />
                  <bs.Form.Check
                        custom
                        inline
                        name="for-charity"
                        label="Include both"
                        type="radio"
                        id="radio-both"
                        onChange={()=>{updateIsCharity('')}}
                      />
                  </div>
                </bs.Form.Group>
              </bs.Col>
            </bs.Form.Row>

      <bs.Form.Row>
            <bs.Col sm={4}>
              <bs.Form.Group controlId="formGridTitle">
                  <bs.Form.Label>Campaign Title</bs.Form.Label>
                  <bs.Form.Control onChange={e=>{updateTitle(e.target.value)}} placeholder="Search by campaign titles" />
                </bs.Form.Group>
            </bs.Col>
              <bs.Col sm={8}>
                <bs.Form.Group  controlId="formGridDescription">
                  <bs.Form.Label>Campaign Description</bs.Form.Label>
                  <bs.Form.Control onChange={e=>{updateDescription(e.target.value)}} placeholder="Enter any word or phrase in the description"/>
                </bs.Form.Group>
              </bs.Col>
          </bs.Form.Row> 

          <bs.Form.Row>
            <bs.Col>
                <bs.Form.Group  controlId="formGridFirstName">
                  <bs.Form.Label>Creator First Name</bs.Form.Label>
                  <bs.Form.Control onChange={e=>{updateFirstName(e.target.value)}} placeholder="Search by First Name" />
                </bs.Form.Group>
            </bs.Col>
            <bs.Col>
                <bs.Form.Group  controlId="formGridLastName">
                  <bs.Form.Label>Creator Last Name</bs.Form.Label>
                  <bs.Form.Control onChange={e=>{updateLastName(e.target.value)}} placeholder="Search by Last Name" />
                </bs.Form.Group>
            </bs.Col>
            <bs.Col/>
          </bs.Form.Row>
        </bs.Form>
      </bs.Container>
      <bs.Container fluid className="m-2 mb-3">
         <bs.Row>
            <bs.Col sm={4}>
              <bs.Button className="mb-5" variant="warning" block onClick={e=>{filter()}}>
                  Search
              </bs.Button>
            </bs.Col>
            <bs.Col sm={8}/>
        </bs.Row>
      </bs.Container>
</>
    )
  }
    
}

export default Results;
