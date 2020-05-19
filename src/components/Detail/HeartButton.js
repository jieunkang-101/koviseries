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
  console.log("result", result);
  
  const [addedToFavorite, setAddedToFavorite] = useState({
    selected: false,
    favorites: []
  });

  addToFavorite = () => {
    setAddedToFavorite({
      selected: true,
      favorites: result
    })
  }  

  console.log("favorites", addedToFavorite)
  // removeFromFavorite = () => {

  // }

  // useEffect(() => {
  //   addToFavorite();
  // }, []);

  // onPress={addToFavorite}
  

  return (
    <TouchableOpacity enabled="true" onPress={addToFavorite}>
      <Container>
        <FontAwesome5 name="heart" color="white" size={28} />
      </Container>
    </TouchableOpacity>
  );
};

// HeartButton.propTypes = {
//   onPress: PropTypes.func
// };

export default HeartButton;