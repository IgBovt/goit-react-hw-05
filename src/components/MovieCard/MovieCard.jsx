import { LuDot } from 'react-icons/lu';
import css from './MovieCard.module.css';

export default function MovieCard({
  film: { original_title, poster_path, release_date, vote_average },
}) {
  return (
    <div className={css.card}>
      <img
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={original_title}
        width="228"
        height="335"
      />
      <div>
        <h3>{original_title}</h3>
        <div>
          <p>{release_date}</p>
          <LuDot />
          <p>User Score {vote_average}</p>
        </div>
      </div>
    </div>
  );
}
