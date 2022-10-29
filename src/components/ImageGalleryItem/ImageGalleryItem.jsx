import { Modal } from "components/Modal/Modal";
import { Component } from "react";
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'


export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }

    render() {
        const { showModal } = this.state;
        const {image: {webformatURL, largeImageURL, tags}} = this.props

        return (
          <>
            <li className={css.imageGalleryItem}>
              <img
                src={webformatURL}
                alt={tags}
                className={css.imageGalleryItem_image}
                onClick={this.toggleModal}
              />
            </li>
            {showModal && (
              <Modal
                image={largeImageURL}
                alt={tags}
                onClose={this.toggleModal}
              />
            )}
          </>
        );
    }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}
