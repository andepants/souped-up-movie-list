import { useState, FormEvent, useEffect } from 'react';
import { MovieProps } from '../interfaces/MovieProps';

export function FilterMovies({ setFilteredMovies, allMovies } : { setFilteredMovies : Function, allMovies : MovieProps[] }) {

  const [ inputValue, setInputValue ] = useState<string>('' as string);
  const [ watched, setWatched ] = useState<string>('all' as string);

  const handleChange = (e : FormEvent<HTMLInputElement> | null) : void => {
    const { value } = e?.target as HTMLInputElement;
    setInputValue(value);
  }

  const showAllMovies = () => {
    setWatched('all');
    setInputValue('');
  }

  useEffect(() => {
    const filterMovies = () => {
      if (watched === 'watched') {
        setFilteredMovies(allMovies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()) && movie.watched === 'watched'));
      } else if (watched === 'not watched'){
        setFilteredMovies(allMovies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()) && movie.watched === 'not watched'));
      } else {
        setFilteredMovies(allMovies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase())));
      }
    }
    filterMovies();
  }, [inputValue, watched, allMovies, setFilteredMovies]);

  return (
    <div>
      <h2>Filter Movies</h2>
      <input type="text" placeholder="Search by title" value={inputValue || ''} onChange={handleChange} className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      <button onClick={showAllMovies} className="mt-4 px-4 m-2 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Show All Movies</button>
      <button onClick={() => setWatched('watched')} className="mt-4 m-2 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Show Watched</button>
      <button onClick={() => setWatched('not watched')} className="mt-4 m-2 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Show Not Watched</button>
    </div>
  );
}