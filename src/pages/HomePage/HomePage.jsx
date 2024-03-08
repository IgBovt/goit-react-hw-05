import { getMovies } from '../../API-fetch';
import { useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

export default function HomePage() {
  const [topFilms, setTopFilms] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setError(false);
        const data = await getMovies();
        setTopFilms(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Top 20 of the week</h1>
      {!error && <MovieList topFilms={topFilms} />}
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
    </div>
  );
}
