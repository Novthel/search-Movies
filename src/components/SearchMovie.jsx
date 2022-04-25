import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchMovie.module.css';
import {useNavigate} from 'react-router-dom';
import {useQuery} from '../Hooks/useQuery';


export default function SearchMovie() {

  const [ searchText, setSearchText ] = useState(' ');
  const navegacion = useNavigate();
  const query = useQuery();
  const search = query.get('search');

  useEffect(()=>{
    setSearchText(search || ' ')
  },[search])

  const searchingMovie = (e)=>{
    e.preventDefault();
  
    navegacion('/?search='+ searchText)

  }


  return (
    <form className={ styles.searchMovie } onSubmit={ searchingMovie }>
        <div className={ styles.searchBox }>
            <input type='text' className={ styles.searchInput } 
              value={ searchText } onChange ={ (e)=> setSearchText(e.target.value) }/>
            <button type='submit' className={ styles.searchBtn }>{<FaSearch size={20}/>}</button>
        </div>    
    </form>
  )
}
