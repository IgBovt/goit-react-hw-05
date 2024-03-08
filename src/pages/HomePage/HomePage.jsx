import { getMovies } from '../../API-fetch';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [topFilms, setTopFilms] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovies();
        setTopFilms(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <MovieList topFilms={topFilms} />
    </div>
  );
}
