import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGJmMWNlZWFmNWRjZmQ0YjVhYzc3MTY5NzM2Y2RmZCIsInN1YiI6IjY1ZWExNGRhMzM5NmI5MDE2MjgzZWU0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dUj7ZBFgv5aJVrYdWhdYMWo9cYyAr2GHGhadEvtJ1bo',
  },
};

export const getMovies = async () => {
  const response = await axios.get(
    '/trending/movie/week?language=en-US',
    options
  );
  return response.data;
};
