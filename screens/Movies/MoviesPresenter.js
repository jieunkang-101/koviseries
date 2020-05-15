import React from 'react';
import styled from 'styled-components/native';
// import { View, Text } from 'react-native';

const Header = styled.View``;
const Text = styled.Text`
  color: red;
`;


const MoviesPresenter = () => {
  return (
    <Header>
      <Text>Presenter</Text>
    </Header>
  )
}

export default MoviesPresenter;
