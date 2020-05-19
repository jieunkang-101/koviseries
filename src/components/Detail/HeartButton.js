import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { PropTypes } from 'prop-types';
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons'; 

const Container = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const HeartButton = ({ result }) => {
  console.log(result);
  const [addedToFavorite, setAddedToFavorite] = useState({
    selected: false,
    favorites: []
  });

  addToFavorite = () => {
    if (addedToFavorite.favorites.length == 0) {
      setAddedToFavorite({
        selected: !addedToFavorite.selected,
        favorites: addedToFavorite.favorites.concat({
          id: result.id,
          title: result.title,
          poster: result.poster
        })
      })
    } else {
      setAddedToFavorite({
        selected: !addedToFavorite.selected,
        favorites: []
      })
    }  
  }  
  console.log("added", addedToFavorite)

  return (
    <TouchableOpacity enabled="true" onPress={addToFavorite}>
      <Container>
        <Entypo 
          name={addedToFavorite.selected ? "heart" : "heart-outlined"}
          color={addedToFavorite.selected ? "red" : "white"}
          size={28} />
      </Container>
    </TouchableOpacity>
  );
};

HeartButton.propTypes = {
  favorites: PropTypes.array
};

export default HeartButton;