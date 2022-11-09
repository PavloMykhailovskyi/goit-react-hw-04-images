import { Modal } from "components/Modal/Modal";
import { useState } from "react";
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({image}) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal)
  }

  const { webformatURL, largeImageURL, tags } = image;

  return (
    <>
            <li className={css.imageGalleryItem}>
              <img
                src={webformatURL}
                alt={tags}
                className={css.imageGalleryItem_image}
                onClick={toggleModal}
              />
            </li>
            {showModal && (
              <Modal
                image={largeImageURL}
                alt={tags}
                onClose={toggleModal}
              />
            )}
          </>
  )
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
}
