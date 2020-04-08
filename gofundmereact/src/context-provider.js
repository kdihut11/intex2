import React from "react";
import axios from "axios";
import AppContext from "./context";
import Welcome from "./Welcome.js";
import produce from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      updateSearch: this.updateSearch,
    };
    this.state = {
      campaigns: [],
      donations: [],
      search: '',
    }
  }

  // updateSearch = (value) =>
  //   {
  //       this.setState(state => produce(state, draft => {
  //           draft.search = value
  //           console.log(draft.search)
  //       }))
  //   }

  updateSearch = (value) => {
    this.setState({search: value});
    console.log(this.state.search)
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
