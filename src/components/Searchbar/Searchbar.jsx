import React from "react";
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./Searchbar.styled";

const Searchbar = () => {
  return (
    <SearchBarHeader>
      <SearchForm>
        <SearchFormButton type="submit">
          <span class="button-label">S</span>
        </SearchFormButton>

        <SearchFormInput
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarHeader>
  );
};

export default Searchbar;
