"use client";
import movies from '../../public/examplemovies';
import { Movie } from '../components/Movie';
import { MovieProps } from '../interfaces/MovieProps';
import { AddMovie } from '../components/AddMovie';
import { FilterMovies } from '../components/FilterMovies';
import { FormEvent, useState } from 'react';

export default function Home() {

  const [ allMovies, setAllMovies ] = useState<MovieProps[]>(movies);
  const [filteredMovies, setFilteredMovies] = useState<MovieProps[]>(movies);

  return (
    <div>
      <FilterMovies setFilteredMovies={setFilteredMovies} allMovies={allMovies}/>
      <AddMovie setAllMovies={setAllMovies} allMovies={allMovies}/>
      {filteredMovies.map((movie : MovieProps, index : number) => {
        return <Movie movie={movie} key={index}/>
      })}
    </div>
  );
}




