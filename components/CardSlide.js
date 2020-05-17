import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Name = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const CardSlide = ({ id, poster, title, name, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url = {poster} />
        {title ? (<Title>{title.length > 12 ? `${title.slice(0, 12)}...` : title}</Title>) : null}
        {name ? (<Name>{name.length > 12 ? `${name.slice(0, 12)}...` : name}</Name>) : null}
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

CardSlide.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  votes: PropTypes.number.isRequired
};

export default CardSlide
