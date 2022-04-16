import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchMovie.module.css';

export default function SearchMovie() {
  return (
    <form className={ styles.searchMovie }>
        <div className={ styles.searchBox }>
            <input type='text' className={ styles.searchInput } />
            <button type='submit' className={ styles.searchBtn }>{<FaSearch size={20}/>}</button>
        </div>    
    </form>
  )
}
