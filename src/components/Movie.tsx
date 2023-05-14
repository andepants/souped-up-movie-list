import { MovieProps } from "../interfaces/MovieProps";

export function Movie({ movie }: { movie: MovieProps; key: number }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-600">
        <span className="font-bold">Year:</span> {movie.year}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Rating:</span> {movie.rating}
      </p>
      <p className="text-gray-800 mt-2">
        <span className="font-bold">Description:</span> {movie.description}
      </p>
      <p className="text-gray-600 mt-2">
        <span className="font-bold">Watched:</span> {movie.watched === 'watched' ? 'Yes' : 'No'}
      </p>
    </div>
  );
}