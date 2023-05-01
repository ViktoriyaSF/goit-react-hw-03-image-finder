import React, { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
// import { Section } from './Section/Section';

export class App extends Component {
  state = {
    photoName: ' ',
  };
  handleInputSearch = evt => {
    const { value } = evt.currentTarget;
    this.setState({ photoName: value.trim() });
    console.log(value);
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ photoName: ' ' }); //по чистили
  };

  render() {
    return (
      <Layout>
        <header>
          <form on Submit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              // value={photoName}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={this.handleInputSearch}
            />
          </form>
        </header>
        {/* <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header> */}
        <GlobalStyle />
      </Layout>
    );
  }
}
