import React, { useContext, useState, useEffect } from "react";
import FavoriteContext from "../../components/FavoriteContext";
import FavsPresenter from "./FavsPresenter";
import { movieApi, tvApi } from "../../../api";

const FavsController = () => {
  const { favoriteIds } = useContext(FavoriteContext);
  console.log("list", favoriteIds);

  const [detail, setDetail] = useState([]);


  const  getData = async () => {
    const [getDetail, getDetailError] = await movieApi.movie(favoriteIds[0]);
    setDetail([...detail, getDetail])
  }

  useEffect(
    () => {
      getData();
    },
    []
  );
 


  console.log(detail);


  return (
    <FavsPresenter />
  )
}

export default FavsController;