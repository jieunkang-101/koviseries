import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import { trimText } from "../../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const CardSlide = ({ isTv = false, id, poster, title, votes }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      poster,
      votes
    })
  }
  return (
    <TouchableOpacity onPress={goToDetail}> 
      <Container>
        <Poster url = {poster} />
        <Title>{trimText(title, 12)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

CardSlide.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string,
  votes: PropTypes.number.isRequired
};

export default CardSlide
