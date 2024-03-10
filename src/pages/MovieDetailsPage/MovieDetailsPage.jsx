import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';
import { getMoviesId } from '../../API-fetch';
import { IoIosArrowRoundBack } from 'react-icons/io';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = useRef(location.state ?? '/movies');
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
      <Link className={css.backLink} to={backLink.current}>
        <IoIosArrowRoundBack className={css.arrowIcon} />
        Go back
      </Link>

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
      <Outlet />
    </>
  );
}
