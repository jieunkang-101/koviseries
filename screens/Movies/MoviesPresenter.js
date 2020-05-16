import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator, ScrollView } from "react-native";
import BgSlide from "../../components/Movies/BgSlide";
import SlideTitle from "../../components/SlideTitle";
import CardSlide from "../../components/CardSlide";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const BgSlideContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
  margin-left: 12px;
  margin-right: 20px;
`;

const Container = styled.View``;

const MoviesPresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: loading ? "center" : "flex-start"
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" />
        ) : (
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
            <SlideTitle title={"Movies Now Playing"} />
            <ScrollView 
              horizontal={true}
              contentContainerStyle={{
                paddingLeft: 12,
                flexDirection: 'row'
              }}
              showsHorizontalScrollIndicator={false}
            >
              {nowPlaying.map(movie => (
                <CardSlide
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
          </Container>
        </>
      )}
    </ScrollView>
  )
}

export default MoviesPresenter;
