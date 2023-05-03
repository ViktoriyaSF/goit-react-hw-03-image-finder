import React, { Component } from 'react';
import {
  SearchbarStyle,
  SearchFormButtonStyle,
  SearchFormInputStyle,
  SearchFormStyle,
} from './Searchbar.slyled';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  searchResult = evt => {
    const { value } = evt.currentTarget;
    this.setState({ search: value.trim() });
    console.log(value);
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: ' ' }); //почистили
  };

  render() {
    const { search } = this.state;
    return (
      <SearchbarStyle>
        <SearchFormStyle onSubmit={this.searchResult}>
          <SearchFormButtonStyle type="submit">
            <span>
              <FiSearch size="1.5em" />
            </span>
          </SearchFormButtonStyle>

          <SearchFormInputStyle
            value={search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputSearch}
          />
        </SearchFormStyle>
      </SearchbarStyle>
    );
  }
}
