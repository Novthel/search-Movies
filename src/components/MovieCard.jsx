
import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import { getImageURL } from '../utils/getImageURL';

export default function MovieCard({movie}) {

  const imageURL = getImageURL(movie.poster_path, 300);

  return (

    <li className={styles.moviecard}>
      <Link to={'/movie/' + movie.id}>
        <img className={styles.imgMovieCard} width={230}
        height={350} src={imageURL} alt={movie.title} />
        <p className={styles.titleMovieCard}>{ movie.title }</p>
      </Link>
    </li>
  )
}
