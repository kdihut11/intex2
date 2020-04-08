// import React from "react";
// import * as bs from "react-bootstrap";
// import { Link } from "react-router-dom";
// import SiteIcon from "./media/gofundme_logo.png";
// import Image from "react-bootstrap/Image";
// import Home from "./home.js"
// import AppContext from "./context.js";


// //import AppContext from './context'
// const context = React.useContext(AppContext);
// let campaigns = Object.values(context.campaigns);

// class SearchBar extends React.Component {
    


//     constructor(){
//         super();
//         this.state = {
//             search: ''
//         };
//     }

//     updateSearch(event) {
//         this.setState({search: event.target.value.substr(0,20)});
//         console.log(this)
//     }
  
    
    
  
//     render() {
//         // let campaigns = this.props.campaigns;
//     return (
//     <bs.Container className='mb-3'>
//       <bs.Form controlId="formBasicPassword" inline >
//         <bs.Form.Control style={{width:'100%', height:'50px'}} type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search by category, title, country..." className="mr-sm-2">
//         {/* {campaigns.map((item) => {
//             return <Home item={item}/>
//         } )} */}
//         </bs.Form.Control>
//         {/* <bs.Button style={{ width:'100px', height:'50px'}} variant="secondary"  type="submit">
//         Search
//       </bs.Button> */}
//       </bs.Form>
//     </bs.Container>
//   );
// }
// }

// export default SearchBar;
