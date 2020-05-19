import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { PropTypes } from 'prop-types';
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { cos, add } from "react-native-reanimated";

const Container = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const HeartButton = ({ result }) => {
  
  const [addedToFavorite, setAddedToFavorite] = useState({
    selected: false,
    favorite: null
  });

  addToFavorite = () => {
    setAddedToFavorite({
      selected: !addedToFavorite.selected,
      favorite: result
    })
  }  

  removeFromFavorite = () => {
    setAddedToFavorite({
      selected: !addedToFavorite.selected,
      favorite: null
    })
  }
  const toggle = addedToFavorite.favorite == null ? addToFavorite : removeFromFavorite;
  console.log("favorites", addedToFavorite)

  return (
    <TouchableOpacity enabled="true" onPress={toggle}>
      <Container>
        <FontAwesome5 name="heart" color="white" size={28} />
      </Container>
    </TouchableOpacity>
  );
};

HeartButton.propTypes = {
  favorite: PropTypes.object
};

export default HeartButton;