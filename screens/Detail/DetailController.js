import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import * as WebBrowser from "expo-web-browser";

const DetailController = ({ 
  navigation, 
  route: {
    params: { isTv, id, title, originalTitle, backgroundImage, poster, votes, releaseDate, firstAirDate, overview }
  } 
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      originalTitle,
      backgroundImage,
      poster,
      releaseDate,
      firstAirDate,
      overview,
      votes,
      videos: {
        results: []
      }
    }
  });
  console.log(id)

  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    const [getReview, getReviewError] = isTv
      ? "" 
      : await movieApi.review(id);
    const [getSimilar, getSimilarError] = isTv
      ? ""
      : await movieApi.similar(id);
    const koreanSimilar = getSimilar && getSimilar.filter((items) => {
      if (!items.original_language) {
        return "none";
      }
      return items.original_language.includes("ko");
    });
    console.log(koreanSimilar);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        ...getReview,
        ...getSimilar,
        title: getDetail.title || getDetail.name,
        originalTitle: getDetail.original_title || getDetail.original_name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average
      }  
    });
  }

  useEffect(() => {
    getData();
  }, [id]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const openBrowser = async url => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <DetailPresenter openBrowser={openBrowser} {...detail} />
  );
};

export default DetailController;