import movies from '../../public/examplemovies';
import { MovieProps, Movie } from '../components/Movie';

export default function Home() {


  return (
    <div>
      {movies.map((movie : MovieProps, index : number) => {
        return <Movie movie={movie} key={index}/>
      })}
    </div>
  );
}
