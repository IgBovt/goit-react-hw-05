import { useEffect, useState } from 'react';
import { getMoviesName } from '../../API-fetch';
import { Hourglass } from 'react-loader-spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  function handleSearch(inputQuery) {
    setQuery(inputQuery);
    setPage(1);
  }

  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setError(false);
        const data = await getMoviesName(query, page);
        setFilms(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    getData();
  }, [query, page]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {!error && <MovieList topFilms={films} />}
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
