import React from "react";
import { View, Text, Button } from "react-native";

export default ({navigation}) => {
  return (
    <View>
      <Text>TV</Text>
      <Button title="TV Show" onPress={() => navigation.navigate("Detail")} />
    </View>
  )
};