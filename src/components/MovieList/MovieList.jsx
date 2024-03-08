import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';
export default function MovieList({ topFilms }) {
  return (
    <div className={css.container}>
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
