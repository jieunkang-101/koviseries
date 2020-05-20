import React, { useContext } from "react";
import FavoriteContext from "../../components/FavoriteContext";
import { View, Text} from "react-native";

const FavsPresenter = () => {
  const { favoriteIds } = useContext(FavoriteContext);
  console.log("list", favoriteIds);

  return (
    <View>
      <Text>favorite</Text>
    </View>
  )
}

export default FavsPresenter;
