import React, { Component } from "react";
import SearchBar from "../SearchBar";
import { Wrapper } from "./App.styled";

class App extends Component {
  state = {
    searchImg: "",
    page: 1,
    images: [],
  };

  handleChangeSearch = (searchImg) => {
    this.setState({
      searchImg,
      page: 1,
      images: [],
    });
  };

  render() {
    return (
      <Wrapper>
        <SearchBar onHandleSubmit={this.handleChangeSearch} />
      </Wrapper>
    );
  }
}

export default App;
