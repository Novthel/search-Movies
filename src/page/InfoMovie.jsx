import React from 'react';
import movie from '../info.json';
import styles from '../components/InfoMovie.module.css';


export default function InfoMovie() {
  
  const imageURL ='https://image.tmdb.org/t/p/w500' + movie.backdrop_path
  
  return (

    <div className={styles.infoMovie}>

      <img className={styles.infoImg} src={imageURL} alt={movie.title} />
      <div className={styles.infoDetails}>
        <p><strong>Title: </strong>{movie.title}</p>
        <p><strong>Description: </strong>{movie.overview}</p>
        <p><strong>Genres: </strong> {movie.genres.map((genre)=> genre.name).join(', ')}</p>
      </div>
    
    </div>
  )
}
