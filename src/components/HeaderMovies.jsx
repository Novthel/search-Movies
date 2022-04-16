import React from 'react';
import styles from './HeaderMovies.module.css';
import { Link } from 'react-router-dom';

export function HeaderMovies() {
  return (
    <Link to='/' >
        <h1 className={styles.HeaderMovies}>Search Movies - Online</h1>
        <hr/>
    </Link>
  )
}
