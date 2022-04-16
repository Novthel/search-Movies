import React from 'react';
import styles from './MovieList.module.css';
import movies from '../movies.json';
import MovieCard from './MovieCard';

export default function MovieList() {

  return (
    <ul className={styles.movieList}>
      {movies.map((movie)=>{
        return <MovieCard key={movie.id} movie={movie}/>
      })}
      
    </ul>
  )
}
