import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';
export default function MovieList({ topFilms }) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Top 20 of the week</h1>
      <ul className={css.list}>
        {topFilms &&
          topFilms.map(film => (
            <li key={film.id}>
              <MovieCard film={film} />
            </li>
          ))}
      </ul>
    </div>
  );
}
