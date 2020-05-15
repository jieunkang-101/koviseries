import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {  TouchableOpacity } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { useNavigation } from "@react-navigation/native";


const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BackgroundImg = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`; 

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const OriginalTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

const Votes = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;


const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;


const Slide = ({ id, title, originalTitle, backgroundImage, votes, overview, poster }) => {
  const navigation = useNavigation();
  const goToDetail = () =>
  navigation.navigate("Detail", {
    id,
    title,
    originalTitle,
    backgroundImage,
    votes,
    overview,
    poster
  });

  return (
    <Container onPress={goToDetail}>
      <TouchableOpacity onPress={goToDetail}>
      <BackgroundImg source = {{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{title}</Title>
          <OriginalTitle>| {originalTitle}</OriginalTitle>
          <Votes>⭐ {votes} / 10</Votes>
          <Overview>{overview.slice(0,80)}</Overview>
        </Data>
      </Content>
      </TouchableOpacity>
    </Container>
  )
}

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Slide
