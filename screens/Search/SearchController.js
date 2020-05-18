import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchController = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    movies: [],
    moviesError: null,
    shows: [],
    showsError: null
  });

  const onChange = (text) => setQuery(text);
  const search = async () => {
    if (query === "") {
      return;
    }
    const [movies, moviesError] = await movieApi.search(query);
    const [shows, showsError] = await tvApi.search(query);

    const koreanMovies = movies.filter((items) => {
      if (!items.original_language) {
        return "none";
      }
      return items.original_language.includes("ko");
    });

    const koreanShows = shows.filter((items) => {
      if (!items.original_language) {
        return "none";
      }
      return items.original_language.includes("ko");
    });

    setResults({
      movies: koreanMovies,
      shows: koreanShows,
      moviesError,
      showsError
    });

    setQuery("");
  };
  console.log(results);
  console.log("koreanMovies", results.movies);
  console.log("koreanShows", results.shows);


  const refresh = () => {
    setResults({
      movies: [],
      moviesError: null,
      shows: [],
      showsError: null
    })
  };

  return (
    <SearchPresenter 
      {...results}
      keyword={query}
      onChange={onChange} 
      onSubmit={search}
      refreshData={refresh}
    />
  )
};

export default SearchController;