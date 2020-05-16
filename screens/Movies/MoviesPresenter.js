import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 30px;
`;

const Container = styled.View``;

const MoviesPresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black"
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: loading ? "center" : "flex-start"
      }}
    >
      {loading ? (
        <ActivityIndicator color="white" />
        ) : (
        <>
          <Title title={"Movies Popular"} />
          <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={5}>
              {popular.map(movie => (
                <Slide
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
          </SliderContainer>
          <Container>
            <Title title={"Movies Now Playing"} />
          </Container>
        </>
      )}
    </ScrollView>
  )
}

export default MoviesPresenter;
