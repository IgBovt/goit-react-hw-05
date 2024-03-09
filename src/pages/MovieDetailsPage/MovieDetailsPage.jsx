import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';
import { getMoviesId } from '../../API-fetch';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';


export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setError(false);
        const data = await getMoviesId(movieId);
        setFilm(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    getData();
  }, [movieId]);

  return (
    <>
      {film && <MovieDetail film={film} />}
      {error && <ErrorMessage />}
      {loader && (
        <Hourglass
          visible={true}
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass={css.loader}
          colors={['#fafafa', '#fafafa']}
        />
      )}
    </>
  );
}
