import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { PropTypes } from "prop-types";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import FavoriteContext from "../FavoriteContext";

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const HeartButton = ({ result }) => {
  const { isFavorite, toggleFavoriteId } = useContext(FavoriteContext);
  const isFav = isFavorite(result.id);

  return (
    <TouchableOpacity
      enabled="true"
      onPress={() => toggleFavoriteId(result.id)}
    >
      <Container>
        <Entypo
          name={isFav ? "heart" : "heart-outlined"}
          color={isFav ? "rgb(240, 105, 74)" : "white"}
          size={28}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default HeartButton;