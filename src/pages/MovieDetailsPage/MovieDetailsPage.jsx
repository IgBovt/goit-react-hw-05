import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMoviesId } from '../../API-fetch';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getMoviesId(movieId);
        console.log(data);
      } catch (error) {
      } finally {
      }
    }

    getData();
  }, [movieId]);

  return <p>MovieDetailsPage</p>;
}
