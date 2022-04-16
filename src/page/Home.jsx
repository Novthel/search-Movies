import React from 'react'
import MovieList from '../components/MovieList'
import SearchMovie from '../components/SearchMovie'

export default function Home() {
  return (
    <div>
        <SearchMovie />
        <MovieList />
    </div>
  )
}
