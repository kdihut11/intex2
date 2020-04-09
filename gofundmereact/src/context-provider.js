import React from "react";
import axios from "axios";
import AppContext from "./context";
import Welcome from "./Welcome.js";

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      updateCampaignHearts: this.updateCampaignHearts,
      updateNumDonors: this.updateNumDonors,
      updateIsCharity: this.updateIsCharity,
      updateIsNotCharity: this.updateIsNotCharity,
      updateTitle: this.updateTitle,
      updateDescription: this.updateDescription,
      updateFirstName: this.updateFirstName,
      updateLastName: this.updateLastName,
      setReadyToMapTrue: this.setReadyToMapTrue,
      setReadyToMapFalse: this.setReadyToMapFalse,
    };
    this.state = {
      campaigns: [],
      donations: [],
      campaignHearts:-1,
      numDonors:-1,
      isCharity:'',
      title:'',
      description:'',
      firstName:'',
      lastName:'',
      readyToMap:false,
      scores: [],
    }
  }

  setReadyToMapTrue = () => {
    this.setState({readyToMap: true})
  }

  setReadyToMapFalse = () => {
    this.setState({readyToMap: false});
  }

  updateCampaignHearts = (value) => {
    value = parseInt(value)
    this.setState({campaignHearts: value});
    //console.log(this.state.campaignHearts)
  }


  updateNumDonors = (value) => {
    value = parseInt(value)
    this.setState({numDonors: value});
    //console.log(this.state.numDonors)
  }

  updateIsCharity = () => {
    this.setState({isCharity:true});
    //console.log(this.state.isCharity)
  }

  updateIsNotCharity = () => {
    this.setState({isCharity:false});
    //console.log(this.state.isCharity)
  }

  updateTitle = (value) => {
    this.setState({title: value});
    //console.log(this.state.title)
  }

  updateDescription = (value) => {
    this.setState({description: value});
    //console.log(this.state.description)
  }

  updateFirstName = (value) => {
    this.setState({firstName: value});
    //console.log(this.state.firstName)
  }

  updateLastName = (value) => {
    this.setState({lastName: value});
    //console.log(this.state.lastName)
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <Welcome />
      </AppContext.Provider>
    );
  }

  async componentDidMount() {
    const resp = await axios.get("http://localhost:8000/api/campaign/");
    const resp2 = await axios.get("http://localhost:8000/api/score/");
    this.setState({
      ...this.state,
      campaigns: resp.data,
      scores: resp2.data,
    });
  }
}
