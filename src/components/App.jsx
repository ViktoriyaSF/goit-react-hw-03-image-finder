import React, { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { ContainerStyl } from 'components/BasicStyles/Container.staled';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

// import { fetchImages } from './api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    totalHits: null,
    isLoading: false,
    error: null,
    selectedImg: null,
  };
  // передача пошукового запиту при сабміті форми
  handleFormSubmit = (searchQuery, page) => {
    this.setState({ ...searchQuery, ...page });
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ContainerStyl>
          <ImageGallery />
          <Button />
          <Loader />
        </ContainerStyl>

        <GlobalStyle />
      </Layout>
    );
  }
}
