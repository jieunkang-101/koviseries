import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";




const DetailController = ({ 
  navigation, 
  route: {
    params: { id, title, originalTitle, backgroundImage, poster, votes, overview }
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

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return (
    <DetailPresenter {...detail} />
  );
};

export default DetailController;