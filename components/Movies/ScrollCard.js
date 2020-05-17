import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";
import { trimText, formatDate } from "../../utils";

const Container = styled.View`
  padding: 0px 15px;
  margin-bottom: 30px
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  width: 65%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin: 10px 0px 10px 0px;
`;

const ReleaseDate = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 12px;
`;

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
  opacity: 0.8;
`;


const ScrollCard = ({ id, poster, title, releaseDate, overview }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url = {poster} />
        <Data>
          <Title>{trimText(title, 27)}</Title>
          {releaseDate ? (
            <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
            ) : null}
          <Overview>{trimText(overview, 80)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  )
}

ScrollCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  overview: PropTypes.string.isRequired
};

export default ScrollCard
