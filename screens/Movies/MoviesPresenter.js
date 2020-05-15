import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");



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


const MoviesPresenter = () => {
  return (
    <Header>
      <Swiper controlsEnabled={false} loop timeout={3}>
        <Section>
          <Text>Hello1</Text>
        </Section>
        <Section>
          <Text>Hello2</Text>
        </Section>
        <Section>
          <Text>Hello3</Text>
        </Section>
      </Swiper>
    </Header>
  )
}

export default MoviesPresenter;
