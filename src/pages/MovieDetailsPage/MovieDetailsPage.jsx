import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMoviesId } from '../../API-fetch';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const data = await getMoviesId(movieId);
        setFilm(data);
      } catch (error) {
      } finally {
      }
    }

    getData();
  }, [movieId]);

  return film && <MovieDetail film={film} />;
}
