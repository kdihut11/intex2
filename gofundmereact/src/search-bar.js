import React from "react";
import * as bs from "react-bootstrap";
import AppContext from "./context.js";


function SearchBar(){
    const context = React.useContext(AppContext);

    return (
    <bs.Container className='mb-3'>
      <bs.Row className='pt-5 pb-5'>
        <bs.Form controlId="formBasicPassword" inline>
          <bs.Form.Control
            style={{ width: "100%", height: "50px" }}
            type="text"
            placeholder="Search by category, title, country..."
            className="mr-sm-2"
            value={context.search}
            onChange={event =>
            {
                context.updateSearch(event.target.value)
            }}
          >
          </bs.Form.Control>
            <bs.Button style={{ width:'100px', height:'50px'}} variant="secondary"  type="submit" >
                Search
            </bs.Button>
        </bs.Form>
      </bs.Row>
    </bs.Container>
  );
}

export default SearchBar;
