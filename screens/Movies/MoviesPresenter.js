import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ScrollView } from "react-native";
import PresenterContainer from "../../components/PresenterContainer";
import SlideTitle from "../../components/SlideTitle";
import BgSlide from "../../components/Movies/BgSlide";
import CardSlide from "../../components/CardSlide";
import ScrollCard from "../../components/Movies/ScrollCard";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const BgSlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin: 15px 0px 30px 15px;
`;

const Container = styled.View``;

const MoviesPresenter = ({ loading, topRated, popular, upcoming }) => {
  return (
    <PresenterContainer loading={loading}>
      <>
        <SlideTitle title={"Movies Popular"} />
        <BgSlideContainer>
          <Swiper controlsEnabled={false} loop timeout={5}>
            {popular.map(movie => (
              <BgSlide
                key={movie.id}
                id={movie.id}
                title={movie.title}
                originalTitle={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </BgSlideContainer>
        <Container>
          <SlideTitle title={"Movies Top Rated"} />
          <ScrollView 
            horizontal={true}
            contentContainerStyle={{
              paddingLeft: 15,
              paddingBottom: 30,           
            }}
            showsHorizontalScrollIndicator={false}
          >
            {topRated.map(movie => (
              <CardSlide
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <SlideTitle title={"Movies Upcoming"} />
          <ScrollView> 
            {upcoming.map(movie => (
              <ScrollCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </ScrollView>
        </Container>
      </>
    </PresenterContainer>
  )
}

export default MoviesPresenter;
