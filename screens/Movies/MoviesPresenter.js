import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, ActivityIndicator } from "react-native";
import Slide from '../../components/Movies/Slide';


const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;



const Text = styled.Text``;



const MoviesPresenter = ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="white" />
        ) : (
        <>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {popular.map(movie => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </>
      )}
    </Container>
  )
}

export default MoviesPresenter;
