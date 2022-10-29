import css from './Button.module.css'
import PropTypes from 'prop-types'

export const LoadButton = ({onClick}) => {
    return (
      <button onClick={onClick} className={css.load_btn}>
        Load More
        </button>
    );
}

LoadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}