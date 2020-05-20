import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "../Poster";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";


const Container = styled.View`
  margin: 10px;
`;

const CardList = ({ isTv = false, id, poster }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      poster
    })
  }
  return (
    <TouchableOpacity onPress={goToDetail}> 
      <Container>
        <Poster url = {poster} />
      </Container>
    </TouchableOpacity>
  );
};

CardList.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
};

export default CardList;
