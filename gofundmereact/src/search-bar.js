import React from "react";
import * as bs from "react-bootstrap";
import AppContext from "./context.js";
import SearchContext from "./search-context.js"

function SearchBar(){
    const context = React.useContext(AppContext);
    const searchContext = React.useContext(SearchContext);
    console.log(searchContext)    

    return (

    <bs.Container className="m-2 mb-3">
      <h3 className="py-4">Campaign Qualtiy Search</h3>
      <bs.Form >

        <bs.Form.Row>
          <bs.Col sm={4}>
            <bs.Form.Group controlId="formGridTitle">
                <bs.Form.Label>Campaign Title</bs.Form.Label>
                <bs.Form.Control onChange={e=>{context.updateTitle(e.target.value)}} placeholder="Search by campaign titles" />
              </bs.Form.Group>
          </bs.Col>

            <bs.Col sm={8}>
              <bs.Form.Group  controlId="formGridDescription">
                <bs.Form.Label>Campaign Description</bs.Form.Label>
                <bs.Form.Control onChange={e=>{context.updateDescription(e.target.value)}} placeholder="Enter any word or phrase in the description"/>
              </bs.Form.Group>
            </bs.Col>
        </bs.Form.Row>
        <bs.Form.Row>
          <bs.Col>
             <bs.Form.Group  controlId="formGridFirstName">
                <bs.Form.Label>First Name</bs.Form.Label>
                <bs.Form.Control onChange={e=>{context.updateFirstName(e.target.value)}}l placeholder="Search by First Name" />
              </bs.Form.Group>
          </bs.Col>
          <bs.Col>
             <bs.Form.Group  controlId="formGridLastName">
                <bs.Form.Label>Last Name</bs.Form.Label>
                <bs.Form.Control onChange={e=>{context.updateNumDonors(e.target.value)}} placeholder="Search by Last Name" />
              </bs.Form.Group>
          </bs.Col>
          <bs.Col/>
        </bs.Form.Row>

      <bs.Form.Row>
          <bs.Col>
            <bs.Form.Group  controlId="formGridDescription">
              <bs.Form.Label>Number of Donors</bs.Form.Label>
              <bs.Form.Control as="select" value={context.numDonors} onChange={e=>{context.updateNumDonors(e.target.value)}}>
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
              <bs.Form.Control as="select" value={context.campaignHearts} onChange={e=>{context.updateCampaignHearts(e.target.value)}}>
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
                  onChange={()=>{context.updateIsCharity()}}
                />
                <bs.Form.Check
                  custom
                  inline
                  name="for-charity"
                  label="No"
                  type="radio"
                  id="radio-no"
                  onChange={()=>{context.updateIsNotCharity()}}
                />
                </div>
              </bs.Form.Group>
            </bs.Col>
      </bs.Form.Row>
      <bs.Form.Row className="mt-2">
          <bs.Col sm={4}>
            <bs.Button variant="success" block onClick={e=>{context.setReadyToMapTrue()}}>
                Search
            </bs.Button>
          </bs.Col>
          <bs.Col sm={8}/>
      </bs.Form.Row>
      </bs.Form>
    </bs.Container>
  );
}

export default SearchBar;
