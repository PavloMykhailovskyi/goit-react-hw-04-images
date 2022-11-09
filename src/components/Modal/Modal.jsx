import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ image, alt, onClose }) => {
    
    useEffect(() => {
        const onEscClose = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', onEscClose);

        return () => window.removeEventListener('keydown', onEscClose)
    }, [onClose])

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }


    return createPortal(
      <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal}>
          <img src={image} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}

