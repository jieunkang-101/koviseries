import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, ActivityIndicator } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%
`;

const Text = styled.Text``;



const MoviesPresenter = ({ loading, nowPlaying }) => {

console.log("MoviePresenter", loading);
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="white" />
        ) : (
        <Header>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map(movie => (
              <Section key={movie.id}>
                <Text>{movie.original_title}</Text>
                <Text>{movie.title}</Text>
                <Text>{movie.overview}</Text>
                <Text>{movie.vote_average}</Text>
                <Text>{movie.backdrop_path}</Text>
              </Section>
            ))}
          </Swiper>
        </Header>
      )}
    </Container>
  )
}

export default MoviesPresenter;
