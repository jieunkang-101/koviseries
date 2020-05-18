import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";




const DetailController = ({ 
  navigation, 
  route: {
    params: { isTv, id, title, originalTitle, backgroundImage, poster, votes, overview }
  } 
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    title,
    originalTitle,
    backgroundImage,
    poster,
    overview,
    votes
    
  });

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
        ...getDetail,
        ...getReview,
        ...getSimilar,
        title: getDetail.title || getDetail.name,
        originalTitle: getDetail.original_title || getDetail.original_name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average
    });
  }

  useEffect(() => {
    getData();
  }, [id]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return (
    <DetailPresenter {...detail} />
  );
};

export default DetailController;