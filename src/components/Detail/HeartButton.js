import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import FavoriteContext from "../FavoriteContext";

const Container = styled.View`
  margin-left: auto;
`;

const HeartButton = ({ result }) => {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext);
  const isFav = isFavorite(result);
  console.log("isFav", isFav);

  return (
    <TouchableOpacity enabled="true" onPress={() => toggleFavorite(result)}>
      <Container>
        <Entypo
          name={isFav ? "heart" : "heart-outlined"}
          color={isFav ? "rgb(15, 207, 250)" : "white"}
          size={28}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default HeartButton;