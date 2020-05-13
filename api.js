import axios from "axios";
import { TMDB_KEY } from 'react-native-dotenv';

console.log(TMDB_KEY);

const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3${path}`, {
      params: {
        ...params,
        page: 1,
        api_key: TMDB_KEY
      }
  })


// const pageOne =  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&with_original_language=ko&sort_by=popularity.desc&page=1`);
// const pageTwo = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&with_original_language=ko&sort_by=popularity.desc&page=2`);

// const makeRequest = () => 
//   axios.all([pageOne, pageTwo])
//   .then(axios.spread((...res) => {
//     const resOne = res[0];
//     const resTwo = res[1];
//     console.log(res);
//     const responses = resOne.data.results.concat(resTwo.data.results);
//     console.log(responses);
//   }))


// const getResult = async (path, params = {}) => {
//   try {
//     const {
//       data: { results },
//       data
//     } = await makeRequest(path, params);
//     console.log(data);
//     data 
    
//     return [results || data, null];
//   } catch (e) {
//     console.log(e);
//     return [null, e];
//   }
// };


const getResult = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest(path, params);
    console.log(data);
    data 
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getResult("/movie/now_playing", { with_original_language: "ko" }),
  popular: () => getResult("/movie/popular", { with_original_language: "ko", sort_by: "popularity.desc", without_genres: 10749 }),
  upcoming: () => getResult("/movie/upcoming", { with_original_language: "ko", sort_by: "release_date.asc" }),
  search: query => getResult("/search/movie", { query }),
  movie: id => getResult(`/movie/${id}`, { append_to_response: "videos" })
};

export const tvApi = {
  today: () => getResult("/tv/airing_today", { with_original_language: "ko" } ),
  thisWeek: () => getResult("/tv/on_the_air", { with_original_language: "ko" }),
  topRated: () => getResult("/tv/top_rated", { with_original_language: "ko" }),
  popular: () => getResult("/tv/popular", { with_original_language: "ko" }),
  search: query => getResult("/search/tv", { query }),
  show: id => getResult(`/tv/${id}`, { append_to_response: "videos" })
};

