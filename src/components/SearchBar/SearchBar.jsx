import { useState } from "react";
import Notiflix from "notiflix";
import { BiSearch } from 'react-icons/bi';
import css from './SearchBar.module.css'
import PropTypes from 'prop-types'

export const SearchBar = ({onSubmit}) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value.toLowerCase());
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      Notiflix.Notify.warning('Please enter your quest word');
      return;
    }
    onSubmit(search);
    setSearch('');
  }

  return (
    <div>
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchForm_button}>
            <BiSearch size={22} />
            <span className={css.searchForm_button_label}></span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}