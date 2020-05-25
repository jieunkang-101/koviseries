import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import BgImg from "./BgImg";
import Poster from "./Poster";
import Votes from "./Votes";
import { useNavigation } from "@react-navigation/native";
import { trimText } from "../../utils";

const Container = styled.View`
  height: 100%;
  width: 100%;
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

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const BgSlide = ({ 
  isTv = false, 
  id, 
  title, 
  originalTitle, 
  backgroundImage, 
  votes, 
  overview, 
  poster 
}) => {
  const navigation = useNavigation();
  const goToDetail = () =>
  navigation.navigate("Detail", {
    isTv,
    id,
    title,
    originalTitle,
    backgroundImage,
    votes,
    overview,
    poster
  });

  return (
    <TouchableOpacity enabled="true" onPress={goToDetail}>
      <Container>
        <BgImg url={backgroundImage} />
        <Content>
          <Poster url={poster} />
          <Data>
            <Title>{trimText(title, 27)}</Title>
            <OriginalTitle>| {originalTitle}</OriginalTitle>
            <Votes votes={votes} />
            <Overview>{trimText(overview, 80)}</Overview>
          </Data>
        </Content>
      </Container>
    </ TouchableOpacity>
  );
};

BgSlide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string
};

export default BgSlide;
