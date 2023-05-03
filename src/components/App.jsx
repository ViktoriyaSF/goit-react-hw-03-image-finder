import React, { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { ContainerStyl } from 'components/BasicStyles/Container.staled';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    loading: false, // флаг, який показує, чи відбувається завантаження
    error: null,
  };

  componentDidUpdate(_, PrevState) {
    // Перевіряємо, чи змінились пропи search або page.
    if (
      PrevState.search !== this.state.search ||
      PrevState.page !== this.state.page
    ) {
      this.getFunc(this.state.search, this.state.page);
    }
  }
  getFunc = (text, page) => {
    this.setState({ loading: true });
    

  handleFormSubmit = search => {
    this.setState({ search });
    console.log(this.setState);
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ContainerStyl>
          <ImageGallery search={this.state.search} />
          <Button />
          <Loader />
        </ContainerStyl>

        <GlobalStyle />
      </Layout>
    );
  }
}
