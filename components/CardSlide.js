import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../api";

const Container = styled.View`
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const Votes = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;


const CardSlide = ({ id, poster, title, votes }) => {
<Container>
  <Poster url ={apiImage(poster)} />
  <Title>{title}</Title>
  <Votes>⭐ {votes} / 10</Votes>
</Container>
}

CardSlide.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default CardSlide
