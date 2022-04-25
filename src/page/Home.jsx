import React from 'react'
import MovieList from '../components/MovieList'
import SearchMovie from '../components/SearchMovie'
import { useQuery } from '../Hooks/useQuery';


export default function Home() {

  const query = useQuery();
  const search = query.get('search');

  return (
    <div>
        <SearchMovie />
        <MovieList key={search}  search={ search }/>
    </div>
  )
}
