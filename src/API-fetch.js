import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGJmMWNlZWFmNWRjZmQ0YjVhYzc3MTY5NzM2Y2RmZCIsInN1YiI6IjY1ZWExNGRhMzM5NmI5MDE2MjgzZWU0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dUj7ZBFgv5aJVrYdWhdYMWo9cYyAr2GHGhadEvtJ1bo';

export const getMovies = async () => {
  const response = await axios.get('/trending/movie/week?language=en-US');
  return response.data;
};

export const getMoviesName = async (searchQuery, page) => {
  const response = await axios.get('search/movie', {
    params: {
      query: searchQuery,
      include_adult: false,
      language: 'en-US',
      page,
    },
  });
  console.log(response.data);
  return response.data;
};