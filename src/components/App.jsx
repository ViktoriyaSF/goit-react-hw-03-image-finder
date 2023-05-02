import React, { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { ContainerStyl } from 'components/BasicStyles/Container.staled';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    photoName: ' ',
  };

  render() {
    return (
      <Layout>
        <Searchbar></Searchbar>
        <ContainerStyl></ContainerStyl>
        {/* <Searchbar">
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
        </Searchbar> */}
        <GlobalStyle />
      </Layout>
    );
  }
}
