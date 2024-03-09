import { getReviews } from '../../API-fetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        setLoader(true);
        setError(false);
        const data = await getReviews(movieId);
        setReviews(data);
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
      {reviews && (
        <ul className={css.list}>
          {reviews.results.map(review => (
            <li className={css.item} key={review.id}>
              <p className={css.title}>{review.author}</p>
              <p className={css.text}>{review.content}</p>
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
