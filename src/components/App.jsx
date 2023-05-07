import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './BasicStyles/GlobalStyle';
// import { ContainerStyl } from 'components/BasicStyles/Container.staled';
import { Searchbar } from './Searchbar/Searchbar';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from '../service/api';
import { Modal } from './Modal/Modal';

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

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  searchResult = value => {
    console.log(value);
    const newQuery = value.trim();
    console.log(this.state.query);
    if (this.state.query === newQuery) {
      return Notify.info('you just searched for that name');
    }
    if (!newQuery) {
      return Notify.failure(
        'Sorry, the search field cannot be empty. Please enter information to search.'
      );
    }
    this.setState({
      query: newQuery,
      page: 1,
      pictures: [],
      loadMore: null,
    });
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
      // fetchImagesHits() !== 0
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
    const { pictures, status, showModal, largeImageUrl, loadMore } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.searchResult} />
        {/* <ContainerStyl> */}
        {showModal && (
          <Modal imgUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery pictures={pictures} onClick={this.getLargeImgUrl} />
        {status === 'loading' && <Loader />}
        {loadMore === 0 && <Button onClick={this.handleLoadMore} />}
        {/* </ContainerStyl> */}

        <GlobalStyle />
      </Layout>
    );
  }
}
