import React, { useEffect , useState } from 'react';
import styles from '../components/InfoMovie.module.css';
import { get } from '../utils/API';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';


export default function InfoMovie() {

  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(()=>{
    setIsLoading(true);
    get('/movie/' + id).then((data)=>{
      setIsLoading(false);
      setMovie(data)
    })

  },[id])

  if(isLoading){
    return <Spinner/>
  }

  if(!movie){
    return null
  }

  const imageURL ='https://image.tmdb.org/t/p/w500' + movie.poster_path;
  
  return (

    <div className={styles.infoMovie}>

      <img className={styles.infoImg} src={imageURL} alt={movie.title} />
      <div className={styles.infoDetails}>
        <p><strong>Title:  </strong>{movie.title}</p>
        <p><strong>Genres: </strong> {movie.genres.map((genre)=> genre.name).join(', ')}</p>
        <p><strong>Description: </strong></p> 
        <p>{movie.overview}</p>
      </div>
    
    </div>
  )
}
