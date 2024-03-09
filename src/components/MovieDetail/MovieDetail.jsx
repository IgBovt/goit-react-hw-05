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
      <div>
        <h1>{original_title}</h1>
        <div>
          <p>{release_date.slice(0, 4)}</p>
          <LuDot />
          <p>User Score {vote_average.toFixed(1)}</p>
        </div>
        <div>
          <p>Genres</p>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div>
          <p>Country</p>
          <p>{production_countries.map(country => country.name).join(', ')}</p>
        </div>
        <div>
          <p>Overview</p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}
