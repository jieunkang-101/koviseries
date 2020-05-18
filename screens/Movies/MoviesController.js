import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

const MoviesController = () => {

  const [movies, setMovies] = useState({
    loading: true,
    topRated: [],
    topRatedError: null,
    popular: [],
    popularError: null,
    upcoming: [], 
    upcomingError: null
  });

  const getData = async () => {
    const [topRated, topRatedError] = await movieApi.topRated();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      topRated,
      topRatedError,
      popular,
      popularError,
      upcoming,
      upcomingError
    })
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(movies)
  // console.log(movies.upcoming)

  return (
    <MoviesPresenter {...movies} />
  );
};

export default MoviesController;