import React, { Component } from 'react';
import {
  SearchbarStyle,
  SearchFormButtonStyle,
  SearchFormInputStyle,
  SearchFormStyle,
} from './Searchbar.slyled';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInputSearch = evt => {
    const { value } = evt.currentTarget;
    this.setState({ search: value.trim() });
    console.log(value);
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ search: ' ' }); //почистили
  };

  render() {
    return (
      // const { search } = this.state
      <SearchbarStyle>
        <SearchFormStyle on Submit={this.handleSubmit}>
          <SearchFormButtonStyle type="submit">
            <span>
              <FiSearch />
            </span>
          </SearchFormButtonStyle>

          <SearchFormInputStyle
            value={this.state.search}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleInputSearch}
          />
        </SearchFormStyle>
      </SearchbarStyle>
    );
  }
}
