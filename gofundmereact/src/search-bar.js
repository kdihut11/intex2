import React from "react";
import * as bs from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteIcon from "./media/gofundme_logo.png";
import Image from "react-bootstrap/Image";

//import AppContext from './context'

function SearchBar(props) {
  return (
    <bs.Container className='mb-3'>
      <bs.Form controlId="formBasicPassword" inline >
        <bs.Form.Control style={{width:'85%', height:'50px'}} type="text" placeholder="Search by category, title, country..." className="mr-sm-2"/>
        <bs.Button style={{ width:'100px', height:'50px'}} variant="secondary" type="submit">
        Search
      </bs.Button>
      </bs.Form>

     
      {/* <bs.Nav >
                    
                    <bs.Form fluid>
                        <bs.FormControl type="text" placeholder="Search Campaigns" className="mr-sm-2"/>
                        <bs.Button variant="outline-dark">Search</bs.Button>
                    </bs.Form>
                    
                </bs.Nav> */}
    </bs.Container>
  );
}

export default SearchBar;
