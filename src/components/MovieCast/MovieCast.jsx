import { getActors } from '../../API-fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const [actors, setActors] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setError(false);
        const data = await getActors(movieId);
        setActors(data);
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
      {actors && (
        <ul className={css.list}>
          {actors.cast.map(actor => (
            <li className={css.item} key={actor.id}>
              <img
                className={css.img}
                src={
                  actor.profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path
                    : 'https://cdn.pixabay.com/photo/2013/07/12/15/33/cutting-150066_1280.png'
                }
                alt={actor.name}
                width="80"
                height="80"
              />
              <div>
                <h4 className={css.name}>{actor.name}</h4>
                <p className={css.character}>{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
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
    </>
  );
}
