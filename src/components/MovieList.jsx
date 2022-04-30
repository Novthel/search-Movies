import React, { useEffect, useState } from 'react';
import styles from './MovieList.module.css';
import MovieCard from './MovieCard';
import { get } from '../utils/API';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import Empty from './Empty';

export default function MovieList({search}) {
  const [ page, setPage ] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [movies,setMovies] = useState([]);
  const [ isLoading, setIsLoading ] = useState (true)

  useEffect(()=>{
    setIsLoading(true);
    const searchURL = search ? '/search/movie?query=' + search + '&page=' + page : '/discover/movie?page=' + page; 
    get(searchURL).then(data=>{
      setMovies((prevMovies) =>  prevMovies.concat(data.results));
      setHasMore( data.page < data.total_pages );
      setIsLoading(false);
    })

  },[search, page])

  if(!isLoading && movies.length === 0){
    return <Empty />
  }

  return (

    <InfiniteScroll dataLength={movies.length} hasMore={hasMore} loader={ <Spinner/>} next={ ()=> setPage((prevPag) => prevPag + 1)}>
      <ul className={styles.movieList}>
        {movies.map((movie)=>(

          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </ul>
    </InfiniteScroll>
    
  )
}
