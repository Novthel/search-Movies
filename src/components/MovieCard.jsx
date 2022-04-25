import React from 'react';
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
  
    const imageURL ='https://image.tmdb.org/t/p/w300' + movie.poster_path;

  return (
    <Link to={'/movie/' + movie.id}>
      <li className={styles.moviecard}>
        <img className={styles.imgMovieCard} width={230}
        height={350} src={imageURL} alt={movie.title} />
        <p className={styles.titleMovieCard}>{ movie.title }</p>
      </li>
    </Link>
    
  )
}
