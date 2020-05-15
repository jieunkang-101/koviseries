import axios from "axios";
import { TMDB_KEY } from 'react-native-dotenv';

console.log(TMDB_KEY);

const makeRequest = (path, params) => 
    axios.get(`https://api.themoviedb.org/3${path}`, {
      params: {
        ...params,
        page: 1, 
        with_original_language: "ko",
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
  nowPlaying: () => getResults("/movie/now_playing", { without_genres: 10749 }),
  popular: () => getResults("/movie/popular", { sort_by: "popularity.desc", without_genres: 10749 }),
  upcoming: () => getResults("/movie/upcoming", { sort_by: "release_date.asc" }),
  search: query => getResults("/search/movie", { query }),
  movie: id => getResults(`/movie/${id}`, { append_to_response: "videos" })
};

export const tvApi = {
  today: () => getResults("/tv/airing_today"),
  thisWeek: () => getResults("/tv/on_the_air"),
  topRated: () => getResults("/tv/top_rated"),
  popular: () => getResults("/tv/popular"),
  search: query => getResults("/search/tv", { query }),
  show: id => getResults(`/tv/${id}`, { append_to_response: "videos" })
};

