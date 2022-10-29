import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
import PropTypes from 'prop-types'


export const ImageGallery = ({images}) => {
    return (
      <ul className={css.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
}