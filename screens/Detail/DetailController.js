import React from "react";
import { View, Text } from "react-native";

const DetailController = ({ 
  navigation, 
  route: {
    params: { id, title }
  } 
}) => {
  // console.log(navigation);
  // console.log(route);
  navigation.setOptions({ title });
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
};

export default DetailController;