import React, { Component } from "react";
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./SearchBar.styled";

class SearchBar extends Component {
  state = {
    inputImg: "",
  };

  handleChangeName = (e) => {
    this.setState({ inputImg: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputImg.trim() === "") return;

    this.props.onHandleSubmit(this.state.inputImg);
    this.setState({ inputImg: "" });
  };
  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span>S</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputImg}
            onChange={this.handleChangeName}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

export default SearchBar;
