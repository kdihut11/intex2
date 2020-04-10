import React from "react";
import axios from "axios";
import AppContext from "./context";
import Welcome from "./Welcome.js";

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      setReadyToMapTrue: this.setReadyToMapTrue,
      setReadyToMapFalse: this.setReadyToMapFalse,

    };
    this.state = {
      campaigns: [],
      scores: [],
      readyToMap:false,
    }
  }

  setReadyToMapTrue = () => {
    this.setState({readyToMap: true})
  }

  setReadyToMapFalse = () => {
    this.setState({readyToMap: false});
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <Welcome />
      </AppContext.Provider>
    );
  }

  async componentDidMount() {
    const resp = await axios.get("/api/campaign/");
    const resp2 = await axios.get("/api/score/");

    let camps = resp.data.filter(function(value, index, Arr){
      return index % 3 === 0
    })
    camps = camps.filter(item=>
      {
        let score = resp2.data.find((score) => {
          return score.campaign_id === item.campaign_id;
        });
        item.days_created = score.rating
        return item;
      })
    console.log('Ready')
    this.setState({
      ...this.state,
      campaigns: camps,
      scores: resp2.data,
    });
  }
}
