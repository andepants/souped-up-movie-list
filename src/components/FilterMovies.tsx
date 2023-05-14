import { useState, FormEvent } from 'react';
import { MovieProps } from '../interfaces/MovieProps';

export function FilterMovies({ setFilteredMovies, allMovies } : { setFilteredMovies : Function, allMovies : MovieProps[] }) {

  const [ inputValue, setInputValue ] = useState<string>('' as string);

  const handleChange = (e : FormEvent<HTMLInputElement> | null) : void => {
    const { value } = e?.target as HTMLInputElement;
    setInputValue(value);
    setFilteredMovies(allMovies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <div>
      <h2>Filter Movies</h2>
      <input type="text" placeholder="Search by title" value={inputValue || ''} onChange={handleChange} className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
    </div>
  );
}