import React from "react";
import axios from "axios";
import AppContext from "./context";
import Welcome from "./Welcome.js";

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {};
    this.state = {
      campaigns: [],
      donations: [],
      search: '',
    };
  }

  updateSearch = event => {
    this.setState({search: event.target.value.substr(0, 20) });
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
    const resp2 = await axios.get("http://localhost:8000/api/donation/");
    this.setState({
      ...this.state,
      campaigns: resp.data,
      donations: resp2.data,
    });
  }
}
