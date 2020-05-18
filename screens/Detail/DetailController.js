import React from "react";
import { View, Text } from "react-native";

const DetailController = ({ navigation, route }) => {
  console.log(navigation);
  console.log(route);
  return (
    <View>
      <Text>Detail</Text>
  
    </View>
  )
};

export default DetailController;