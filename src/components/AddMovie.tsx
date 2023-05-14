import { useState, ChangeEvent, FormEvent } from 'react';
import { MovieProps } from '../interfaces/MovieProps';

export function AddMovie ({setAllMovies, allMovies } : { setAllMovies : Function, allMovies : MovieProps[] }) {

  interface formData {
    title: string,
  }

  const [ formData, setFormData ] = useState<formData>({
    title: '' as string,
  });

  const handleChange = (e : ChangeEvent<HTMLInputElement>  | null) : void => {
    const { name, value } = e?.target as HTMLInputElement;
    setFormData({ ...formData, [name] : value });
  }

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllMovies([...allMovies, formData]);
    setFormData({
      title: '' as string,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label htmlFor="title" className="text-gray-700">Title</label>
        <input type="text" name="title" id="title" value={formData.title || ''} onChange={handleChange} className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        <button type="submit" className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
      </form>
    </div>
  );
}