import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

const SearchController = () => {
  return (
    <SearchPresenter />
  )
};

export default SearchController;