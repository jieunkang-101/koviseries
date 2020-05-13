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


const getResult = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest(path, params);
    console.log(results);
    data 
    
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getResult("/discover/movie", {with_original_language: "ko"} ),
  popular: () => getResult("/discover/movie", {with_original_language: "ko", sort_by: vote_count.desc}),
  upcoming: () => getResult("/discover/movie"),
  search: query => getResult("/search/movie", { query }),
  movie: id => getResult(`/movie/${id}`),

};



