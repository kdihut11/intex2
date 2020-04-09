import React, { useState } from "react";
// import React from 'react'
import * as b from "bootstrap";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import App from "./App.js";
import goFundMe from "./media/goFundMe.png";
import background from "./background.jpeg";

function Welcome(props) {
  // var sectionStyle = {
  //   width: "100%",
  //   height: "100%",
  //   backgroundImage: `url(${background})`,
  //   position: "absolute",
  // };

  // var overlay = {
  //   height: "100%",
  //   position: "absolute",
  //   left: 0,
  //   top: 0,
  //   opacity: 0.5,
  //   backgroundColor: "black",
  //   width: "100%",
  // };

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   setName(response.profileObj.name);
  //   setEmail(response.profileObj.email);
    
  // };

  // const responseFacebook = (response) => {
  //   console.log(response);
  //   setFName(response.name);
  //   setFEmail(response.email);
    
  // };

  // const [name, setName] = useState("");

  // const [email, setEmail] = useState("");

  // const [FName, setFName] = useState("");

  // const [FEmail, setFEmail] = useState("");

  

  // if (!name && !FName) {
  //   return (
  //     <div>
  //       <div style={sectionStyle}>
  //         <div
  //           style={{
  //             backgroundColor: "rgba(0, 0, 0, 0.4)",
  //             height: "100%",
  //             width: "100%",
  //           }}
  //         >
  //           <div className="p-5" style={{ width: 600, color: "white" }}>
  //             <img
  //               alt=""
  //               src={goFundMe}
  //               width="300"
                
  //             />
  //             <h1 className="p-2">Welcome to Go Fund Me Analytics!</h1>{" "}
  //             <br></br>
  //             <h3 className="p-2">
  //               Please log in with your Google or Facebook account below to continue
  //             </h3>
  //             <br></br>
  //             <table>
  //               <tr>
  //                 <td className='p-2'>
  //                   <GoogleLogin
  //                     clientId="264235252416-qu7uoto6sb62kc8hb7fffrg387o26e7e.apps.googleusercontent.com"
  //                     buttonText="Login with Google"
  //                     onSuccess={responseGoogle}
  //                     onFailure={responseGoogle}
  //                     cookiePolicy={"single_host_origin"}
  //                     className="p-2"
  //                   />
  //                 </td>
  //                 <td className='p-2'>
  //                   <FacebookLogin
  //                     appId="2498350440413934"
  //                     autoLoad={true}
  //                     fields="name,email,picture"
  //                     callback={responseFacebook}
  //                   />
  //                 </td> 
  //               </tr>
  //             </table>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
    return <App />;
  }
//  }
export default Welcome;
