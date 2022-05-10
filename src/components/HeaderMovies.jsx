import React from 'react';
import styles from './HeaderMovies.module.css';
import { Link } from 'react-router-dom';
import cinemax from '../cinemax.png';


export function HeaderMovies() {
  return (
    <div className={styles.container}>
      <Link to='/' >
          <img className={styles.icono} src={cinemax} alt='logoCine' />
      </Link>
    </div>
   
  )
}
