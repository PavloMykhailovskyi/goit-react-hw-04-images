import css from './Button.module.css'

export const LoadButton = ({onClick}) => {
    return (
      <button onClick={onClick} className={css.load_btn}>
        Load More
        </button>
    );
}