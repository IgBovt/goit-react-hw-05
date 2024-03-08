import { useEffect, useState } from 'react';
import { getMoviesName } from '../../API-fetch';
import { Hourglass } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    setFilms([]);
  }

  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setError(false);
        const data = await getMoviesName(query, page);
        setFilms(prevFilms => {
          return [...prevFilms, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    getData();
  }, [query, page]);
  function handleLoadMore() {
    setPage(page + 1);
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={films.length}
        next={handleLoadMore}
        hasMore={true}
      ></InfiniteScroll>
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
