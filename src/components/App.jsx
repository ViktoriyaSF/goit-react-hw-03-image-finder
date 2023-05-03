import React, { Component } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { ContainerStyl } from 'components/BasicStyles/Container.staled';
import { Searchbar } from './Searchbar/Searchbar';

// import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    largeImageUrl: '',
    page: 1,
    query: '',
    loadMore: null,
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

  searchResult = value => {
    this.setState({ query: value, page: 1, pictures: [], loadMore: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });
      fetchImages(query, page)
        .then(e =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...e.hits],
            status: 'idle',
            loadMore: 12 - e.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar />
        <ContainerStyl>
          {/* <ImageGallery
            pictures={this.pictures}
            onClick={this.getLargeImgUrl}
          /> */}
          <Button />
          <Loader />
        </ContainerStyl>

        <GlobalStyle />
      </Layout>
    );
  }
}
