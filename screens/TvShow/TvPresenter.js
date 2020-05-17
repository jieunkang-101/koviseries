import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import PresenterContainer from "../../components/PresenterContainer";
import { Dimensions, ScrollView, Text } from "react-native";
import SlideTitle from "../../components/SlideTitle";
import BgSlide from "../../components/TvShow/BgSlide";
// import BgSlideContainer from "../../components/BgSlideContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const BgSlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin: 15px 0px 30px 15px;
`;

const TvPresenter = ({ loading, popular, today, thisWeek, topRated }) => {
  return (
    <PresenterContainer loading={loading}>  
      <>
        <SlideTitle title={"TV Shows Popular"} />
        <BgSlideContainer>
          <Swiper controlsEnabled={false} loop timeout={5}>
            {popular.map(show => (
              <BgSlide
                key={show.id}
                id={show.id}
                name={show.name}
                originalName={show.original_name}
                overview={show.overview}
                votes={show.vote_average}
                backgroundImage={show.backdrop_path}
                poster={show.poster_path}
              />
            ))}
          </Swiper>
        </BgSlideContainer>


      </>  
    </PresenterContainer>
   
  )
}

export default TvPresenter
