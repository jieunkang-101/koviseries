import React, { useContext } from "react";
import { View, Text } from "react-native";
import FavoriteContext from "../../components/FavoriteContext";

const FavsPresenter = () => {
  const { favorites } = useContext(FavoriteContext);
  console.log(favorites);

  console.log("favorites", favorites);
  return (
    <View>
      <Text>Favorite</Text>
      <Text>{JSON.stringify(favorites)}</Text>
    </View>
  );
};

export default FavsPresenter;
