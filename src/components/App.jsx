import Notiflix from 'notiflix';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { SearchBar } from './SearchBar/SearchBar';
import { getImagesFromAPI } from './services/API';
import {LoadButton} from './Button/Button'
import css from './App.module.css'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    totalHits: null,
  };

  async componentDidUpdate(_, prevState) {
    if (!this.state.loading) {
      return;
    }

    try {
      const images = await getImagesFromAPI({
        query: this.state.query,
        page: this.state.page,
      });
      if (images.totalHits === 0) {
        Notiflix.Notify.failure('Sorry, your quest has no result!');
      }
      if (
        prevState.page !== this.state.page ||
        prevState.query !== this.state.query
      ) {
        this.setState({
          images: [...this.state.images, ...images.hits],
          loading: false,
          totalHits: images.totalHits,
        });
      }
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }

  onHandleSubmit = query => {
    this.setState({ query: query, page: 1, images: [], loading: true });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  render() {
    const { images, loading, totalHits } = this.state;
    return (
      <div className={css.app}>
        <SearchBar onSubmit={this.onHandleSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && images.length !== totalHits && !loading && (
          <LoadButton onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
