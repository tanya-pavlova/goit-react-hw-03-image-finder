import React, { Component } from 'react';
import imagesApi from './services/Api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import styles from './components/styles.module.css';
import { ToastContainer } from 'react-toastify';
import Spinner from './components/Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    selectedImage: '',
    showModal: false,
    isLoading: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
      this.setState({ status: 'resolved' });
      if (this.state.images.length === 0) {
        this.setState({ status: 'idle' });
      }
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      searchQuery: query,
      currentPage: 1,
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        if (images.length === 0 || this.state.searchQuery.trim() === '') {
          this.setState({ error: 'No any picture', status: 'rejected' });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            currentPage: prevState.currentPage + 1,
            status: 'resolved',
          }));
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = image => {
    this.setState(({ showModal }) => ({
      selectedImage: !showModal ? image : '',
      showModal: !showModal,
    }));
  };

  render() {
    const { images, status, selectedImage, showModal, isLoading } = this.state;

    return (
      <>
        <div className={styles.App}>
          <Searchbar onSubmit={this.onChangeQuery} />
          <ImageGallery images={images} onClickImage={this.toggleModal} />
          {isLoading && <Spinner />}
          {status === 'rejected' && (
            <p className={styles.Error}>Ничего не найдено :( </p>
          )}
          {status === 'resolved' && (
            <Button showModal={showModal} onClickButton={this.fetchImages} />
          )}
        </div>
        {selectedImage && (
          <Modal image={selectedImage} onClose={this.toggleModal} />
        )}
        <ToastContainer />
      </>
    );
  }
}

export default App;
