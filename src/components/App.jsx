import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { SearchBar } from './SearchBar/SearchBar';
import { getImagesFromAPI } from './services/API';
import {LoadButton} from './Button/Button'
import css from './App.module.css'

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);


  const onHandleSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLoading(true);
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
  }

  

  useEffect(() => {
    if (!loading) {
      return;
    }

    async function downloadNewImages() {
      try {
        const images = await getImagesFromAPI(query, page);
        if (images.totalHits === 0) {
          Notiflix.Notify.failure('Sorry, your quest has no result!')
        }
        setImages(prevState => [...prevState, ...images.hits]);
        setLoading(false);
        setTotalHits(images.totalHits);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    } 

    downloadNewImages()
  }, [query, loading, page])

  return (
    <div className={css.app}>
      <SearchBar onSubmit={onHandleSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && images.length !== totalHits && !loading && (
        <LoadButton onClick={loadMore} />
      )}
    </div>
  );
}
