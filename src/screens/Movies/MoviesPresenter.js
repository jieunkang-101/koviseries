import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ScrollView } from "react-native";
import PresenterContainer from "../../components/PresenterContainer";
import BgSlideContainer from "../../components/BgSlideContainer";
import BgSlide from "../../components/BgSlide";
import SlideTitle from "../../components/SlideTitle";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import CardSlide from "../../components/CardSlide";
import FlatList from "../../components/Movies/FlatList";

const Container = styled.View``;

const MoviesPresenter = ({ 
  refreshData, 
  loading, 
  topRated, 
  popular, 
  upcoming 
}) => {
  return (
    <PresenterContainer refreshData={refreshData} loading={loading}>
      <>
        <SlideTitle title={"Movies Popular"} />
        <BgSlideContainer>
          <Swiper controlsEnabled={false} loop timeout={5}>
            {popular.map(movie => (
              <BgSlide
                id={movie.id}
                key={movie.id}
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
          <ScrollViewContainer>
            {topRated.map(movie => (
              <CardSlide
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollViewContainer>
          <SlideTitle title={"Movies Upcoming"} />
          <ScrollView> 
            {upcoming.map(movie => (
              <FlatList
                id={movie.id}
                key={movie.id}
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
  );
};

export default MoviesPresenter;
