import { LuDot } from 'react-icons/lu';
import css from './MovieDetail.module.css';

export default function MovieDetail({
  film: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    genres,
    overview,
    production_countries,
  },
}) {
  return (
    <div className={css.container}>
      <img
        src={'https://image.tmdb.org/t/p/w500' + poster_path}
        alt={original_title}
        width="300"
        height="400"
      />
      <div className={css.textContainer}>
        <h1 className={css.title}>{original_title}</h1>
        <div className={css.infoWrapper}>
          <p>{release_date.slice(0, 4)}</p>
          <LuDot className={css.mark} />
          <p>User Score {vote_average.toFixed(1)}</p>
        </div>
        <div className={css.wrapper}>
          <h3 className={css.subtitle}>Genres</h3>
          <p className={css.text}>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
        <div className={css.wrapper}>
          <h3 className={css.subtitle}>Country</h3>
          <p className={css.text}>
            {production_countries.map(country => country.name).join(', ')}
          </p>
        </div>
        <div>
          <p className={css.subtitle}>Overview</p>
          <p className={css.text}>{overview}</p>
        </div>
      </div>
    </div>
  );
}
