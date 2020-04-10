import React from "react";
import GoogleLogin from "react-google-login";
import App from "./App.js";
import goFundMe from "./media/goFundMe.png";
import background from "./background.jpeg";

function Welcome(props) {
  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})`,
    position: "absolute",
  };
  const [loggedIn, setLoggedIn] = React.useState(false)
  
  const responseGoogle = (response) => {
    setLoggedIn(true)
  };

  if (!loggedIn) {
    return (
      <div>
        <div style={sectionStyle}>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="p-5" style={{ width: 600, color: "white" }}>
              <img
                alt=""
                src={goFundMe}
                width="300"
                
              />
              <h1 className="p-2">Welcome to Go Fund Me Analytics!</h1>{" "}
              <br></br>
              <h3 className="p-2">
                Please log in with your Google account below to continue
              </h3>
              <br></br>
              <table>
                <tbody>
                  <tr>
                    <td className='p-2'>
                      <GoogleLogin
                        clientId="264235252416-qu7uoto6sb62kc8hb7fffrg387o26e7e.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        className="p-2"
                      />
                    </td>
                    <td className='p-2'>
                    </td> 
                  </tr>
                </tbody>
                
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <App />;
  }
 }
export default Welcome;
