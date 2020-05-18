import axios from "axios";
import { TMDB_KEY } from 'react-native-dotenv';

console.log(TMDB_KEY);

const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3${path}`, {
      params: {
        ...params,
        page: 1, 
        with_original_language: "ko",
        without_genres: 10749, 
        api_key: TMDB_KEY
      }
  })


// const pageOne =  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&with_original_language=ko&page=1`);
// const pageTwo = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&with_original_language=ko&page=2`);

// const makeMutiRequest = () => 
//   axios.all([pageOne, pageTwo])
//   .then(axios.spread((...res) => {
//     const resOne = res[0];
//     const resTwo = res[1];
//     console.log(res);
//     const responses = resOne.data.results.concat(resTwo.data.results);
//     console.log(responses);
//   }))
// const getMutiResults = async (path, params = {}) => {
//   try {
//     const {
//       data: { results }
//     } = await makeMutiRequest(path, params);
//     return [results || data, null];
//   } catch (e) {
//     console.log(e);
//     return [null, e];
//   }
// };



const getResults = async (path, params = {}) => {
  try {
    const {
      data: { results }, 
      data        //movie(id)'s data doesn't have "results" object
    } = await makeRequest(path, params);
    // console.log(data)
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  popular: () => getResults("/movie/popular", { sort_by: "popularity.desc"}),
  topRated: () => getResults("/movie/top_rated"),
  upcoming: () => getResults("/movie/upcoming", { sort_by: "release_date.asc" }),
  search: (query) => getResults("/search/movie", { query }),
  movie: (id) => getResults(`/movie/${id}`, { append_to_response: "videos" }),
  review: (id) =>  getResults(`/movie/${id}/reviews`),
  similar: (id) => getResults(`/movie/${id}/similar`)
};

export const tvApi = {
  today: () => getResults("/tv/airing_today"),
  thisWeek: () => getResults("/tv/on_the_air"),
  topRated: () => getResults("/tv/top_rated"),
  popular: () => getResults("/tv/popular"),
  search: (query) => getResults("/search/tv", { query }),
  show: (id) => getResults(`/tv/${id}`, { append_to_response: "videos" })
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
