import { LuDot } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import css from './MovieCard.module.css';

export default function MovieCard({
  film: { original_title, poster_path, release_date, vote_average, id },
}) {
  return (
    <Link className={css.link} to={`/movies/${id}`}>
    <div className={css.card}>
      <img
        className={css.img}
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={original_title}
        width="228"
        height="300"
      />
      <div className={css.textContainer}>
        <h3 className={css.title}>{original_title}</h3>
        <div className={css.wrapper}>
          <p>{release_date.slice(0, 4)}</p>
          <LuDot />
          <p>User Score {vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
